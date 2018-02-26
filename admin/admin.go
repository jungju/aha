package admin

import (
	"fmt"

	"github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	"github.com/jungju/aha/admin/bindatafs"
	"github.com/jungju/qor_admin_auth"
	"github.com/rs/cors"
)

func SetAdmin(m *qor_admin_auth.QorAdminManager, db *gorm.DB) error {
	m.QorPage.SetAssetFS(bindatafs.AssetFS.NameSpace("admin"))
	if m.Auth != nil {
		m.Auth.Render.SetAssetFS(bindatafs.AssetFS.NameSpace("admin"))
	}

	setViews(m.QorPage)

	mux := m.DefaultServeMux()
	handler := cors.AllowAll().Handler(mux)
	beego.Handler(fmt.Sprintf("/%s/*", m.Config.AuthURL), handler)
	beego.Handler(fmt.Sprintf("/%s/*", m.Config.AdminURL), handler)

	return nil
}
