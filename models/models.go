package models

import (
	"fmt"
	"strings"

	"github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	"github.com/jungju/aha/envs"
	"github.com/jungju/aha/utils"
	"gopkg.in/go-playground/validator.v9"
)

var (
	gGormDB          *gorm.DB
	userGormDB       map[uint]*gorm.DB
	validate         *validator.Validate
	querygt          = "gt"
	querygte         = "gte"
	queryin          = "in"
	queryexact       = "exact"
	queryiexact      = "iexact"
	querycontains    = "contains"
	queryicontains   = "icontains"
	querylt          = "lt"
	querylte         = "lte"
	querystartswith  = "startswith"
	queryistartswith = "istartswith"
	queryendswith    = "endswith"
	queryiendswith   = "iendswith"
	queryisnull      = "isnull"
	queryisnotnull   = "isnotnull"
	queryFilters     = map[string]string{
		querygt:          "> ?",
		querygte:         ">= ?",
		queryin:          "in ?",
		queryexact:       "= ?",
		queryiexact:      "LIKE ?",
		querycontains:    "LIKE BINARY ?",
		queryicontains:   "LIKE ?",
		querylt:          "< ?",
		querylte:         "<= ?",
		querystartswith:  "LIKE BINARY ?",
		queryistartswith: "LIKE ?",
		queryendswith:    "LIKE BINARY ?",
		queryiendswith:   "LIKE ?",
		queryisnull:      "IS NULL ?",
		queryisnotnull:   "IS NOT NULL ?",
	}
)

// QueryPage ...
type QueryPage struct {
	Fields     []string            `json:"fields"`
	Sortby     []string            `json:"sortby"`
	Order      []string            `json:"order"`
	Query      map[string]string   `json:"query"`
	Limit      int                 `json:"limit"`
	Offset     int                 `json:"offset"`
	Tags       []uint              `json:"tags"`
	Properties map[string][]string `json:"properties"`
}

func Initzation(db *gorm.DB) error {
	gGormDB = db
	userGormDB = map[uint]*gorm.DB{}
	err := gGormDB.AutoMigrate(

		//QOR을 위한 테이블
		&Admin{},
		&AuthIDentity{},

		&Sprite{},
		&SpriteStyle{},

		&Story{},
		&Scene{},
		&Frame{},
	).Error
	if err != nil {
		return err
	}

	if err := InitDefaultRow(); err != nil {
		return err
	}

	return nil
}

func createDefaultItem(item interface{}) error {
	err := gGormDB.Create(item).Error
	if err != nil {
		if err := gGormDB.Save(item).Error; err != nil {
			beego.Error(err)
		}
	}
	return nil
}

// GetItem ...
func GetItem(id uint, item interface{}) error {
	return gGormDB.Where("id = ?", id).First(item).Error
}

// GetItemWithFilter ...
func GetItemWithFilter(filterName string, filterValue interface{}, item interface{}) error {
	return gGormDB.Where(fmt.Sprintf("%s = ?", filterName), filterValue).First(item).Error
}

// GetItemsWithFilter ...
func GetItemsWithFilter(tableName string, filterName string, filterValue interface{}, items interface{}) error {
	return gGormDB.Where(fmt.Sprintf("%s = ?", filterName), filterValue).Find(items).Error
}

func _er(err error) {
	if err != nil {
		panic("테스트 파일 넣는중 에러발생 : " + err.Error())
	}
}

// InitDefaultRow ...
func InitDefaultRow() error {
	for _, obj := range []interface{}{
	//TODO: 초기화할 객체
	} {
		_er(createDefaultItem(obj))
	}

	if envs.SystemAdmin != "" && envs.SystemPassword != "" {
		password, _ := utils.Digest(envs.SystemPassword)
		_er(createDefaultItem(&Admin{
			ID:                1,
			Email:             envs.SystemAdmin,
			EncryptedPassword: password,
		}))
		_er(createDefaultItem(&AuthIDentity{
			Provider:          "password",
			EncryptedPassword: password,
			UserID:            1,
			UID:               envs.SystemAdmin,
		}))
	}

	return nil
}

func (q QueryPage) ParsedQueryPage(db *gorm.DB) *gorm.DB {
	db = db.Offset(q.Offset)
	db = db.Limit(q.Limit)

	//https://beego.me/docs/mvc/model/query.md 사용
	for key, v := range q.Query {
		keySplit := strings.Split(key, "__")
		queryKey := ""
		queryFilter := queryexact
		if len(keySplit) == 1 {
			queryKey = keySplit[0]
		} else if len(keySplit) == 2 {
			if _, ok := queryFilters[keySplit[1]]; ok {
				queryFilter = keySplit[1]
				queryKey = keySplit[0]
			} else {
				queryKey = fmt.Sprintf("%s.%s", keySplit[0], keySplit[1])
			}
		} else if len(keySplit) == 3 {
			queryKey = fmt.Sprintf("%s.%s", keySplit[0], keySplit[1])
			queryFilter = keySplit[2]
		}

		nv := v
		if queryFilter == querycontains || queryFilter == queryicontains {
			nv = fmt.Sprintf("%%%s%%", v)
		} else if queryFilter == querystartswith || queryFilter == queryistartswith {
			nv = fmt.Sprintf("%s%%", v)
		} else if queryFilter == queryendswith || queryFilter == queryiendswith {
			nv = fmt.Sprintf("%%%s", v)
		}

		queryFilterParsed := queryFilters[queryexact]
		if _, ok := queryFilters[queryFilter]; ok {
			queryFilterParsed = queryFilters[queryFilter]
		}

		db = db.Where(fmt.Sprintf("%s %s", queryKey, queryFilterParsed), nv)
	}

	if len(q.Sortby) != 0 {
		if len(q.Sortby) == len(q.Order) {
			for i, v := range q.Sortby {
				asc := true

				if len(q.Order) <= i+1 {
					if q.Order[i] == "desc" {
						asc = false
					}
				}

				db = db.Order(v, asc)
			}
		}
	}

	return db
}
