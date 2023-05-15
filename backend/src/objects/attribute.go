package objects

type AttributeType struct {
	Name  string `json:"name" db:"name"`
	Color string `json:"color" db:"color"`
}

type AttributeContainer struct {
	Name string `json:"name" db:"name"`
	Icon string `json:"icon" db:"icon"`
}

type Attribute struct {
	UID       string             `json:"uid" db:"uid"`
	Type      AttributeType      `json:"type" db:"type"`
	Container AttributeContainer `json:"container" db:"container"`
	Name      string             `json:"name" db:"name"`
	Tooltip   string             `json:"tooltip" db:"tooltip"`
	Value     string             `json:"value" db:"value"`
}
