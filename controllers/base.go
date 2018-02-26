package controllers

import (
	"encoding/json"
	"errors"
	"strconv"
	"strings"

	"github.com/astaxie/beego"
	"github.com/jungju/aha/envs"
	"github.com/jungju/aha/models"
	"github.com/jungju/aha/requests"
)

var (
	errDataNotFound        = errors.New("ErrDataNotFound")
	errDulicatedObject     = errors.New("ErrDulicatedObject")
	errInvalidQuery        = errors.New("ErrInvalidQuery")
	errUnauthorized        = errors.New("ErrUnauthorized")
	errInvalidRequestBody  = errors.New("errInvalidRequestBody")
	errInvalidRequestParam = errors.New("errInvalidRequestParam")
	errUnknown             = errors.New("Unknown")
)

type UserMeta struct {
	UserID  uint
	GroupID uint
	Token   string
}

//BaseController ...
type BaseController struct {
	beego.Controller
	RequestBody requests.RequestBody
}

// Success ...
func (c *BaseController) Success(statusCode int, data interface{}) {
	ext := c.Ctx.Input.Param(":ext")
	c.Ctx.Output.SetStatus(statusCode)
	if data != nil {
		if ext == "xml" {
			c.Data["xml"] = data
			c.ServeXML()
		} else {
			c.Data["json"] = data
			c.ServeJSON()
		}
	}
}

// ErrorAbort ...
func (c *BaseController) ErrorAbort(code int, err error, withMsg ...interface{}) {
	if err != nil {
		beego.Error(err)
		c.CustomAbort(code, err.Error())
	}
	c.CustomAbort(code, "")
}

func (c *BaseController) getQueryPage() (*models.QueryPage, error) {
	queryPage := &models.QueryPage{
		Query: make(map[string]string),
		Limit: 20,
	}

	// fields: col1,col2,entity.col3
	if v := c.GetString("fields"); v != "" {
		queryPage.Fields = strings.Split(v, ",")
	}
	// limit: 10 (default is 10)
	if v, err := c.GetUint64("limit"); err == nil {
		queryPage.Limit = int(v)
	}
	// offset: 0 (default is 0)
	if v, err := c.GetInt64("offset"); err == nil {
		queryPage.Offset = int(v)
	}
	// sortby: col1,col2
	if v := c.GetString("sortby"); v != "" {
		queryPage.Sortby = strings.Split(v, ",")
	}
	// order: desc,asc
	if v := c.GetString("order"); v != "" {
		queryPage.Order = strings.Split(v, ",")
	}
	// query: k:v,k:v
	if v := c.GetString("query"); v != "" {
		for _, cond := range strings.Split(v, ",") {
			kv := strings.SplitN(cond, ":", 2)
			if len(kv) != 2 {
				return nil, errInvalidQuery
			}
			k, v := kv[0], kv[1]
			queryPage.Query[k] = v
		}
	}
	return queryPage, nil
}

func (c *BaseController) setRequestData(reqBody requests.RequestBody) error {
	if len(c.Ctx.Input.RequestBody) == 0 {
		beego.Error("Body에 정보가 없습니다.")
		return errInvalidRequestBody
	}
	if err := json.Unmarshal(c.Ctx.Input.RequestBody, &reqBody); err != nil {
		return err
	}
	return nil
}

func (c *BaseController) setRequestDataAndValid(reqBody requests.RequestBody) error {
	if err := c.setRequestData(reqBody); err != nil {
		beego.Debug("요청 정보가 유효하지 않음", err)
		return err
	}
	if err := reqBody.Valid(); err != nil {
		beego.Debug("요청 정보가 유효하지 않음")
		return err
	}

	return nil
}

func (c *BaseController) getParamForUintTypeRequired(key string, retID *uint) error {
	idString := c.Ctx.Input.Param(key)
	if idString == "" {
		return errInvalidRequestParam
	}
	id, err := strconv.ParseUint(idString, 10, 64)
	if err == nil {
		if id == 0 {
			return errInvalidRequestParam
		}
		uintID := uint(id)
		*retID = uintID
		return nil
	}
	return errInvalidRequestParam
}

func (c *BaseController) GetCurrentUserMeta() (*UserMeta, error) {
	tokenString := c.Ctx.Request.Header.Get(envs.UserTokenHeaderName)
	if tokenString == "" {
		return nil, errUnauthorized
	}
	beego.Debug("전달 받은 토큰", tokenString)

	token, err := parseToken(tokenString)
	if err != nil {
		beego.Debug("전달 받은 토큰 에러", err)
		return nil, err
	}

	return getCurrentUserMetaByToken(token)
}
