import type { BlogMetadata, BlogUri } from "*.mdx";
import type { MDXContent } from "mdx/types";
import { data } from "react-router";
import BuildingLLM, {
	metadata as BuildingLLMMetadata,
} from "@/blog/building-llm.mdx";
import Header from "@/components/header.tsx";
import Icon from "@/components/icon.tsx";
import { markdownComponents } from "@/components/md.tsx";
import TextBlock from "@/components/textblock.tsx";
import Title from "@/components/title.tsx";
import { formatDate } from "@/utils.ts";
import type { Route } from "./+types/blog.tsx";

const BlogsUriMap: Record<
	BlogUri,
	{ content: MDXContent; metadata: BlogMetadata }
> = {
	"building-llm": {
		content: BuildingLLM,
		metadata: BuildingLLMMetadata,
	},
};

function isBlogUri(uri: string): uri is BlogUri {
	return Object.hasOwn(BlogsUriMap, uri);
}

export async function loader({ params }: Route.LoaderArgs) {
	if (!params.uri || !isBlogUri(params.uri)) {
		throw data("Blog not found", { status: 404 });
	}
	return { uri: params.uri };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
	const blog = BlogsUriMap[loaderData.uri];
	const Content = blog.content;
	return (
		<div>
			<Header />
			<TextBlock>
				<Title title={blog.metadata.title} />
				<div className="text-xl italic text-swhite-45 flex gap-2">
					<p>{blog.metadata.estimated}</p>
					<Icon variant="dot" className="self-center mt-1" />
					<p>{formatDate(blog.metadata.date)}</p>
				</div>
				<hr className="my-5" />
			</TextBlock>
			<TextBlock>
				<Content components={markdownComponents} />
			</TextBlock>
		</div>
	);
}
