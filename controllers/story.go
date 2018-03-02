package controllers

import (
	"net/http"

	"github.com/jinzhu/copier"
	"github.com/jinzhu/gorm"
	"github.com/jungju/aha/models"
	"github.com/jungju/aha/requests"
	"github.com/jungju/aha/responses"
)

//  StoryController operations for Story
type StoryController struct {
	BaseController
}

// Post ...
// @Title Post
// @Description create Story
// @Param	body		body 	requests.CreateStory	true		"body for Story content"
// @Success 201 {int} models.Story
// @Failure 403 body is empty
// @router / [post]
// @Security userAPIKey
func (c *StoryController) Post() {
	//Request Body 얻기 및 기본적인 유효성 체크
	reqBody := &requests.CreateStory{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Body에 대한 유효성 체크

	//TODO: 생성할 모델을 위해 준비 작업

	//모델 구조 생성
	story := &models.Story{
		Description: reqBody.Description,
	}

	//모델 추가 적용
	if _, err := models.AddStory(story); err != nil {
		c.ErrorAbort(500, err)
	}
	c.Success(http.StatusCreated, story)
}

// GetOne ...
// @Title Get One
// @Description get Story by id
// @Param	id		path 	string	true		"The key for staticblock"
// @Success 200 {object} responses.Story
// @Failure 403 :id is empty
// @router /:id [get]
// @Security userAPIKey
func (c *StoryController) GetOne() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	//TODO: Request Param에 대한 유효성 체크

	//모델 가져오기
	story, err := models.GetStoryByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, convStoryResponse(story))
}

// GetAll ...
// @Title Get All
// @Description get Story
// @Param	query	query	string	false	"Filter. e.g. col1:v1,col2:v2 ..."
// @Param	fields	query	string	false	"Fields returned. e.g. col1,col2 ..."
// @Param	sortby	query	string	false	"Sorted-by fields. e.g. col1,col2 ..."
// @Param	order	query	string	false	"Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ..."
// @Param	limit	query	string	false	"Limit the size of result set. Must be an integer"
// @Param	offset	query	string	false	"Start position of result set. Must be an integer"
// @Success 200 {object} responses.Story
// @Failure 403
// @router / [get]
// @Security userAPIKey
func (c *StoryController) GetAll() {
	//리스트에 필요한 Request Param 얻기
	reqPage, err := c.getQueryPage()
	if err != nil {
		c.ErrorAbort(400, err)
	}

	//모델 리스트 가져오기
	storys, err := models.GetAllStory(reqPage)
	if err != nil {
		c.ErrorAbort(500, err)
	}

	responsesStorys := []*responses.Story{}
	for _, story := range storys {
		cp := story
		responsesStorys = append(responsesStorys, convStoryResponse(&cp))
	}

	c.Success(http.StatusOK, responsesStorys)
}

// Put ...
// @Title Put
// @Description update the Story
// @Param	id		path 	string	true		"The id you want to update"
// @Param	body		body 	requests.UpdateStory	true		"body for Story content"
// @Success 200 {object} models.Story
// @Failure 403 :id is not int
// @router /:id [put]
// @Security userAPIKey
func (c *StoryController) Put() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	reqBody := &requests.UpdateStory{}
	if err := c.setRequestDataAndValid(reqBody); err != nil {
		c.ErrorAbort(400, err)
	}

	story, err := models.GetStoryByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	//TODO: 수정 하기
	story.Description = reqBody.Description

	//모델 수정 적용
	if err = models.UpdateStoryByID(story); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusOK, story)
}

// Delete ...
// @Title Delete
// @Description delete the Story
// @Param	id		path 	string	true		"The id you want to delete"
// @Success 204
// @Failure 403 id is empty
// @router /:id [delete]
// @Security userAPIKey
func (c *StoryController) Delete() {
	//URL의 id 얻기 및 기본적인 유효성 체크
	id := uint(0)
	if err := c.getParamForUintTypeRequired(":id", &id); err != nil {
		c.ErrorAbort(400, err)
	}

	if _, err := models.GetStoryByID(id); err != nil {
		if err == gorm.ErrRecordNotFound {
			c.ErrorAbort(404, err)
		}
		c.ErrorAbort(500, err)
	}

	if err := models.DeleteStory(id); err != nil {
		c.ErrorAbort(500, err)
	}

	c.Success(http.StatusNoContent, nil)
}

func convStoryResponse(story *models.Story) *responses.Story {
	responseStory := &responses.Story{}
	copier.Copy(responseStory, story)
	return responseStory
}
