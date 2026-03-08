import Icon from "./icon";
import Links from "./links";

export default function Header() {
	return (
		<header className="flex justify-between items-center text-2xl m-2 mb-0">
			<Links
				links={[{ content: <Icon variant="stickman" />, url: "/" }]}
				className="ml-4"
			/>
			<div className="flex items-end gap-5 mr-5 underline underline-offset-[2.5px]">
				<Links
					links={[
						{
							content: "blogs",
							url: "https://subeenregmi.github.io",
							external: true,
						},
						{
							content: <Icon variant="github" />,
							url: "https://github.com/subeenregmi",
							external: true,
						},
					]}
				/>
			</div>
		</header>
	);
}
