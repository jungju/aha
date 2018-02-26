package requests

type CreateStory struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

type UpdateStory struct {
  Name        string  `validate:"required,min=2,max=36"`
  Description string
}

func (c *CreateStory) Valid() error {
  return validate.Struct(c)
}

func (c *UpdateStory) Valid() error {
  return validate.Struct(c)
}
