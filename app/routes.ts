import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("index.tsx"),
	route("whoami", "routes/whoami/whoami.tsx"),
	route("blogs", "routes/blogs/blogs.tsx"),
	route("blog/:uri", "routes/blog/blog.tsx"),
] satisfies RouteConfig;
