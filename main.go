package main

import (
	"io/ioutil"
	"regexp"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"github.com/astaxie/beego/logs"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/jungju/aha/admin"
	"github.com/jungju/aha/envs"
	"github.com/jungju/aha/models"
	_ "github.com/jungju/aha/routers"
	"github.com/jungju/gorm_manager"
	"github.com/jungju/qor_admin_auth"
)

var (
	dbreCreate                         = false
	dbLog                              = false
	dbm        *gorm_manager.DBManager = nil
)

func main() {
	envs.InitEnvs()
	beego.Debug("환경 시작", envs.ProdEnv)

	if envs.ProdEnv != envs.RealProdEnv {
		beego.SetLevel(beego.LevelDebug)
		dbreCreate = false
		dbLog = true
		if envs.ProdEnv == envs.DevProdEnv {
			dbreCreate = true
		}
	} else {
		beego.SetLevel(beego.LevelInformational)
	}

	setDB()
	setQOR()
	setRouter()

	logs.Info("Start App...")
	beego.Run()
}

func setRouter() {
	//Swagger 설정
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}

	//기본 Router 설정
	beego.InsertFilter("*", beego.BeforeRouter, func(ctx *context.Context) {
		var validAPIURL = regexp.MustCompile(`^/v1/*`)
		if validAPIURL.Match([]byte(ctx.Input.URL())) {
			beego.Debug("API")
			return
		}

		validAPIURL = regexp.MustCompile(`^/editor/*`)
		if validAPIURL.Match([]byte(ctx.Input.URL())) {
			beego.Debug("EDITOR")
			c, err := ioutil.ReadFile("web/editor/index.html")
			if err != nil {
				logs.Error(err)
			}
			ctx.WriteString(string(c))
			return
		}

		validAPIURL = regexp.MustCompile(`^/*`)
		if validAPIURL.Match([]byte(ctx.Input.URL())) {
			beego.Debug("WWW")
			c, err := ioutil.ReadFile("web/www/dist/index.html")
			if err != nil {
				logs.Error(err)
			}
			ctx.WriteString(string(c))
			return
		}
	})

	beego.SetStaticPath("/editor/dist", "web/editor/dist")
	beego.SetStaticPath("/editor/assets", "web/editor/assets")
	beego.SetStaticPath("/assets", "web/www/dist/assets")
}

func setDB() {
	var err error
	dbm, err = gorm_manager.New(&gorm_manager.DBConfig{
		DBType:             "mysql",
		DBHost:             envs.DBHost,
		DBPort:             envs.DBPort,
		DBName:             envs.DBName,
		DBUser:             envs.DBUser,
		DBPass:             envs.DBPass,
		AutoCreateDatabase: true,
		RecreateDatabase:   dbreCreate,
		OnLog:              dbLog,
	})
	if err != nil {
		panic(err)
	}
	if err := models.Initzation(dbm.GetDB()); err != nil {
		panic(err)
	}
}

func setQOR() {
	if mQorAdmin, err := qor_admin_auth.New(&qor_admin_auth.QorAdminConfig{
		AdminURL:       "admin",
		DB:             dbm.GetDB(),
		AdminUserModel: &models.Admin{},
	}); err == nil {
		if err := admin.SetAdmin(mQorAdmin, dbm.GetDB()); err != nil {
			panic(err)
		}
	} else {
		panic(err)
	}
}
