package requests

type CreateSpriteStyle struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

type UpdateSpriteStyle struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

func (c *CreateSpriteStyle) Valid() error {
  return validate.Struct(c)
}

func (c *UpdateSpriteStyle) Valid() error {
  return validate.Struct(c)
}
