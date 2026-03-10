import Banner from "@/components/banner";
import Header from "@/components/header";
import Icon from "@/components/icon";
import Links from "@/components/links";
import SpotlightContainer from "@/components/spotlight";
import TextBlock from "@/components/textblock";

export default function WhoAmI() {
	const bolded = (text: any) => (
		<span className="text-3xl md:text-5xl font-bold md:text-center inline">
			{text}
		</span>
	);
	return (
		<div>
			<Header />
			<TextBlock className="flex flex-col justify-center items-center">
				<p className="mb-2 md:mb-4">
					hello! my name is {bolded("subeen regmi")}
					<span className="max-sm:hidden">
						,
						<br className="md:hidden" /> i am
					</span>
				</p>
				<div className="max-sm:w-[75vw] w-fit max-sm:text-xl md:text-2xl mb-2">
					<p className="w-fit">
						<Icon variant="locationPin" className="mr-2" />a{" "}
						<span className="font-bold text-[#e78284]">software engineer</span>{" "}
						based in reading, united kingdom
					</p>
					<p className="w-fit">
						<Icon variant="educationHat" className="mr-2" />a{" "}
						<span className="font-bold text-[#a6d189]">third year student</span>{" "}
						at the university of bath
					</p>
					<p className="w-fit">
						<Icon variant="code" className="mr-2" />a current{" "}
						<span className="font-bold text-[#8caaee]">
							part-time software engineer
						</span>{" "}
						at{" "}
						<Links
							links={[
								{
									content: "sparklayer b2b",
									url: "https://www.sparklayer.io/",
									external: true,
									externalIcon: true,
								},
							]}
						/>
					</p>
					<p className="w-fit">
						<Icon variant="laptop" className="mr-2" />a previous{" "}
						<span className="font-bold text-[#ca9ee6]">
							software engineering intern
						</span>{" "}
						at{" "}
						<Links
							links={[
								{
									content: "sparklayer b2b",
									url: "https://www.sparklayer.io/",
									external: true,
									externalIcon: true,
								},
							]}
						/>{" "}
					</p>
				</div>
				<p className="text-center">
					i have worked with the following {bolded("technologies")}
				</p>
				<SpotlightContainer
					radius={200}
					className="md:mt-8 my-4 w-[80vw] md:w-[45vw] lg:w-[27.5vw] mx-auto flex gap-2 flex-wrap justify-center md:justify-start"
				>
					<Banner text="GO" icon="go" />
					<Banner text="PYTHON" icon="python" />
					<Banner text="C" icon="c" />
					<Banner text="C++" icon="cPlusPlus" />
					<Banner text="RUST" icon="rust" />
					<Banner text="TYPESCRIPT" icon="typescript" />
					<Banner text="JAVA" icon="java" />
					<Banner text="LUA" icon="lua" />
					<Banner text="HASKELL" icon="haskell" />
					<Banner text="NIX" icon="nix" />
					<Banner text="NASM" icon="assembly" />
					<Banner text="BASH" icon="bash" />

					<Banner text="POSTGRESQL" icon="postgresql" />
					<Banner text="REDIS" icon="redis" />
					<Banner text="MYSQL" icon="mysql" />
					<Banner text="MONGO" icon="mongo" />

					<Banner text="GCP" icon="gcp" />
					<Banner text="GIT" icon="git" />
					<Banner text="DOCKER" icon="docker" />
					<Banner text="PULUMI" icon="pulumi" />

					<Banner text="REACT" icon="react" />
					<Banner text="TAILWIND" icon="tailwind" />
					<Banner text="FLASK" icon="flask" />
					<Banner text="VUE" icon="vue" />
					<Banner text="GIN" icon="go" />
				</SpotlightContainer>
				<p className="text-center">
					you can {bolded("find me")} on any of these platforms
				</p>
				<div className="flex justify-center gap-5 mt-6 my-4 md:gap-8">
					<Links
						className="text-3xl md:text-4xl"
						links={[
							{
								content: <Icon variant="youtube" />,
								url: "https://www.youtube.com/channel/UCLlTDBQpUxOMOEuCNDWVMOQ",
								external: true,
							},
							{
								content: <Icon variant="twitter" />,
								url: "https://x.com/subeenregmi",
								external: true,
							},
							{
								content: <Icon variant="linkedin" />,
								url: "https://www.linkedin.com/in/subeenregmi",
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
				<p className="mb-10 text-center">
					here is my{" "}
					{bolded(
						<Links
							links={[
								{
									content: "resumé",
									url: "/resume.pdf",
									external: true,
								},
							]}
						/>,
					)}
				</p>
			</TextBlock>
		</div>
	);
}
