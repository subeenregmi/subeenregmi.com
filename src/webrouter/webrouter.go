package webrouter

import (
	"os"
	"log"
	"net/http"
	"github.com/gin-gonic/gin"
)

func RootHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func BlogsHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "blogs.html", gin.H{})
}

func BlogHandler(c *gin.Context) {
	blog := c.Param("blog")

	_, err := os.Stat("../public/blogs" + blog)
	
	if err != nil {
		log.Fatal(err)
	}

	c.HTML(
		http.StatusOK,
		"../public/blogs" + blog + "/main.html",
		gin.H{},
	)
}

func ProjectsHandler(c *gin.Context) {
	c.HTML(
		http.StatusOK,
		"projects.html",
		gin.H{},
	)
}

func PhotosHandler(c *gin.Context) {
	c.HTML(
		http.StatusOK,
		"photos.html",
		gin.H{},
	)
}
