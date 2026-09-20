import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { cn } from "@/utils";
import Icon from "./icon";

export interface LinkInterface {
	content: any;
	url: string;
	external?: boolean;
	externalIcon?: boolean;
}

export interface LinksProps {
	links?: LinkInterface[];
	className?: string;
}

export function StyledLink({
	key,
	className,
	url,
	external,
	children,
	externalIcon,
}: PropsWithChildren<{
	key?: React.Key;
	className?: string;
	externalIcon?: boolean;
	url: string;
	external?: boolean;
}>) {
	return (
		<Link
			key={key}
			className={cn(
				"text-swhite-25",
				"underline",
				"underline-offset-[2.5px]",
				"transition",
				"duration-150",
				"ease-linear",
				"hover:text-swhite-75",
				// Touch devices never hover, so the dim resting colour would be
				// all they ever see. Give them the lit colour and a tap state.
				"touch:text-swhite-75",
				"active:opacity-60",
				"touch-manipulation",
				"cursor-pointer",
				className,
			)}
			to={url}
			viewTransition={!external}
			target={external ? "_blank" : "_self"}
		>
			{children}
			{externalIcon && <Icon className="text-sm ml-1" variant="externalLink" />}
		</Link>
	);
}

export default function Links({ links, className }: LinksProps) {
	return links?.map(({ content, url, external, externalIcon }) => (
		<StyledLink
			key={url}
			url={url}
			external={external}
			className={className}
			externalIcon={externalIcon}
		>
			{content}
		</StyledLink>
	));
}
