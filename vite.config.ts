import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import rehypeHighlight from "rehype-highlight";
import rehypeMathJax from "rehype-mathjax";
import remarkDefinitionList from "remark-definition-list";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		mdx({
			remarkPlugins: [remarkGfm, remarkMath, remarkDefinitionList],
			rehypePlugins: [rehypeHighlight, rehypeMathJax],
		}),
		reactRouter(),
	],
	resolve: {
		tsconfigPaths: true,
	},
});
