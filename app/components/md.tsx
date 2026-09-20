import type { MDXComponents } from "mdx/types";
import Marker from "@/assets/marker.svg";
import { StyledLink } from "./links";

export const markdownComponents: MDXComponents = {
	h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
	h2: (props) => <h2 className="text-3xl font-bold my-4" {...props} />,
	h3: (props) => <h3 className="text-2xl font-bold my-4" {...props} />,
	h4: (props) => <h4 className="font-bold my-4" {...props} />,
	h5: (props) => <h5 className="font-bold my-4" {...props} />,
	h6: (props) => <h5 className="font-bold my-4" {...props} />,
	p: (props) => <p className="ml-2" {...props} />,
	strong: (props) => <strong className="font-bold" {...props} />,
	ul: (props) => (
		<ul
			className="list-outside ml-6"
			style={{
				listStyleImage: `url("${Marker}")`,
			}}
			{...props}
		/>
	),
	li: (props) => <li className="pl-2 my-1" {...props} />,
	a: (props) => <StyledLink url={props.href} {...props} external={true} />,
	kbd: (props) => <kbd {...props} />,
	ol: (props) => (
		<ol
			className="list-decimal ml-6 marker:font-bold marker:text-swhite-50 marker:font-sister marker:text-[0.95em]"
			{...props}
		/>
	),
	input: (props) => <input className="mr-2" {...props} />,
	blockquote: (props) => (
		<blockquote
			className="border-l-2 italic bg-swhite-15 px-4 py-2 my-2"
			{...props}
		/>
	),
	hr: (props) => <hr className="my-5" {...props} />,
	details: (props) => <details {...props} />,
	summary: (props) => <summary {...props} />,
};
