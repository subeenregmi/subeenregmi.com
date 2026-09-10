import StickmanUrl from "@/assets/stickman.png";
import Links from "@/components/links";

export default function Home() {
	return (
		<div className="min-h-dvh w-full flex items-center justify-center pt-safe pb-safe px-4">
			<div className="flex items-center gap-2 md:gap-4">
				<img
					className="h-24 sm:h-[100px] md:h-[125px] shrink-0 invert"
					src={StickmanUrl}
					alt="stickman figure"
				/>
				<div className="text-center">
					<h1 className="text-[clamp(1.5rem,8.5vw,1.875rem)] md:text-5xl font-bold">
						SUBEEN REGMI
					</h1>
					<p className="inline-block text-xl sm:text-2xl md:text-3xl -mt-2 mr-auto mb-[4.5px] ml-auto text-swhite-75">
						software engineer
					</p>
					<div className="flex items-center justify-evenly">
						<Links
							className="inline-flex items-center justify-center min-h-11 min-w-11 text-lg sm:text-xl px-2 md:px-3"
							links={[
								{ content: "whoami", url: "/whoami" },
								{
									content: "blogs",
									url: "https://subeenregmi.github.io",
									external: true,
								},
								{
									content: "github",
									url: "https://github.com/subeenregmi",
									external: true,
								},
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
