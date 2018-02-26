package envs

import (
	"os"
	"strconv"

	"github.com/astaxie/beego"
	"github.com/jonboulle/clockwork"
)

const (
	RealProdEnv           = "real"
	BetaProdEnv           = "beta"
	AlphaProdEnv          = "alpha"
	DevProdEnv            = "dev"
	TestProdEnv           = "test"
	defaultServicePort    = "8081"
	UserTokenHeaderName   = "X-USER-AUTH-TOKEN"
	DeviceTokenHeaderName = "X-DEVICE-TOKEN"
	secretKey             = "supersecret##olim"
	TestUsername          = "dododo"
	TestUserPassword      = "1133234"
)

//환경변수들
var (
	Clock          = clockwork.NewRealClock()
	ProdEnv        = os.Getenv("PRODENV") //real, beta, alpha, dev
	ServiceHost    = os.Getenv("SERVICE_HOST")
	ServicePort    = os.Getenv("SERVICE_PORT")
	DBHost         = os.Getenv("DB_HOST")
	DBPort         = os.Getenv("DB_PORT")
	DBName         = os.Getenv("DB_NAME")
	DBUser         = os.Getenv("DB_USER")
	DBPass         = os.Getenv("DB_PASS")
	SecretKey      = os.Getenv("SECRET_KEY")
	SystemAdmin    = os.Getenv("SYSTEM_ADMIN")
	SystemPassword = os.Getenv("SYSTEM_PASSWORD")
)

func GetServicePort() int {
	port, err := strconv.ParseInt(ServicePort, 10, 64)
	if err != nil {
		panic("Service port가 없거나 잘못된 이름입니다.")
	}
	return int(port)
}

func InitEnvs() {
	if DBHost == "" || DBName == "" || DBUser == "" || DBPass == "" {
		panic("DB 정보가 없습니다.")
	}
	if ProdEnv == "" {
		ProdEnv = DevProdEnv
	}

	if ServicePort == "" {
		ServicePort = defaultServicePort
		beego.BConfig.Listen.HTTPPort = GetServicePort()
	}
	if DBPort == "" {
		DBPort = "3306"
	}
	if SystemAdmin == "" {
		SystemAdmin = "system@makezip.com"
	}
	if SystemPassword == "" {
		SystemPassword = "1"
	}
	if SecretKey == "" {
		SecretKey = secretKey
	}

	if ProdEnv == RealProdEnv {
		beego.BConfig.RunMode = "prod"
	} else {
		beego.BConfig.RunMode = "dev"
	}

	beego.BConfig.CopyRequestBody = true
}
