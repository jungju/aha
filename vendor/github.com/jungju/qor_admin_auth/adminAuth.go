package qor_admin_auth

import (
	"github.com/qor/admin"
	"github.com/qor/auth"
	"github.com/qor/qor"
)

type AdminAuth struct {
	AuthLoginURL  string
	AuthLogoutURL string
	Auth          *auth.Auth
}

func (a AdminAuth) LoginURL(c *admin.Context) string {
	return a.AuthLoginURL
}

func (a AdminAuth) LogoutURL(c *admin.Context) string {
	return a.AuthLogoutURL
}

func (a AdminAuth) GetCurrentUser(c *admin.Context) qor.CurrentUser {
	currentUser, _ := a.Auth.GetCurrentUser(c.Request).(qor.CurrentUser)
	return currentUser
}
