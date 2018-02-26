package qor_admin_auth

import (
	"fmt"
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/jinzhu/inflection"

	"github.com/qor/admin"
	"github.com/qor/auth"
	"github.com/qor/qor"
)

type QorAdminConfig struct {
	AdminURL       string
	DB             *gorm.DB
	OnAuth         bool
	LoginURL       string
	LogoutURL      string
	AuthURL        string
	AdminUserModel interface{}
	SiteName       string
}

type QorAdminManager struct {
	Config           *QorAdminConfig
	QorPage          *admin.Admin
	Auth             *auth.Auth
	PageResourcesMap map[string]*admin.Resource
	HTTPHandler      http.Handler
}

func (c *QorAdminManager) setAdmin() error {
	c.PageResourcesMap = map[string]*admin.Resource{}
	c.QorPage = admin.New(&qor.Config{DB: c.Config.DB})

	if c.Config.OnAuth {
		if c.Config.AdminUserModel != nil {
			c.Auth = setAuth(c.Config.AuthURL, c.Config.DB, c.Config.AdminUserModel)
			c.QorPage.SetAuth(&AdminAuth{
				AuthLoginURL:  c.Config.LoginURL,
				AuthLogoutURL: c.Config.LogoutURL,
				Auth:          c.Auth,
			})
		}
	}

	c.QorPage.SetSiteName(c.Config.SiteName)

	return nil
}

func (c *QorAdminManager) AddResourceForPage(key string, value interface{}, menuViewName string) {
	res := c.QorPage.AddResource(value)
	menuName := res.Name
	if !res.Config.Singleton {
		menuName = inflection.Plural(res.Name)
	}
	c.QorPage.GetMenu(menuName).Name = menuViewName
	c.PageResourcesMap[key] = res
}

func (c *QorAdminManager) GetResourceForPage(key string) *admin.Resource {
	if _, ok := c.PageResourcesMap[key]; !ok {
		return nil
	}
	return c.PageResourcesMap[key]
}

func (m *QorAdminManager) DefaultServeMux() *http.ServeMux {
	mux := http.NewServeMux()
	m.QorPage.MountTo("/"+m.Config.AdminURL, mux)
	if m.Config.OnAuth {
		mux.Handle(fmt.Sprintf("/%s/", m.Config.AuthURL), m.Auth.NewServeMux())
	}

	return mux
}

func DefaultNew(db *gorm.DB, userModel interface{}, apiUserModel interface{}) (*QorAdminManager, error) {
	m := &QorAdminManager{
		Config: &QorAdminConfig{
			AdminURL:       "admin",
			DB:             db,
			OnAuth:         true,
			LoginURL:       "/auth/login",
			LogoutURL:      "/auth/logout",
			AuthURL:        "auth",
			AdminUserModel: userModel,
		},
	}
	if err := m.setAdmin(); err != nil {
		return nil, err
	}
	return m, nil
}

func New(c *QorAdminConfig) (*QorAdminManager, error) {
	m := &QorAdminManager{
		Config: c,
	}
	if err := m.setAdmin(); err != nil {
		return nil, err
	}
	return m, nil
}
