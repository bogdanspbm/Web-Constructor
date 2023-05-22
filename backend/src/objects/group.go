package objects

type Group struct {
	UID     string `json:"uid" db:"uid"`
	Name    string `json:"name" db:"name"`
	Tooltip string `json:"tooltip" db:"tooltip"`
	Vector  string `json:"vector" db:"vector"`
}
