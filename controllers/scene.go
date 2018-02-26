package controllers

import (
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/jungju/aha/models"
	"github.com/jungju/aha/requests"
)

//  SceneController operations for Scene
type SceneController struct {
	UserBaseController
}

// Post ...
// @Title Post
// @Description create Scene
// @Param	body		body 	requests.CreateScene	true		"body for Scene content"
// @Success 201 {int} models.Scene
// @Failure 403 body is empty
// @router / [post]
// @Security userAPIKey
func (c *SceneController) Post() {
	//Request Body 얻기 및 기본적인 유효성 체크
	reqBody := &requests.CreateScene{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Body에 대한 유효성 체크

	//TODO: 생성할 모델을 위해 준비 작업

	//모델 구조 생성
	scene := &models.Scene{
		Description: reqBody.Description,
	}

	//모델 추가 적용
	if _, err := models.AddScene(scene); err != nil {
		c.ErrorAbort(500, err)
	}
	c.Success(http.StatusCreated, scene)
}

// GetOne ...
// @Title Get One
// @Description get Scene by id
// @Param	id		path 	string	true		"The key for staticblock"
// @Success 200 {object} models.Scene
// @Failure 403 :id is empty
// @router /:id [get]
// @Security userAPIKey
func (c *SceneController) GetOne() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Param에 대한 유효성 체크

	//모델 가져오기
	scene, err := models.GetSceneByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, scene)
}

// GetAll ...
// @Title Get All
// @Description get Scene
// @Param	query	query	string	false	"Filter. e.g. col1:v1,col2:v2 ..."
// @Param	fields	query	string	false	"Fields returned. e.g. col1,col2 ..."
// @Param	sortby	query	string	false	"Sorted-by fields. e.g. col1,col2 ..."
// @Param	order	query	string	false	"Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ..."
// @Param	limit	query	string	false	"Limit the size of result set. Must be an integer"
// @Param	offset	query	string	false	"Start position of result set. Must be an integer"
// @Success 200 {object} models.Scene
// @Failure 403
// @router / [get]
// @Security userAPIKey
func (c *SceneController) GetAll() {
	//리스트에 필요한 Request Param 얻기
	reqPage, err := c.getQueryPage()
	if err != nil {
		c.ErrorAbort(400, err)
	}

	//모델 리스트 가져오기
	scenes, err := models.GetAllScene(reqPage)
	if err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, scenes)
}

// Put ...
// @Title Put
// @Description update the Scene
// @Param	id		path 	string	true		"The id you want to update"
// @Param	body		body 	requests.UpdateScene	true		"body for Scene content"
// @Success 200 {object} models.Scene
// @Failure 403 :id is not int
// @router /:id [put]
// @Security userAPIKey
func (c *SceneController) Put() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	reqBody := &requests.UpdateScene{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	scene, err := models.GetSceneByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	//TODO: 수정 하기
	scene.Description = reqBody.Description

	//모델 수정 적용
	if err = models.UpdateSceneByID(scene); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, scene)
}

// Delete ...
// @Title Delete
// @Description delete the Scene
// @Param	id		path 	string	true		"The id you want to delete"
// @Success 204
// @Failure 403 id is empty
// @router /:id [delete]
// @Security userAPIKey
func (c *SceneController) Delete() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	if _, err := models.GetSceneByID(id); err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	if err := models.DeleteScene(id); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusNoContent, nil)
}
