package blog_service

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/gomarkdown/markdown"
)

func GetBlogRoot() *os.Root {
	root, err := os.OpenRoot("../public/blogs")
	if err != nil {
		log.Fatal(fmt.Sprintf("Blog folder cannot be found: %e", err))
	}
	return root
}

func BlogExists(root *os.Root, blog string) bool {
	dirinfo, err := root.Open(blog)
	defer dirinfo.Close()

	return err == nil
}

func GetBlogMD(root *os.Root, blog string) string {
	file, err := root.Open(blog + "/main.md")
	if err != nil {
		log.Printf("MD for %v has not been found: %e", blog, err)
		return ""
	}

	buffer := make([]byte, 100)
	
	var contentBuilder strings.Builder

	rb := 1

	for rb != 0 {
		rb, err := file.Read(buffer)
		if err != nil || rb == 0 {
			break
		}
		contentBuilder.Write(buffer[0:rb])
	}

	log.Println(contentBuilder.String())

	return contentBuilder.String()
}

func GetBlog(blog string) string {
	root := GetBlogRoot()
	if !BlogExists(root, blog) {
		return "Blog not found"
	}

	md := GetBlogMD(root, blog)
	if md == "" {
		return "Blog MD file not found"
	}

	html := markdown.ToHTML([]byte(md), nil, nil)

	return string(html)
}
