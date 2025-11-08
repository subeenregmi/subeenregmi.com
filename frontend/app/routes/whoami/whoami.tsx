import Banner from "@/components/banner";
import Header from "@/components/header";
import Icon from "@/components/icon";
import Links from "@/components/links";
import TextBlock from "@/components/textblock";

export default function WhoAmI() {
  return (
    <div>
      <Header />
      <TextBlock>
        <p className="text-center text-3xl">
          hello! my name is{" "}
          <span className="text-5xl font-bold text-center inline">
            subeen regmi
          </span>
          , i am
        </p>
        <div className="w-[31vw] mx-auto my-5">
          <p>
            <Icon variant="locationPin" className="mr-2" />a{" "}
            <span className="font-bold text-[#e78284]">software engineer</span>{" "}
            based in reading, united kingdom
          </p>
          <p>
            <Icon variant="educationHat" className="mr-2" />a{" "}
            <span className="font-bold text-[#a6d189]">third year student</span>{" "}
            at the university of bath
          </p>
          <p>
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
          <p>
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
        <p className="text-center text-3xl">
          i have worked with the following{" "}
          <span className="text-5xl font-bold text-center inline">
            technologies
          </span>
        </p>
        <div className="my-10 w-[25vw] mx-auto flex gap-2 flex-wrap">
          <Banner text="GO" icon="go" />
          <Banner text="PYTHON" icon="python" />
          <Banner text="C" icon="c" />
          <Banner text="C++" icon="cPlusPlus" />
          <Banner text="POSTGRESQL" icon="postgresql" />
          <Banner text="MYSQL" icon="mysql" />
          <Banner text="TYPESCRIPT" icon="typescript" />
          <Banner text="REACT" icon="react" />
          <Banner text="TAILWIND" icon="tailwind" />
          <Banner text="FLASK" icon="flask" />
          <Banner text="VUE" icon="vue" />
          <Banner text="LUA" icon="lua" />
          <Banner text="JAVA" icon="java" />
          <Banner text="NASM" icon="assembly" />
          <Banner text="BASH" icon="bash" />
          <Banner text="GIN" icon="go" />
          <Banner text="GCP" icon="gcp" />
          <Banner text="GIT" icon="git" />
          <Banner text="DOCKER" icon="docker" />
          <Banner text="REDIS" icon="redis" />
          <Banner text="PULUMI" icon="pulumi" />
        </div>
        <p className="text-center text-3xl">
          you can{" "}
          <span className="inline text-5xl font-bold text-center">find me</span>{" "}
          on any of these platforms
        </p>
        <div className="flex justify-center gap-10 my-10">
          <Links
            className="text-4xl"
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
        <p className="text-center text-3xl">
          and here is my
          <span className="inline text-5xl font-bold text-center p-2">
            <Links
              links={[
                {
                  content: "resumé",
                  url: "/resume.pdf",
                  external: true,
                },
              ]}
            />
          </span>
        </p>
      </TextBlock>
    </div>
  );
}
