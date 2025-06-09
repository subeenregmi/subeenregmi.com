package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main () {
	var router *gin.Engine
	router = gin.Default()
	
	//data := []byte("Hello World")
	router.LoadHTMLGlob("../public/*.html")
	router.Static("/static", "../public/static")

	router.GET("/", func (c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})
	
	router.GET("/blogs", func (c *gin.Context) {
		c.HTML(http.StatusOK, "blogs.html", gin.H{})
	})

	router.GET("/projects", func (c *gin.Context) {
		c.HTML(http.StatusOK, "projects.html", gin.H{})
	})

	router.GET("/photos", func (c *gin.Context) {
		c.HTML(http.StatusOK, "photos.html", gin.H{})
	})

	router.Run("localhost:8080")
}
