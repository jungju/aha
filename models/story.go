package models

import (
	"time"
)

// gen:qs
type Story struct {
	ID          uint          `description:""`
	CreatedAt   time.Time     `description:""  gorm:"default: NOW();"`
	UpdatedAt   time.Time     `description:""`
	Name        string        `description:""`
	Description string        `description:""`
	UID         string        `description:""`
	Scenes      []Scene       `description:""`
	SpriteStyle []SpriteStyle `description:""`
}

// AddStory insert a new story into database and returns
// last inserted ID on success.
func AddStory(story *Story) (id uint, err error) {
	err = story.Create(gGormDB)
	id = story.ID
	return
}

// GetStoryByID retrieves story by ID. Returns error if
// ID doesn't exist
func GetStoryByID(id uint) (story *Story, err error) {
	story = &Story{
		ID: id,
	}

	preloadDB := gGormDB.Preload("Scenes").
		Preload("Scenes.Frames").
		Preload("Scenes.Frames.SpriteStyles")

	err = NewStoryQuerySet(preloadDB).
		One(story)
	return
}

// GetAllstory retrieves all story matches certain condition. Returns empty list if
// no records exist
func GetAllStory(queryPage *QueryPage) (storys []Story, err error) {
	preloadDB := gGormDB.Preload("Scenes").
		Preload("Scenes.Frames").
		Preload("Scenes.Frames.SpriteStyles")

	err = NewStoryQuerySet(preloadDB).
		All(&storys)
	return
}

// UpdateStory updates story by ID and returns error if
// the record to be updated doesn't exist
func UpdateStoryByID(story *Story) (err error) {
	err = story.Update(gGormDB,
		StoryDBSchema.Description,
	)
	return
}

// DeleteStory deletes story by ID and returns error if
// the record to be deleted doesn't exist
func DeleteStory(id uint) (err error) {
	story := &Story{
		ID: id,
	}
	err = story.Delete(gGormDB)
	return
}
