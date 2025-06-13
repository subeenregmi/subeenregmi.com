package main

import (
	"github.com/gin-gonic/gin"
	"github.com/subeenregmi/subeenregmi.com/webrouter"
)

func main () {
	var router *gin.Engine
	router = gin.Default()

	router.LoadHTMLGlob("../public/*.html")

	router.Static("/static", "../public/static")

	router.GET("/", webrouter.RootHandler)	
	router.GET("/blogs", webrouter.BlogsHandler)
	router.GET("/blogs/:blog", webrouter.BlogsHandler)
	router.GET("/projects", webrouter.ProjectsHandler)
	router.GET("/photos", webrouter.PhotosHandler)

	router.Run("0.0.0.0:8080")
}
