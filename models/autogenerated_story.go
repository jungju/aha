package models

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
)

// ===== BEGIN of all query sets

// ===== BEGIN of query set StoryQuerySet

// StoryQuerySet is an queryset type for Story
type StoryQuerySet struct {
	db *gorm.DB
}

// NewStoryQuerySet constructs new StoryQuerySet
func NewStoryQuerySet(db *gorm.DB) StoryQuerySet {
	return StoryQuerySet{
		db: db.Model(&Story{}),
	}
}

func (qs StoryQuerySet) w(db *gorm.DB) StoryQuerySet {
	return NewStoryQuerySet(db)
}

// All is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) All(ret *[]Story) error {
	return qs.db.Find(ret).Error
}

// Count is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) Count() (int, error) {
	var count int
	err := qs.db.Count(&count).Error
	return count, err
}

// Create is an autogenerated method
// nolint: dupl
func (o *Story) Create(db *gorm.DB) error {
	return db.Create(o).Error
}

// CreatedAtEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtEq(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at = ?", createdAt))
}

// CreatedAtGt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtGt(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at > ?", createdAt))
}

// CreatedAtGte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtGte(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at >= ?", createdAt))
}

// CreatedAtLt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtLt(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at < ?", createdAt))
}

// CreatedAtLte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtLte(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at <= ?", createdAt))
}

// CreatedAtNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) CreatedAtNe(createdAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("created_at != ?", createdAt))
}

// Delete is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) Delete() error {
	return qs.db.Delete(Story{}).Error
}

// Delete is an autogenerated method
// nolint: dupl
func (o *Story) Delete(db *gorm.DB) error {
	return db.Delete(o).Error
}

// DescriptionEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) DescriptionEq(description string) StoryQuerySet {
	return qs.w(qs.db.Where("description = ?", description))
}

// DescriptionIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) DescriptionIn(description string, descriptionRest ...string) StoryQuerySet {
	iArgs := []interface{}{description}
	for _, arg := range descriptionRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("description IN (?)", iArgs))
}

// DescriptionNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) DescriptionNe(description string) StoryQuerySet {
	return qs.w(qs.db.Where("description != ?", description))
}

// DescriptionNotIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) DescriptionNotIn(description string, descriptionRest ...string) StoryQuerySet {
	iArgs := []interface{}{description}
	for _, arg := range descriptionRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("description NOT IN (?)", iArgs))
}

// GetUpdater is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) GetUpdater() StoryUpdater {
	return NewStoryUpdater(qs.db)
}

// IDEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDEq(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id = ?", ID))
}

// IDGt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDGt(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id > ?", ID))
}

// IDGte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDGte(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id >= ?", ID))
}

// IDIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDIn(ID uint, IDRest ...uint) StoryQuerySet {
	iArgs := []interface{}{ID}
	for _, arg := range IDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("id IN (?)", iArgs))
}

// IDLt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDLt(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id < ?", ID))
}

// IDLte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDLte(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id <= ?", ID))
}

// IDNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDNe(ID uint) StoryQuerySet {
	return qs.w(qs.db.Where("id != ?", ID))
}

// IDNotIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) IDNotIn(ID uint, IDRest ...uint) StoryQuerySet {
	iArgs := []interface{}{ID}
	for _, arg := range IDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("id NOT IN (?)", iArgs))
}

// Limit is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) Limit(limit int) StoryQuerySet {
	return qs.w(qs.db.Limit(limit))
}

// NameEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) NameEq(name string) StoryQuerySet {
	return qs.w(qs.db.Where("name = ?", name))
}

// NameIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) NameIn(name string, nameRest ...string) StoryQuerySet {
	iArgs := []interface{}{name}
	for _, arg := range nameRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("name IN (?)", iArgs))
}

// NameNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) NameNe(name string) StoryQuerySet {
	return qs.w(qs.db.Where("name != ?", name))
}

// NameNotIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) NameNotIn(name string, nameRest ...string) StoryQuerySet {
	iArgs := []interface{}{name}
	for _, arg := range nameRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("name NOT IN (?)", iArgs))
}

// One is used to retrieve one result. It returns gorm.ErrRecordNotFound
// if nothing was fetched
func (qs StoryQuerySet) One(ret *Story) error {
	return qs.db.First(ret).Error
}

// OrderAscByCreatedAt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderAscByCreatedAt() StoryQuerySet {
	return qs.w(qs.db.Order("created_at ASC"))
}

// OrderAscByID is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderAscByID() StoryQuerySet {
	return qs.w(qs.db.Order("id ASC"))
}

// OrderAscByUpdatedAt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderAscByUpdatedAt() StoryQuerySet {
	return qs.w(qs.db.Order("updated_at ASC"))
}

// OrderDescByCreatedAt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderDescByCreatedAt() StoryQuerySet {
	return qs.w(qs.db.Order("created_at DESC"))
}

