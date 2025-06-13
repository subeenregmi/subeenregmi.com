package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"github.com/subeenregmi/subeenregmi.com/webrouter"
)

func main () {
	var router *gin.Engine
	router = gin.Default()

	router.LoadHTMLGlob("../public/*.html")
	router.LoadHTMLGlob("../public/blogs/*/*.html")
	router.Static("/static", "../public/static")

	router.GET("/", func (c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})
	
	router.GET("/blogs", func (c *gin.Context) {
		c.HTML(http.StatusOK, "blogs.html", gin.H{})
	})

	router.GET("/blogs/:blog", func (c *gin.Context) {
		blog := c.Param("blog")
		
		_, err := os.Stat("../public/blogs/"+blog)
		
		if err != nil {
			log.Fatal(err)
		}

		c.HTML(
			http.StatusOK,
			"../public/blogs/" + blog + "/main.html",
			gin.H{},
		)
	})

	router.GET("/projects", func (c *gin.Context) {
		c.HTML(http.StatusOK, "projects.html", gin.H{})
	})

	router.GET("/photos", func (c *gin.Context) {
		c.HTML(http.StatusOK, "photos.html", gin.H{})
	})


	router.Run("0.0.0.0:8080")
}
