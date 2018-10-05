package responses

import "time"

// graffiti: json
type Story struct {
	ID          uint      `json:"id"`
	CreatedAt   time.Time `json:"createdat"`
	UpdatedAt   time.Time `json:"updatedat"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	UID         string    `json:"uid"`
	Scenes      []Scene   `json:"scenes"`
	Sprites     []Sprite  `json:"sprites"`
}

// graffiti: json
type Scene struct {
	ID          uint      `json:"id"`
	CreatedAt   time.Time `json:"createdat"`
	UpdatedAt   time.Time `json:"updatedat"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	UID         string    `json:"uid"`
	StoryID     uint      `json:"storyid"`
	Frames      []Frame   `json:"frames"`
}

// graffiti: json
type Frame struct {
	ID           uint          `json:"id"`
	CreatedAt    time.Time     `json:"createdat"`
	UpdatedAt    time.Time     `json:"updatedat"`
	Name         string        `json:"name"`
	Description  string        `json:"description"`
	UID          string        `json:"uid"`
	StartType    string        `json:"starttype"`
	SpriteStyles []SpriteStyle `json:"spritestyles"`
}

// graffiti: json
type SpriteStyle struct {
	ID          uint      `json:"id"`
	CreatedAt   time.Time `json:"createdat"`
	UpdatedAt   time.Time `json:"updatedat"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	UID         string    `json:"uid"`
	SpriteUID   string    `json:"spriteuid"`
}

// graffiti: json
type Sprite struct {
	ID          uint      `json:"id"`
	CreatedAt   time.Time `json:"createdat"`
	UpdatedAt   time.Time `json:"updatedat"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ImageURL    string    `json:"imageurl"`
	UID         string    `json:"uid"`
	IsRelation  bool      `json:"isrelation"`
	RelationA   *Sprite   `json:"relationa"`
	RelationB   *Sprite   `json:"relationb"`
}
