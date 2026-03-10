import StickmanUrl from "@/assets/stickman.png";
import Links from "@/components/links";
import Icon from "./components/icon";

export default function Home() {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="flex items-center">
				<img
					className="h-[100px] md:h-[125px] invert mr-2 md:mr-4"
					src={StickmanUrl}
					alt="stickman figure"
				/>
				<div className="text-center">
					<h1 className="text-3xl md:text-5xl font-bold">SUBEEN REGMI</h1>
					<p className="inline-block text-2xl md:text-3xl -mt-2 mr-auto mb-[4.5px] ml-auto text-swhite-75">
						software engineer
					</p>
					<div className="flex justify-evenly">
						<Links
							className="text-xl m-1 md:m-2"
							links={[
								{ content: "whoami", url: "/whoami" },
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
				</div>
			</div>
		</div>
	);
}
