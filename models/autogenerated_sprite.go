package models

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
)

// ===== BEGIN of all query sets

// ===== BEGIN of query set SpriteQuerySet

// SpriteQuerySet is an queryset type for Sprite
type SpriteQuerySet struct {
	db *gorm.DB
}

// NewSpriteQuerySet constructs new SpriteQuerySet
func NewSpriteQuerySet(db *gorm.DB) SpriteQuerySet {
	return SpriteQuerySet{
		db: db.Model(&Sprite{}),
	}
}

func (qs SpriteQuerySet) w(db *gorm.DB) SpriteQuerySet {
	return NewSpriteQuerySet(db)
}

// All is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) All(ret *[]Sprite) error {
	return qs.db.Find(ret).Error
}

// Count is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) Count() (int, error) {
	var count int
	err := qs.db.Count(&count).Error
	return count, err
}

// Create is an autogenerated method
// nolint: dupl
func (o *Sprite) Create(db *gorm.DB) error {
	return db.Create(o).Error
}

// CreatedAtEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtEq(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at = ?", createdAt))
}

// CreatedAtGt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtGt(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at > ?", createdAt))
}

// CreatedAtGte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtGte(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at >= ?", createdAt))
}

// CreatedAtLt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtLt(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at < ?", createdAt))
}

// CreatedAtLte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtLte(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at <= ?", createdAt))
}

// CreatedAtNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) CreatedAtNe(createdAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("created_at != ?", createdAt))
}

// Delete is an autogenerated method
// nolint: dupl
func (o *Sprite) Delete(db *gorm.DB) error {
	return db.Delete(o).Error
}

// Delete is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) Delete() error {
	return qs.db.Delete(Sprite{}).Error
}

// DescriptionEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) DescriptionEq(description string) SpriteQuerySet {
	return qs.w(qs.db.Where("description = ?", description))
}

// DescriptionIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) DescriptionIn(description string, descriptionRest ...string) SpriteQuerySet {
	iArgs := []interface{}{description}
	for _, arg := range descriptionRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("description IN (?)", iArgs))
}

// DescriptionNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) DescriptionNe(description string) SpriteQuerySet {
	return qs.w(qs.db.Where("description != ?", description))
}

// DescriptionNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) DescriptionNotIn(description string, descriptionRest ...string) SpriteQuerySet {
	iArgs := []interface{}{description}
	for _, arg := range descriptionRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("description NOT IN (?)", iArgs))
}

// GetUpdater is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) GetUpdater() SpriteUpdater {
	return NewSpriteUpdater(qs.db)
}

// IDEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDEq(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id = ?", ID))
}

// IDGt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDGt(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id > ?", ID))
}

// IDGte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDGte(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id >= ?", ID))
}

// IDIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDIn(ID uint, IDRest ...uint) SpriteQuerySet {
	iArgs := []interface{}{ID}
	for _, arg := range IDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("id IN (?)", iArgs))
}

// IDLt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDLt(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id < ?", ID))
}

// IDLte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDLte(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id <= ?", ID))
}

// IDNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDNe(ID uint) SpriteQuerySet {
	return qs.w(qs.db.Where("id != ?", ID))
}

// IDNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IDNotIn(ID uint, IDRest ...uint) SpriteQuerySet {
	iArgs := []interface{}{ID}
	for _, arg := range IDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("id NOT IN (?)", iArgs))
}

// ImageURLEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) ImageURLEq(imageURL string) SpriteQuerySet {
	return qs.w(qs.db.Where("image_url = ?", imageURL))
}

// ImageURLIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) ImageURLIn(imageURL string, imageURLRest ...string) SpriteQuerySet {
	iArgs := []interface{}{imageURL}
	for _, arg := range imageURLRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("image_url IN (?)", iArgs))
}

// ImageURLNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) ImageURLNe(imageURL string) SpriteQuerySet {
	return qs.w(qs.db.Where("image_url != ?", imageURL))
}

// ImageURLNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) ImageURLNotIn(imageURL string, imageURLRest ...string) SpriteQuerySet {
	iArgs := []interface{}{imageURL}
	for _, arg := range imageURLRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("image_url NOT IN (?)", iArgs))
}

// IsRelationEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IsRelationEq(isRelation bool) SpriteQuerySet {
	return qs.w(qs.db.Where("is_relation = ?", isRelation))
}

// IsRelationIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IsRelationIn(isRelation bool, isRelationRest ...bool) SpriteQuerySet {
	iArgs := []interface{}{isRelation}
	for _, arg := range isRelationRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("is_relation IN (?)", iArgs))
}

// IsRelationNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IsRelationNe(isRelation bool) SpriteQuerySet {
	return qs.w(qs.db.Where("is_relation != ?", isRelation))
}

// IsRelationNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) IsRelationNotIn(isRelation bool, isRelationRest ...bool) SpriteQuerySet {
	iArgs := []interface{}{isRelation}
	for _, arg := range isRelationRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("is_relation NOT IN (?)", iArgs))
}

// Limit is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) Limit(limit int) SpriteQuerySet {
	return qs.w(qs.db.Limit(limit))
}

// NameEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) NameEq(name string) SpriteQuerySet {
	return qs.w(qs.db.Where("name = ?", name))
}

// NameIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) NameIn(name string, nameRest ...string) SpriteQuerySet {
	iArgs := []interface{}{name}
	for _, arg := range nameRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("name IN (?)", iArgs))
}

// NameNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) NameNe(name string) SpriteQuerySet {
	return qs.w(qs.db.Where("name != ?", name))
}

// NameNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) NameNotIn(name string, nameRest ...string) SpriteQuerySet {
	iArgs := []interface{}{name}
	for _, arg := range nameRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("name NOT IN (?)", iArgs))
}

// One is used to retrieve one result. It returns gorm.ErrRecordNotFound
// if nothing was fetched
func (qs SpriteQuerySet) One(ret *Sprite) error {
	return qs.db.First(ret).Error
}

// OrderAscByCreatedAt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderAscByCreatedAt() SpriteQuerySet {
	return qs.w(qs.db.Order("created_at ASC"))
}

// OrderAscByID is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderAscByID() SpriteQuerySet {
	return qs.w(qs.db.Order("id ASC"))
}

// OrderAscByUpdatedAt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderAscByUpdatedAt() SpriteQuerySet {
	return qs.w(qs.db.Order("updated_at ASC"))
}

// OrderDescByCreatedAt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderDescByCreatedAt() SpriteQuerySet {
	return qs.w(qs.db.Order("created_at DESC"))
}

// OrderDescByID is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderDescByID() SpriteQuerySet {
	return qs.w(qs.db.Order("id DESC"))
}

// OrderDescByUpdatedAt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) OrderDescByUpdatedAt() SpriteQuerySet {
	return qs.w(qs.db.Order("updated_at DESC"))
}

// PreloadRelationA is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) PreloadRelationA() SpriteQuerySet {
	return qs.w(qs.db.Preload("RelationA"))
}

// PreloadRelationB is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) PreloadRelationB() SpriteQuerySet {
	return qs.w(qs.db.Preload("RelationB"))
}

// RelationAIsNotNull is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) RelationAIsNotNull() SpriteQuerySet {
	return qs.w(qs.db.Where("relationa IS NOT NULL"))
}

// RelationAIsNull is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) RelationAIsNull() SpriteQuerySet {
	return qs.w(qs.db.Where("relationa IS NULL"))
}

// RelationBIsNotNull is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) RelationBIsNotNull() SpriteQuerySet {
	return qs.w(qs.db.Where("relationb IS NOT NULL"))
}

// RelationBIsNull is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) RelationBIsNull() SpriteQuerySet {
	return qs.w(qs.db.Where("relationb IS NULL"))
}

// SetCreatedAt is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetCreatedAt(createdAt time.Time) SpriteUpdater {
	u.fields[string(SpriteDBSchema.CreatedAt)] = createdAt
	return u
}

// SetDescription is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetDescription(description string) SpriteUpdater {
	u.fields[string(SpriteDBSchema.Description)] = description
	return u
}

// SetID is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetID(ID uint) SpriteUpdater {
	u.fields[string(SpriteDBSchema.ID)] = ID
	return u
}

// SetImageURL is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetImageURL(imageURL string) SpriteUpdater {
	u.fields[string(SpriteDBSchema.ImageURL)] = imageURL
	return u
}

// SetIsRelation is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetIsRelation(isRelation bool) SpriteUpdater {
	u.fields[string(SpriteDBSchema.IsRelation)] = isRelation
	return u
}

// SetName is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetName(name string) SpriteUpdater {
	u.fields[string(SpriteDBSchema.Name)] = name
	return u
}

// SetUID is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetUID(UID string) SpriteUpdater {
	u.fields[string(SpriteDBSchema.UID)] = UID
	return u
}

