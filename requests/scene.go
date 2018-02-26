package requests

type CreateScene struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

type UpdateScene struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

func (c *CreateScene) Valid() error {
  return validate.Struct(c)
}

func (c *UpdateScene) Valid() error {
  return validate.Struct(c)
}
