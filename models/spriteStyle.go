package models

import (
	"time"
)

// gen:qs
type SpriteStyle struct {
	ID          uint      `description:""`
	CreatedAt   time.Time `description:""  gorm:"default: NOW();"`
	UpdatedAt   time.Time `description:""`
	Name        string    `description:""`
	Description string    `description:""`
	UID         string    `description:""`
	FrameID     uint      `description:""`
	Frame       Frame     `description:""`
	SpriteID    uint      `description:""`
}

// AddSpriteStyle insert a new spriteStyle into database and returns
// last inserted ID on success.
func AddSpriteStyle(spriteStyle *SpriteStyle) (id uint, err error) {
	err = spriteStyle.Create(gGormDB)
	id = spriteStyle.ID
	return
}

// GetSpriteStyleByID retrieves spriteStyle by ID. Returns error if
// ID doesn't exist
func GetSpriteStyleByID(id uint) (spriteStyle *SpriteStyle, err error) {
	spriteStyle = &SpriteStyle{
		ID: id,
	}
	err = NewSpriteStyleQuerySet(gGormDB).One(spriteStyle)
	return
}

// GetAllspriteStyle retrieves all spriteStyle matches certain condition. Returns empty list if
// no records exist
func GetAllSpriteStyle(queryPage *QueryPage) (spriteStyles []SpriteStyle, err error) {
	err = NewSpriteStyleQuerySet(gGormDB).All(&spriteStyles)
	return
}

// UpdateSpriteStyle updates spriteStyle by ID and returns error if
// the record to be updated doesn't exist
func UpdateSpriteStyleByID(spriteStyle *SpriteStyle) (err error) {
	err = spriteStyle.Update(gGormDB,
		SpriteStyleDBSchema.Description,
	)
	return
}

// DeleteSpriteStyle deletes spriteStyle by ID and returns error if
// the record to be deleted doesn't exist
func DeleteSpriteStyle(id uint) (err error) {
	spriteStyle := &SpriteStyle{
		ID: id,
	}
	err = spriteStyle.Delete(gGormDB)
	return
}
