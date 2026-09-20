import type { BlogUri } from "*.mdx";
import { Link } from "react-router";
import { metadata as TransformerMetadata } from "@/blog/transformer.mdx";
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
					<div className="hover:text-swhite-50">
						<p>{title}</p>
					</div>
				</Link>
				<p className="text-xl italic text-swhite-50">
					{uploadedDate.toLocaleString(undefined, {
						dateStyle: "medium",
					})}
				</p>
			</div>
			<p className="text-xl text-swhite-50">{description}</p>
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
					title={TransformerMetadata.title}
					description={TransformerMetadata.description}
					uploadedDate={TransformerMetadata.date}
					uri={TransformerMetadata.uri}
				/>
			</TextBlock>
		</div>
	);
}
