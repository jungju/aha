package models

func testData() {
	for _, obj := range []interface{}{
		&Story{
			ID:   1,
			Name: "프로젝트 만들기",
			Scenes: []Scene{
				Scene{
					ID:   1,
					Name: "기획하기",
					Frames: []Frame{
						Frame{
							ID:        1,
							StartType: "",
							Name:      "생각하기",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{
									ID:       1,
									SpriteID: 1,
									Name:     "1 시작위치",
								},
								SpriteStyle{
									ID:       2,
									SpriteID: 2,
									Name:     "2 시작위치",
								},
								SpriteStyle{
									ID:       3,
									SpriteID: 3,
									Name:     "3 시작위치",
								},
								SpriteStyle{
									ID:       4,
									SpriteID: 4,
									Name:     "4 시작위치",
								},
							},
						},
						Frame{
							ID:        2,
							StartType: "click",
							Name:      "생각하기",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{
									ID:       5,
									SpriteID: 1,
									Name:     "1 이동",
								},
								SpriteStyle{
									ID:       6,
									SpriteID: 2,
									Name:     "2 이동",
								},
								SpriteStyle{
									ID:       7,
									SpriteID: 3,
									Name:     "3 하이라이트",
								},
								SpriteStyle{
									ID:       8,
									SpriteID: 4,
									Name:     "4 하이라이트",
								},
							},
						},
					},
				},
			},
		},
	} {
		_er(createDefaultItem(obj))
	}
}
