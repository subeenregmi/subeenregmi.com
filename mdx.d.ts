declare module "*.mdx" {
	export type BlogUri = "transformer";

	export type BlogMetadata = {
		title: string;
		uri: BlogUri;
		description: string;
		estimated: string;
		date: Date;
	};

	export const metadata: BlogMetadata;
}
