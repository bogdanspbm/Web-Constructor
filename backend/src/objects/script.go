package objects

type Script struct {
	UID     string `json:"uid" db:"uid"`
	Name    string `json:"name" db:"name"`
	Tooltip string `json:"tooltip" db:"tooltip"`
	Body    string `json:"body" db:"body"`
}
