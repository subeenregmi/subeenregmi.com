package main

import (
	"github.com/subeenregmi/subeenregmi.com/api"
)

func main () {
	router := api.Router()

	router.Run("0.0.0.0:8080")
}
