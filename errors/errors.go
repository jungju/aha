package errors

import "errors"

var (
	ErrInvalidAuthInfo   = errors.New("ErrInvalidAuthInfo")
	ErrInvalidToken      = errors.New("ErrInvalidToken")
	ErrUnknown           = errors.New("ErrUnknown")
	ErrInvalidCreateUser = errors.New("ErrInvalidCreateUser")
	ErrUnauthorized      = errors.New("ErrUnauthorized")
	ErrDulicatedObject   = errors.New("ErrDulicatedObject")
	ErrInvalidQuery      = errors.New("Error: invalid query key/value pair")
	ErrInvalidUsername   = errors.New("ErrInvalidUsername")
	ErrNeedConfirm       = errors.New("ErrNeedConfirm")
)

func New(errMsg string) error {
	return errors.New(errMsg)
}
