import type { BlogUri } from "*.mdx";
import { Link } from "react-router";
import { metadata as BuildingLLMMetadata } from "@/blog/building-llm.mdx";
import Header from "@/components/header";
import TextBlock from "@/components/textblock";
import Title from "@/components/title";

function BlogEntry({
	title,
	uploadedDate,
	description,
	uri,
}: {
	title: string;
	uploadedDate: Date;
	description?: string;
	uri: BlogUri;
}) {
	return (
		<div className="mb-5">
			<div className="text-2xl flex justify-between">
				<Link to={`/blog/${uri}`} viewTransition>
					<div className="hover:text-swhite-45">
						<p>{title}</p>
					</div>
				</Link>
				<p className="text-xl italic text-swhite-45">
					{uploadedDate.toLocaleString(undefined, {
						dateStyle: "medium",
					})}
				</p>
			</div>
			<p className="text-xl text-swhite-45">{description}</p>
		</div>
	);
}

export default function BlogEntries() {
	return (
		<div>
			<Header />
			<TextBlock>
				<Title
					title="BLOGS"
					subtitle="technical problems displayed creatively-ish"
				/>
			</TextBlock>
			<hr className="mx-5 md:mx-[12.5%] my-5" />
			<TextBlock>
				<BlogEntry
					title={BuildingLLMMetadata.title}
					description={BuildingLLMMetadata.description}
					uploadedDate={BuildingLLMMetadata.date}
					uri={BuildingLLMMetadata.uri}
				/>
			</TextBlock>
		</div>
	);
}
