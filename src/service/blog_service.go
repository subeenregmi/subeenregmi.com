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

type Blog struct {
	Title			string
	HTML 			string
	Creation		int
	Expiry 			int
}

func GetRoot() *os.Root {
	root, err := os.OpenRoot("../public/blogs")
	if err != nil {
		log.Fatal(fmt.Sprintf("Blog folder cannot be found: %e", err))
	}
	return root
}

func FindBlogs(root *os.Root) []os.DirEntry {
	rfs, ok := root.FS().(fs.ReadDirFS)
	
	if !ok {
		log.Fatal(fmt.Sprintf("Cannot read the blog root directory..."))
	}

	dirs, err := rfs.ReadDir(".")
	if err != nil {
		log.Fatal(fmt.Sprintf("Cannot read the dirs in blog root: %e", err))
	}

	log.Println(dirs)
	
	return dirs
}

func RenderMD(root *os.Root, blog *Blog) error {
	file, err := root.Open(blog.Title + "/main.md")

	if blog.Title == "" {
		return fmt.Errorf("Blog title not set...")
	}

	if err != nil {
		log.Printf("MD for %v has not been found: %e", blog.Title, err)
		return err
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

	md := contentBuilder.String()
	blog.HTML = string(markdown.ToHTML([]byte(md), nil, nil))

	return nil
}

func (blog *Blog) Retrieve() error {
	root := GetRoot()
	err := RenderMD(root, blog)

	if err != nil {
		return err
	}

	blog.Creation = int(time.Now().Unix())
	blog.Expiry = int(time.Now().Add(10 * time.Minute).Unix())

	return nil
}

func GetBlogs() []Blog {
	root := GetRoot()
	allBlogs := FindBlogs(root)
	log.Println(allBlogs)
	
	blogs := make([]Blog, len(allBlogs))

	for _, v := range allBlogs {
		blog := Blog{Title: v.Name()}
		err := blog.Retrieve()

		if err != nil {
			log.Printf("%v has no main.md inside folder: %e \n", blog.Title, err)
			continue
		}

		blogs = append(blogs, blog)
	}

	return blogs
}

func formatTime(creation int) string {
	rtime := time.Unix(int64(creation), 0)
	return rtime.Format("2006-01-02")
}

func BlogsListHTML(blogs []Blog) string {
	var html strings.Builder

	log.Println(len(blogs))

	for _, v := range blogs {
		html.Write([]byte(
			fmt.Sprintf(
			`
				<div>
					<a href="/blogs/%v">
						<h2>%v</h2>
					</a>
					<h4>%v</h4>
				</div>
			`, v.Title, v.Title, formatTime(v.Creation)),
		))
	}

	return html.String()
}

func SearchBlogs(title string, blogs []Blog) (Blog, error) {
	for _, v := range blogs {
		if v.Title == title {
			return v, nil
		}
	}

	return Blog{}, fmt.Errorf("Cannot find %v blog...\n", title)
}
