package blog_service

import (
	"fmt"
	"io/fs"
	"log"
	"os"
	"strings"
	"time"

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

func ListAllBlogs(root *os.Root) []os.DirEntry {
	rfs, ok := root.FS().(fs.ReadDirFS)
	
	if !ok {
		log.Fatal(fmt.Sprintf("Cannot read the blog root directory..."))
	}

	dirs, err := rfs.ReadDir(".")
	if err != nil {
		log.Fatal(fmt.Sprintf("Cannot read the dirs in blog root: %e", err))
	}
	
	return dirs
}

func GetBlogTime(dir os.DirEntry) (time.Time, error) {
	dinfo, err := dir.Info()
	
	if err != nil {
		return time.Time{}, err
	}

	return dinfo.ModTime(), nil
}

func GetBlogs() map[string] string {
	root := GetBlogRoot()
	blogs := ListAllBlogs(root)
	
	blogtime := make(map[string]string)

	for _, v := range blogs {
		time, _:= GetBlogTime(v)
		blogtime[v.Name()] = time.Format("2006-01-02")
	}

	return blogtime
}

func RenderBlogsList(blogs map[string]string) string {
	var html strings.Builder

	for k, v := range blogs {
		html.Write([]byte(
			fmt.Sprintf(
			`
				<div>
					<a href="/blogs/%v">
						<h2>%v</h2>
					</a>
					<h4>%v</h4>
				</div>
			`, k, k, v),
		))
	}

	return html.String()
}
