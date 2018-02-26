//Admin QOR을 위한 Admin 정보

package models

import "time"

// Admin struct represent user model.
type Admin struct {
	ID                uint
	CreatedAt         time.Time
	UpdatedAt         time.Time
	Username          string
	EncryptedPassword string
	Password          string
	Description       string
	Email             string
	Name              string
	Gender            string
	Role              string
}

func (u Admin) DisplayName() string {
	return u.Email
}
