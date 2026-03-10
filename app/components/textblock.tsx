import type { PropsWithChildren } from "react";
import { cn } from "@/utils";

export interface TextBlockProps {
	className?: string;
}

export default function TextBlock({
	children,
	className,
}: PropsWithChildren<TextBlockProps>) {
	return (
		<div
			className={cn(className, "my-2 mx-5 md:mx-[12.5vw] text-2xl md:text-3xl")}
		>
			{children}
		</div>
	);
}
