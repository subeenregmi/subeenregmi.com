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
			// Percentage margins (not vw) so the gutters are measured inside the
			// safe area rather than across the notch on a landscape phone.
			className={cn(className, "my-2 mx-5 md:mx-[12.5%] text-2xl md:text-3xl")}
		>
			{children}
		</div>
	);
}
