import Icon, { type IconVariant } from "./icon";

export interface BannerProps {
	text?: string;
	icon?: IconVariant;
}

export default function Banner({ text, icon }: BannerProps) {
	return (
		<div
			className="spotlight-item border rounded-md text-base w-fit transition-all duration-150"
			style={{
				borderColor: `hsl(0, 0%, calc(35% + var(--spotlight-intensity, 0) * 60%))`,
				color: `hsl(0, 0%, calc(35% + var(--spotlight-intensity, 0) * 60%))`,
			}}
		>
			<p
				className="font-blocks font-bold m-1 transition-all duration-150"
				style={{
					color: `hsl(0, 0%, calc(45% + var(--spotlight-intensity, 0) * 50%))`,
				}}
			>
				<Icon className="-mt-0.5 pr-0.5" variant={icon ?? "python"} />
				{text}
			</p>
		</div>
	);
}
