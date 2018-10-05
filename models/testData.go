package models

func testData() {
	for _, obj := range []interface{}{
		&Story{
			ID: 1, Name: "프로젝트 진행",
			Scenes: []Scene{
				Scene{
					ID: 1, Name: "기획하기",
					Frames: []Frame{
						Frame{
							ID: 1, StartType: "", Name: "생각하기",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 1, SpriteID: 1, Name: "1 시작위치"},
								SpriteStyle{ID: 2, SpriteID: 2, Name: "2 시작위치"},
								SpriteStyle{ID: 3, SpriteID: 3, Name: "3 시작위치"},
								SpriteStyle{ID: 4, SpriteID: 4, Name: "4 시작위치"},
							},
						},
						Frame{
							ID: 2, StartType: "click", Name: "수집하기",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 5, SpriteID: 1, Name: "1 이동"},
								SpriteStyle{ID: 6, SpriteID: 2, Name: "2 이동"},
								SpriteStyle{ID: 7, SpriteID: 3, Name: "3 하이라이트"},
								SpriteStyle{ID: 8, SpriteID: 4, Name: "4 하이라이트"},
							},
						},
					},
				},
				Scene{
					ID: 2, Name: "설계하기",
					Frames: []Frame{
						Frame{
							ID: 3, StartType: "", Name: "오브젝트 분리",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 9, SpriteID: 1, Name: "1 시작위치"},
								SpriteStyle{ID: 10, SpriteID: 2, Name: "2 시작위치"},
								SpriteStyle{ID: 11, SpriteID: 3, Name: "3 시작위치"},
								SpriteStyle{ID: 12, SpriteID: 4, Name: "4 시작위치"},
							},
						},
						Frame{
							ID: 4, StartType: "click", Name: "DB 구성",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 13, SpriteID: 1, Name: "1 이동"},
								SpriteStyle{ID: 14, SpriteID: 2, Name: "2 이동"},
								SpriteStyle{ID: 15, SpriteID: 3, Name: "3 하이라이트"},
								SpriteStyle{ID: 16, SpriteID: 4, Name: "4 하이라이트"},
							},
						},
					},
				},
				Scene{
					ID: 3, Name: "개발하기",
					Frames: []Frame{
						Frame{
							ID: 5, StartType: "", Name: "환경구축",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 17, SpriteID: 1, Name: "1 시작위치"},
								SpriteStyle{ID: 18, SpriteID: 2, Name: "2 시작위치"},
								SpriteStyle{ID: 19, SpriteID: 3, Name: "3 시작위치"},
								SpriteStyle{ID: 20, SpriteID: 4, Name: "4 시작위치"},
							},
						},
						Frame{
							ID: 6, StartType: "click", Name: "개발",
							SpriteStyles: []SpriteStyle{
								SpriteStyle{ID: 21, SpriteID: 1, Name: "1 이동"},
								SpriteStyle{ID: 22, SpriteID: 2, Name: "2 이동"},
								SpriteStyle{ID: 23, SpriteID: 3, Name: "3 하이라이트"},
								SpriteStyle{ID: 24, SpriteID: 4, Name: "4 하이라이트"},
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
