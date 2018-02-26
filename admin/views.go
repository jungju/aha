package admin

import (
	"github.com/jinzhu/inflection"
	"github.com/qor/admin"
	"github.com/qor/roles"
)

var (
	adminPage  *admin.Admin
	anyoneRole *roles.Permission

	//메뉴에 넣을 모델 선언
	// saleResView     *admin.Resource
	// cartResView     *admin.Resource
	// customerResView *admin.Resource
	// estateResView   *admin.Resource
)

func setViews(a *admin.Admin) {
	adminPage = a

	a.SetSiteName("aha")
	anyoneRole = roles.Allow(roles.CRUD, roles.Anyone)

	//메뉴에 넣을 모델 생성
	// saleResView = addResourceAndMenu(&models.Sale{}, "매물", "매물관리", anyoneRole, -1)
	// cartResView = addResourceAndMenu(&models.Cart{}, "카트", "매물관리", anyoneRole, -1)
	// customerResView = addResourceAndMenu(&models.Customer{}, "고객", "매물관리", anyoneRole, -1)
	// estateResView = addResourceAndMenu(&models.Estate{}, "Estate", "매물관리", anyoneRole, -1)
}

//상단메뉴-하단메뉴 만들고 한글 이름이 적용될 수 있게 한 헬프함수.
func addResourceAndMenu(value interface{}, menuViewName string, parentMenu string, permission *roles.Permission, priority int) *admin.Resource {
	res := adminPage.AddResource(value, &admin.Config{Menu: []string{parentMenu}, Permission: permission, Priority: priority})
	menuName := res.Name
	if !res.Config.Singleton {
		menuName = inflection.Plural(res.Name)
	}
	menu := adminPage.GetMenu(menuName)
	menu.Name = menuViewName

	return res
}
