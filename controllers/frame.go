package controllers

import (
	"net/http"

	"github.com/jinzhu/gorm"
	"github.com/jungju/aha/models"
	"github.com/jungju/aha/requests"
)

//  FrameController operations for Frame
type FrameController struct {
	UserBaseController
}

// Post ...
// @Title Post
// @Description create Frame
// @Param	body		body 	requests.CreateFrame	true		"body for Frame content"
// @Success 201 {int} models.Frame
// @Failure 403 body is empty
// @router / [post]
// @Security userAPIKey
func (c *FrameController) Post() {
	//Request Body 얻기 및 기본적인 유효성 체크
	reqBody := &requests.CreateFrame{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Body에 대한 유효성 체크

	//TODO: 생성할 모델을 위해 준비 작업

	//모델 구조 생성
	frame := &models.Frame{
		Description: reqBody.Description,
	}

	//모델 추가 적용
	if _, err := models.AddFrame(frame); err != nil {
		c.ErrorAbort(500, err)
	}
	c.Success(http.StatusCreated, frame)
}

// GetOne ...
// @Title Get One
// @Description get Frame by id
// @Param	id		path 	string	true		"The key for staticblock"
// @Success 200 {object} models.Frame
// @Failure 403 :id is empty
// @router /:id [get]
// @Security userAPIKey
func (c *FrameController) GetOne() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Param에 대한 유효성 체크

	//모델 가져오기
	frame, err := models.GetFrameByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, frame)
}

// GetAll ...
// @Title Get All
// @Description get Frame
// @Param	query	query	string	false	"Filter. e.g. col1:v1,col2:v2 ..."
// @Param	fields	query	string	false	"Fields returned. e.g. col1,col2 ..."
// @Param	sortby	query	string	false	"Sorted-by fields. e.g. col1,col2 ..."
// @Param	order	query	string	false	"Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ..."
// @Param	limit	query	string	false	"Limit the size of result set. Must be an integer"
// @Param	offset	query	string	false	"Start position of result set. Must be an integer"
// @Success 200 {object} models.Frame
// @Failure 403
// @router / [get]
// @Security userAPIKey
func (c *FrameController) GetAll() {
	//리스트에 필요한 Request Param 얻기
	reqPage, err := c.getQueryPage()
	if err != nil {
		c.ErrorAbort(400, err)
	}

	//모델 리스트 가져오기
	frames, err := models.GetAllFrame(reqPage)
	if err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, frames)
}

// Put ...
// @Title Put
// @Description update the Frame
// @Param	id		path 	string	true		"The id you want to update"
// @Param	body		body 	requests.UpdateFrame	true		"body for Frame content"
// @Success 200 {object} models.Frame
// @Failure 403 :id is not int
// @router /:id [put]
// @Security userAPIKey
func (c *FrameController) Put() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	reqBody := &requests.UpdateFrame{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	frame, err := models.GetFrameByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	//TODO: 수정 하기
	frame.Description = reqBody.Description

	//모델 수정 적용
	if err = models.UpdateFrameByID(frame); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, frame)
}

// Delete ...
// @Title Delete
// @Description delete the Frame
// @Param	id		path 	string	true		"The id you want to delete"
// @Success 204
// @Failure 403 id is empty
// @router /:id [delete]
// @Security userAPIKey
func (c *FrameController) Delete() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	if _, err := models.GetFrameByID(id); err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	if err := models.DeleteFrame(id); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusNoContent, nil)
}
