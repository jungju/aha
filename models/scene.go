package models

import (
	"time"
)

// gen:qs
type Scene struct {
	ID          uint      `description:""`
	CreatedAt   time.Time `description:""`
	UpdatedAt   time.Time `description:""`
	Name        string    `description:""`
	Description string    `description:""`
	UID         string    `description:""`
	StoryID     uint      `description:""`
	Story       Story     `description:""`
	Frames      []Frame   `description:""`
}

// AddScene insert a new scene into database and returns
// last inserted ID on success.
func AddScene(scene *Scene) (id uint, err error) {
	err = scene.Create(gGormDB)
	id = scene.ID
	return
}

// GetSceneByID retrieves scene by ID. Returns error if
// ID doesn't exist
func GetSceneByID(id uint) (scene *Scene, err error) {
	scene = &Scene{
		ID: id,
	}

	preloadDB := gGormDB.Preload("Frame")

	err = NewSceneQuerySet(preloadDB).One(scene)
	return
}

// GetAllscene retrieves all scene matches certain condition. Returns empty list if
// no records exist
func GetAllScene(queryPage *QueryPage) (scenes []Scene, err error) {
	preloadDB := gGormDB.Preload("Frame")

	err = NewSceneQuerySet(preloadDB).All(&scenes)
	return
}

// UpdateScene updates scene by ID and returns error if
// the record to be updated doesn't exist
func UpdateSceneByID(scene *Scene) (err error) {
	err = scene.Update(gGormDB,
		SceneDBSchema.Description,
	)
	return
}

// DeleteScene deletes scene by ID and returns error if
// the record to be deleted doesn't exist
func DeleteScene(id uint) (err error) {
	scene := &Scene{
		ID: id,
	}
	err = scene.Delete(gGormDB)
	return
}
