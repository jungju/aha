package requests

import (
	"gopkg.in/go-playground/validator.v9"
)

var validate *validator.Validate

// RequestBody ...
type RequestBody interface {
	Valid() error
}

func init() {
	validate = validator.New()
}
