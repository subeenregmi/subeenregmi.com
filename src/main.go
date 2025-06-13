package main

import (
	"github.com/gin-gonic/gin"
	"github.com/subeenregmi/subeenregmi.com/api"
)

func main () {
	var router *gin.Engine
	router = gin.Default()

	router.LoadHTMLGlob("../public/*.html")

	router.Static("/static", "../public/static")

	router.GET("/", api.RootHandler)	
	router.GET("/blogs", api.BlogsHandler)
	router.GET("/blogs/:blog", api.BlogsHandler)
	router.GET("/projects", api.ProjectsHandler)
	router.GET("/photos", api.PhotosHandler)

	router.Run("0.0.0.0:8080")
}