// SetUpdatedAt is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) SetUpdatedAt(updatedAt time.Time) SpriteUpdater {
	u.fields[string(SpriteDBSchema.UpdatedAt)] = updatedAt
	return u
}

// UIDEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UIDEq(UID string) SpriteQuerySet {
	return qs.w(qs.db.Where("uid = ?", UID))
}

// UIDIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UIDIn(UID string, UIDRest ...string) SpriteQuerySet {
	iArgs := []interface{}{UID}
	for _, arg := range UIDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("uid IN (?)", iArgs))
}

// UIDNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UIDNe(UID string) SpriteQuerySet {
	return qs.w(qs.db.Where("uid != ?", UID))
}

// UIDNotIn is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UIDNotIn(UID string, UIDRest ...string) SpriteQuerySet {
	iArgs := []interface{}{UID}
	for _, arg := range UIDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("uid NOT IN (?)", iArgs))
}

// Update is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) Update() error {
	return u.db.Updates(u.fields).Error
}

// UpdateNum is an autogenerated method
// nolint: dupl
func (u SpriteUpdater) UpdateNum() (int64, error) {
	db := u.db.Updates(u.fields)
	return db.RowsAffected, db.Error
}

// UpdatedAtEq is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtEq(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at = ?", updatedAt))
}

// UpdatedAtGt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtGt(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at > ?", updatedAt))
}

// UpdatedAtGte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtGte(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at >= ?", updatedAt))
}

// UpdatedAtLt is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtLt(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at < ?", updatedAt))
}

// UpdatedAtLte is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtLte(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at <= ?", updatedAt))
}

// UpdatedAtNe is an autogenerated method
// nolint: dupl
func (qs SpriteQuerySet) UpdatedAtNe(updatedAt time.Time) SpriteQuerySet {
	return qs.w(qs.db.Where("updated_at != ?", updatedAt))
}

// ===== END of query set SpriteQuerySet

// ===== BEGIN of Sprite modifiers

type spriteDBSchemaField string

func (f spriteDBSchemaField) String() string {
	return string(f)
}

// SpriteDBSchema stores db field names of Sprite
var SpriteDBSchema = struct {
	ID          spriteDBSchemaField
	CreatedAt   spriteDBSchemaField
	UpdatedAt   spriteDBSchemaField
	Name        spriteDBSchemaField
	Description spriteDBSchemaField
	ImageURL    spriteDBSchemaField
	UID         spriteDBSchemaField
	IsRelation  spriteDBSchemaField
	RelationA   spriteDBSchemaField
	RelationB   spriteDBSchemaField
}{

	ID:          spriteDBSchemaField("id"),
	CreatedAt:   spriteDBSchemaField("created_at"),
	UpdatedAt:   spriteDBSchemaField("updated_at"),
	Name:        spriteDBSchemaField("name"),
	Description: spriteDBSchemaField("description"),
	ImageURL:    spriteDBSchemaField("image_url"),
	UID:         spriteDBSchemaField("uid"),
	IsRelation:  spriteDBSchemaField("is_relation"),
	RelationA:   spriteDBSchemaField("relationa"),
	RelationB:   spriteDBSchemaField("relationb"),
}

// Update updates Sprite fields by primary key
func (o *Sprite) Update(db *gorm.DB, fields ...spriteDBSchemaField) error {
	dbNameToFieldName := map[string]interface{}{
		"id":          o.ID,
		"created_at":  o.CreatedAt,
		"updated_at":  o.UpdatedAt,
		"name":        o.Name,
		"description": o.Description,
		"image_url":   o.ImageURL,
		"uid":         o.UID,
		"is_relation": o.IsRelation,
		"relationa":   o.RelationA,
		"relationb":   o.RelationB,
	}
	u := map[string]interface{}{}
	for _, f := range fields {
		fs := f.String()
		u[fs] = dbNameToFieldName[fs]
	}
	if err := db.Model(o).Updates(u).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return err
		}

		return fmt.Errorf("can't update Sprite %v fields %v: %s",
			o, fields, err)
	}

	return nil
}

// SpriteUpdater is an Sprite updates manager
type SpriteUpdater struct {
	fields map[string]interface{}
	db     *gorm.DB
}

// NewSpriteUpdater creates new Sprite updater
func NewSpriteUpdater(db *gorm.DB) SpriteUpdater {
	return SpriteUpdater{
		fields: map[string]interface{}{},
		db:     db.Model(&Sprite{}),
	}
}

// ===== END of Sprite modifiers

// ===== END of all query sets
