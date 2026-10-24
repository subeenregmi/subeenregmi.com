import Icon, { type IconVariant } from "./icon";

export interface BannerProps {
	text?: string;
	icon?: IconVariant;
}

export default function Banner({ text, icon }: BannerProps) {
	return (
		<div className="spotlight-item border border-spotlight-35 text-spotlight-35 rounded-md text-base w-fit transition-all duration-150">
			<p className="font-blocks font-bold m-1 text-spotlight-45 transition-all duration-150">
				<Icon className="-mt-0.5 pr-0.5" variant={icon ?? "python"} />
				{text}
			</p>
		</div>
	);
}
