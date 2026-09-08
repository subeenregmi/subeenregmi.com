import Icon from "./icon";
import Links from "./links";

export default function Header() {
	return (
		<header className="pt-safe">
			<div className="flex justify-between items-center gap-4 text-xl md:text-2xl px-3 md:px-4 pt-2">
				<Links
					links={[
						{
							content: <Icon variant="stickman" className="h-10 md:h-15" />,
							url: "/",
						},
					]}
					className="inline-flex items-center justify-center min-h-11 min-w-11"
				/>
				<nav className="flex items-center gap-2 md:gap-3 underline underline-offset-[2.5px]">
					<Links
						className="inline-flex items-center justify-center min-h-11 min-w-11 px-2"
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
				</nav>
			</div>
		</header>
	);
}