// OrderDescByID is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderDescByID() StoryQuerySet {
	return qs.w(qs.db.Order("id DESC"))
}

// OrderDescByUpdatedAt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) OrderDescByUpdatedAt() StoryQuerySet {
	return qs.w(qs.db.Order("updated_at DESC"))
}

// SetCreatedAt is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetCreatedAt(createdAt time.Time) StoryUpdater {
	u.fields[string(StoryDBSchema.CreatedAt)] = createdAt
	return u
}

// SetDescription is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetDescription(description string) StoryUpdater {
	u.fields[string(StoryDBSchema.Description)] = description
	return u
}

// SetID is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetID(ID uint) StoryUpdater {
	u.fields[string(StoryDBSchema.ID)] = ID
	return u
}

// SetName is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetName(name string) StoryUpdater {
	u.fields[string(StoryDBSchema.Name)] = name
	return u
}

// SetUID is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetUID(UID string) StoryUpdater {
	u.fields[string(StoryDBSchema.UID)] = UID
	return u
}

// SetUpdatedAt is an autogenerated method
// nolint: dupl
func (u StoryUpdater) SetUpdatedAt(updatedAt time.Time) StoryUpdater {
	u.fields[string(StoryDBSchema.UpdatedAt)] = updatedAt
	return u
}

// UIDEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UIDEq(UID string) StoryQuerySet {
	return qs.w(qs.db.Where("uid = ?", UID))
}

// UIDIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UIDIn(UID string, UIDRest ...string) StoryQuerySet {
	iArgs := []interface{}{UID}
	for _, arg := range UIDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("uid IN (?)", iArgs))
}

// UIDNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UIDNe(UID string) StoryQuerySet {
	return qs.w(qs.db.Where("uid != ?", UID))
}

// UIDNotIn is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UIDNotIn(UID string, UIDRest ...string) StoryQuerySet {
	iArgs := []interface{}{UID}
	for _, arg := range UIDRest {
		iArgs = append(iArgs, arg)
	}
	return qs.w(qs.db.Where("uid NOT IN (?)", iArgs))
}

// Update is an autogenerated method
// nolint: dupl
func (u StoryUpdater) Update() error {
	return u.db.Updates(u.fields).Error
}

// UpdateNum is an autogenerated method
// nolint: dupl
func (u StoryUpdater) UpdateNum() (int64, error) {
	db := u.db.Updates(u.fields)
	return db.RowsAffected, db.Error
}

// UpdatedAtEq is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtEq(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at = ?", updatedAt))
}

// UpdatedAtGt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtGt(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at > ?", updatedAt))
}

// UpdatedAtGte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtGte(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at >= ?", updatedAt))
}

// UpdatedAtLt is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtLt(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at < ?", updatedAt))
}

// UpdatedAtLte is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtLte(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at <= ?", updatedAt))
}

// UpdatedAtNe is an autogenerated method
// nolint: dupl
func (qs StoryQuerySet) UpdatedAtNe(updatedAt time.Time) StoryQuerySet {
	return qs.w(qs.db.Where("updated_at != ?", updatedAt))
}

// ===== END of query set StoryQuerySet

// ===== BEGIN of Story modifiers

type storyDBSchemaField string

func (f storyDBSchemaField) String() string {
	return string(f)
}

// StoryDBSchema stores db field names of Story
var StoryDBSchema = struct {
	ID          storyDBSchemaField
	CreatedAt   storyDBSchemaField
	UpdatedAt   storyDBSchemaField
	Name        storyDBSchemaField
	Description storyDBSchemaField
	UID         storyDBSchemaField
}{

	ID:          storyDBSchemaField("id"),
	CreatedAt:   storyDBSchemaField("created_at"),
	UpdatedAt:   storyDBSchemaField("updated_at"),
	Name:        storyDBSchemaField("name"),
	Description: storyDBSchemaField("description"),
	UID:         storyDBSchemaField("uid"),
}

// Update updates Story fields by primary key
func (o *Story) Update(db *gorm.DB, fields ...storyDBSchemaField) error {
	dbNameToFieldName := map[string]interface{}{
		"id":          o.ID,
		"created_at":  o.CreatedAt,
		"updated_at":  o.UpdatedAt,
		"name":        o.Name,
		"description": o.Description,
		"uid":         o.UID,
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

		return fmt.Errorf("can't update Story %v fields %v: %s",
			o, fields, err)
	}

	return nil
}

// StoryUpdater is an Story updates manager
type StoryUpdater struct {
	fields map[string]interface{}
	db     *gorm.DB
}

// NewStoryUpdater creates new Story updater
func NewStoryUpdater(db *gorm.DB) StoryUpdater {
	return StoryUpdater{
		fields: map[string]interface{}{},
		db:     db.Model(&Story{}),
	}
}

// ===== END of Story modifiers

// ===== END of all query sets
