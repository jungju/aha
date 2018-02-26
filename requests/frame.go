package requests

type CreateFrame struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

type UpdateFrame struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

func (c *CreateFrame) Valid() error {
  return validate.Struct(c)
}

func (c *UpdateFrame) Valid() error {
  return validate.Struct(c)
}
