package test

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/astaxie/beego"
	"github.com/jungju/aha/envs"
	"github.com/jungju/aha/models"
	"github.com/jungju/aha/requests"
	"github.com/jungju/aha/responses"
	"github.com/jungju/gorm_manager"
	. "github.com/smartystreets/goconvey/convey"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	_ "github.com/jungju/aha/routers"
)

func init() {
	dbm, err := gorm_manager.New(&gorm_manager.DBConfig{
		DBType:             "mysql",
		DBHost:             envs.DBHost,
		DBPort:             envs.DBPort,
		DBName:             envs.DBName,
		DBUser:             envs.DBUser,
		DBPass:             envs.DBPass,
		AutoCreateDatabase: true,
		RecreateDatabase:   true,
		OnLog:              false,
	})
	if err != nil {
		panic(err)
	}

	if err := models.Initzation(dbm.GetDB()); err != nil {
		panic(err)
	}

	_, file, _, _ := runtime.Caller(1)
	beego.Info(file)
	apppath, _ := filepath.Abs(filepath.Dir(filepath.Join(file, "../../../"+string(filepath.Separator))))
	beego.TestBeegoInit(apppath)
}

func reqTest(method string, url string, body interface{}, token string) (int, []byte) {
	var r *http.Request
	fullURL := fmt.Sprintf("/v1/%s", url)
	if body == nil {
		r, _ = http.NewRequest(method, fullURL, nil)
	} else {
		bodyBytes, _ := json.Marshal(body)
		r, _ = http.NewRequest(method, fullURL, bytes.NewBuffer(bodyBytes))
		r.Header.Add("Content-Type", "application/json")
	}
	if token != "" {
		r.Header.Add(envs.UserTokenHeaderName, token)
	}

	w := httptest.NewRecorder()
	beego.BeeApp.Handlers.ServeHTTP(w, r)

	resBody, _ := ioutil.ReadAll(w.Body)

	beego.Trace(fmt.Sprintf("Request : %s %s. Response %d. Body : %s", method, fullURL, w.Code, string(resBody)))

	return w.Code, resBody
}

func reqTestWithModel(method string, url string, body interface{}, token string, model interface{}) int {
	var r *http.Request
	fullURL := fmt.Sprintf("/v1/%s", url)
	if body == nil {
		r, _ = http.NewRequest(method, fullURL, nil)
	} else {
		bodyBytes, _ := json.Marshal(body)
		r, _ = http.NewRequest(method, fullURL, bytes.NewBuffer(bodyBytes))
		r.Header.Add("Content-Type", "application/json")
	}
	if token != "" {
		r.Header.Add(envs.UserTokenHeaderName, token)
	}

	w := httptest.NewRecorder()
	beego.BeeApp.Handlers.ServeHTTP(w, r)

	resBody, _ := ioutil.ReadAll(w.Body)

	beego.Trace(fmt.Sprintf("Request : %s %s. Response %d. Body : %s", method, fullURL, w.Code, string(resBody)))

	if w.Code >= 200 && w.Code <= 400 {
		if model != nil {
			if err := json.Unmarshal(resBody, model); err != nil {
				beego.Error(err)
			}
		}
		beego.Trace(w.Code, ". BODY : ", w.Body.String())
	}

	return w.Code
}

func deleteResource(t *testing.T, url string, tokenString string, expectStatusCode int) {
	status, _ := reqTest("DELETE", url, nil, tokenString)

	if t != nil {
		Convey("Subject: Delete Resource \n", t, func() {
			Convey(fmt.Sprintf("Status Code Should Be %d", expectStatusCode), func() {
				So(status, ShouldEqual, expectStatusCode)
			})
		})
	}
}

func createResource(t *testing.T, url string, tokenString string, expectStatusCode int, reqResource interface{}, resResource interface{}) interface{} {
	status, body := reqTest("POST", url, reqResource, tokenString)
	if resResource != nil {
		json.Unmarshal(body, resResource)
	}

	if t != nil {
		Convey("Subject: Create Resource\n", t, func() {
			Convey(fmt.Sprintf("Status Code Should Be %d", expectStatusCode), func() {
				So(status, ShouldEqual, expectStatusCode)
			})
		})
	}
	return resResource
}

func getResource(t *testing.T, url string, tokenString string, expectStatusCode int, resource interface{}) interface{} {
	status, body := reqTest("GET", url, nil, tokenString)
	json.Unmarshal(body, resource)
	if t != nil {
		Convey("Subject: Get Resource \n", t, func() {
			Convey(fmt.Sprintf("Status Code Should Be %d", expectStatusCode), func() {
				So(status, ShouldEqual, expectStatusCode)
			})
		})
	}
	return resource
}

func updateResource(t *testing.T, url string, tokenString string, expectStatusCode int, reqResource interface{}, resource interface{}) interface{} {
	status, body := reqTest("PUT", url, reqResource, tokenString)
	json.Unmarshal(body, resource)
	if t != nil {
		Convey("Subject: Update Resource \n", t, func() {
			Convey(fmt.Sprintf("Status Code Should Be %d", expectStatusCode), func() {
				So(status, ShouldEqual, expectStatusCode)
			})
		})
	}
	return resource
}

func loginUser(t *testing.T, username string, password string) string {
	loginUser := requests.LoginUser{Username: username, Password: password}
	staus, body := reqTest("POST", "login", loginUser, "")

	userToken := &responses.UserToken{}
	json.Unmarshal(body, userToken)

	if t != nil {
		Convey("Subject: 로그인 확인\n", t, func() {
			Convey("Status Code Should Be 200", func() {
				So(staus, ShouldEqual, 200)
			})
			Convey("토큰값이 있어야 함", func() {
				So(userToken, ShouldNotBeEmpty)
			})
		})
	}
	return userToken.Token
}

func loginAdmin(t *testing.T, username string, password string) string {
	loginAdmin := requests.LoginAdmin{Username: username, Password: password}
	staus, body := reqTest("POST", "admin/login", loginAdmin, "")

	adminToken := &responses.AdminToken{}
	json.Unmarshal(body, adminToken)

	if t != nil {
		Convey("Subject: 로그인 확인\n", t, func() {
			Convey("Status Code Should Be 200", func() {
				So(staus, ShouldEqual, 200)
			})
			Convey("토큰값이 있어야 함", func() {
				So(adminToken, ShouldNotBeEmpty)
			})
		})
	}
	return adminToken.Token
}
