package controllers

import (
	"fmt"
	"strconv"

	"github.com/astaxie/beego"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/jungju/aha/envs"
	"github.com/jungju/aha/errors"
)

type getExistsObjectInUserFunc func(uint) (bool, error)

//BaseController ...
type UserBaseController struct {
	BaseController
	CurrentUserMeta *UserMeta
}

type MakezipCustomClaims struct {
	UserID  uint
	GroupID uint
	jwt.StandardClaims
}

// Prepare ...
func (c *UserBaseController) Prepare() {
	var err error
	if c.CurrentUserMeta, err = c.GetCurrentUserMeta(); err != nil {
		beego.Debug("사용자를 가져오기 실패", err)
		c.ErrorAbort(401, nil)
	}

	//TODO: 사용자 CRM 사용 가능 여부 체크

	//TODO: User 권한 맵. 403.

	//TODO: User 승인 여부 맵. 403.
}

func (c *UserBaseController) getParamForUintTypeRequired(key string, retID *uint) error {
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

func (c *UserBaseController) GetCurrentUserMeta() (*UserMeta, error) {
	return GetCurrentUserMeta(c.Ctx.Request.Header.Get(envs.UserTokenHeaderName))
}

func GetCurrentUserMeta(tokenString string) (*UserMeta, error) {
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

func parseToken(tokenString string) (*jwt.Token, error) {
	token, err := jwt.ParseWithClaims(tokenString, &MakezipCustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(envs.SecretKey), nil
	})
	if err != nil {
		return nil, err
	}
	return token, nil
}

func (c *UserBaseController) checkExistsObject(getExistsObjectFunc getExistsObjectInUserFunc, id uint, ErrRecordNotFoundMsg string) {
	exists, err := getExistsObjectFunc(id)
	if err != nil {
		c.ErrorAbort(500, err)
	}
	if !exists {
		c.ErrorAbort(400, errors.New(ErrRecordNotFoundMsg))
	}
}

func getCurrentUserMetaByToken(token *jwt.Token) (*UserMeta, error) {
	userMeta := &UserMeta{
		Token: token.Raw,
	}
	if claims, ok := token.Claims.(*MakezipCustomClaims); ok && token.Valid {
		userMeta.UserID = claims.UserID
		userMeta.GroupID = claims.GroupID
	} else {
		return nil, errors.ErrInvalidToken
	}
	return userMeta, nil
}
