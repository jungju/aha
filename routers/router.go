// @APIVersion 1.0.0
// @Title aha API
// @Description AHACRM API
// @Contact leejungju.go@gmail.com
// @TermsOfServiceUrl http://aha.com
// @License Private
// @SecurityDefinition userAPIKey apiKey X-USER-AUTH-TOKEN header "I love auto-generated docs
package routers

import (
	"github.com/astaxie/beego"
	"github.com/jungju/aha/controllers"
)

func init() {
	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("/sprites",
			beego.NSInclude(
				&controllers.SpriteController{},
			),
		),
		beego.NSNamespace("/spriteStyles",
			beego.NSInclude(
				&controllers.SpriteStyleController{},
			),
		),
		beego.NSNamespace("/stories",
			beego.NSInclude(
				&controllers.StoryController{},
			),
		),
		beego.NSNamespace("/scenes",
			beego.NSInclude(
				&controllers.SceneController{},
			),
		),
		beego.NSNamespace("/frames",
			beego.NSInclude(
				&controllers.FrameController{},
			),
		),
	)

	beego.AddNamespace(ns)
}
