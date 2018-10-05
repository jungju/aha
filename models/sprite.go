package models

import (
	"time"
)

// gen:qs
type Sprite struct {
	ID          uint      `description:""`
	CreatedAt   time.Time `description:""  gorm:"default: NOW();"`
	UpdatedAt   time.Time `description:""`
	Name        string    `description:""`
	Description string    `description:""`
	ImageURL    string    `description:""`
	UID         string    `description:""`
	IsRelation  bool      `description:""`
	RelationA   *Sprite   `description:""`
	RelationB   *Sprite   `description:""`
}

// AddSprite insert a new sprite into database and returns
// last inserted ID on success.
func AddSprite(sprite *Sprite) (id uint, err error) {
	err = sprite.Create(gGormDB)
	id = sprite.ID
	return
}

// GetSpriteByID retrieves sprite by ID. Returns error if
// ID doesn't exist
func GetSpriteByID(id uint) (sprite *Sprite, err error) {
	sprite = &Sprite{
		ID: id,
	}
	err = NewSpriteQuerySet(gGormDB).One(sprite)
	return
}

// GetAllsprite retrieves all sprite matches certain condition. Returns empty list if
// no records exist
func GetAllSprite(queryPage *QueryPage) (sprites []Sprite, err error) {
	err = NewSpriteQuerySet(gGormDB).All(&sprites)
	return
}

// UpdateSprite updates sprite by ID and returns error if
// the record to be updated doesn't exist
func UpdateSpriteByID(sprite *Sprite) (err error) {
	err = sprite.Update(gGormDB,
		SpriteDBSchema.Description,
	)
	return
}

// DeleteSprite deletes sprite by ID and returns error if
// the record to be deleted doesn't exist
func DeleteSprite(id uint) (err error) {
	sprite := &Sprite{
		ID: id,
	}
	err = sprite.Delete(gGormDB)
	return
}
