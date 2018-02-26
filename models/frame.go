package models

import (
	"time"
)

// gen:qs
type Frame struct {
	ID           uint          `description:""`
	CreatedAt    time.Time     `description:""`
	UpdatedAt    time.Time     `description:""`
	Name         string        `description:""`
	Description  string        `description:""`
	UID          string        `description:""`
	StartType    string        `description:""`
	SpriteStyles []SpriteStyle `description:""`
}

// AddFrame insert a new frame into database and returns
// last inserted ID on success.
func AddFrame(frame *Frame) (id uint, err error) {
	err = frame.Create(gGormDB)
	id = frame.ID
	return
}

// GetFrameByID retrieves frame by ID. Returns error if
// ID doesn't exist
func GetFrameByID(id uint) (frame *Frame, err error) {
	frame = &Frame{
		ID: id,
	}
	err = NewFrameQuerySet(gGormDB).One(frame)
	return
}

// GetAllframe retrieves all frame matches certain condition. Returns empty list if
// no records exist
func GetAllFrame(queryPage *QueryPage) (frames []Frame, err error) {
	err = NewFrameQuerySet(gGormDB).All(&frames)
	return
}

// UpdateFrame updates frame by ID and returns error if
// the record to be updated doesn't exist
func UpdateFrameByID(frame *Frame) (err error) {
	err = frame.Update(gGormDB,
		FrameDBSchema.Description,
	)
	return
}

// DeleteFrame deletes frame by ID and returns error if
// the record to be deleted doesn't exist
func DeleteFrame(id uint) (err error) {
	frame := &Frame{
		ID: id,
	}
	err = frame.Delete(gGormDB)
	return
}
