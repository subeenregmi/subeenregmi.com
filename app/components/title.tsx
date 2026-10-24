export default function Title({
	title,
	subtitle,
}: {
	title: string;
	subtitle?: string;
}) {
	return (
		<div className="flex flex-col justify-center">
			<h1 className="text-5xl font-bold">{title}</h1>
			{subtitle && <p className="text-xl text-swhite-80 ">{subtitle}</p>}
		</div>
	);
}
