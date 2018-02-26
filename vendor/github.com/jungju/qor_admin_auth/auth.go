package qor_admin_auth

import (
	"github.com/jinzhu/gorm"

	"github.com/jungju/qor_admin_auth/clean"
	"github.com/qor/auth"
	"github.com/qor/auth/providers/password"
)

func setAuth(authURL string, db *gorm.DB, userModel interface{}) *auth.Auth {
	Auth := clean.New(&auth.Config{
		DB:        db,
		UserModel: userModel,
		//Redirector: auth.Redirector{RedirectBack: config.RedirectBack},
	})

	if prov := Auth.GetProvider("password"); prov == nil {
		Auth.RegisterProvider(password.New(&password.Config{
			Confirmable: false,
		}))
	} else {
		passwordProv := prov.(*password.Provider)
		passwordProv.Confirmable = false
	}

	return Auth
}
