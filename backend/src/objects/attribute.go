package objects

type Attribute struct {
	UID       string `json:"uid" db:"uid"`
	Type      string `json:"type" db:"type"`
	Container string `json:"container" db:"container"`
	Name      string `json:"name" db:"name"`
	Tooltip   string `json:"tooltip" db:"tooltip"`
	Value     string `json:"value" db:"value"`
}
