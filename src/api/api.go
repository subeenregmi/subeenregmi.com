package api

import (
	"html/template"
	"net/http"

	"github.com/subeenregmi/subeenregmi.com/service"

	"github.com/gin-gonic/gin"
)

func RootHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func BlogsHandler(c *gin.Context) {
	blogs := blog_service.GetBlogs()
	blog_service.SortBlogsTime(blogs)
	html := blog_service.BlogsListHTML(blogs)

	c.HTML(http.StatusOK, "blogs.html", gin.H{
		"blogs" : template.HTML(html),
	})
}

func BlogHandler(c *gin.Context) {
	blog := c.Param("blog")

	if blog == "" {
		NoRouteHandler(c)
		return
	}

	blogs := blog_service.GetBlogs()
	sblog, err := blog_service.SearchBlogs(blog, blogs)

	if err != nil {
		NoRouteHandler(c)
		return
	}


	c.HTML(http.StatusOK, "template.html", gin.H{
		"title": sblog.Title,
		"back_url": "/blogs",
		"page_content": template.HTML(sblog.HTML),
	})	
}

func ProjectsHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "projects.html",gin.H{})
}

func PhotosHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "photos.html", gin.H{})
}

func NoRouteHandler(c *gin.Context) {
	c.HTML(http.StatusNotFound, "template.html", gin.H{
		"title": "Page Missing",
		"back_url": "/",
		"page_content": "The page you are trying to access is missing. :(",
	})
}

func Router() *gin.Engine {
	var router *gin.Engine
	router = gin.Default()

	router.LoadHTMLGlob("../public/*.html")

	router.Static("/static", "../public/static")
	router.GET("/", RootHandler)
	router.GET("/blogs", BlogsHandler)
	router.GET("/blogs/:blog", BlogHandler)
	router.GET("/projects", ProjectsHandler)
	router.GET("/photos", PhotosHandler)

	router.NoRoute(NoRouteHandler)
	
	return router
}
