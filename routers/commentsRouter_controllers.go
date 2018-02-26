package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"],
		beego.ControllerComments{
			Method: "GetAll",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:FrameController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"],
		beego.ControllerComments{
			Method: "GetAll",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SceneController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"],
		beego.ControllerComments{
			Method: "GetAll",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"],
		beego.ControllerComments{
			Method: "GetAll",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:SpriteStyleController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"],
		beego.ControllerComments{
			Method: "GetAll",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"] = append(beego.GlobalControllerRouter["github.com/jungju/aha/controllers:StoryController"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

}
