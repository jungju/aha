package requests

type CreateSprite struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

type UpdateSprite struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

func (c *CreateSprite) Valid() error {
  return validate.Struct(c)
}

func (c *UpdateSprite) Valid() error {
  return validate.Struct(c)
}
