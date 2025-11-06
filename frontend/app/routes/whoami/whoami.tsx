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
          hello i am
          <span className="text-5xl font-bold text-center inline p-2">
            subeen regmi
          </span>
          and i am
        </p>
        <div className="w-fit mx-auto my-5">
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
            <Links links={[["sparklayer b2b", "https://www.sparklayer.io/"]]} />
          </p>
          <p>
            <Icon variant="laptop" className="mr-2" />a previous{" "}
            <span className="font-bold text-[#ca9ee6]">
              software engineering intern
            </span>{" "}
            at{" "}
            <Links links={[["sparklayer b2b", "https://www.sparklayer.io/"]]} />{" "}
            (july - oct. 2025)
          </p>
        </div>
        <p className="text-center text-3xl">
          i have worked with the following
          <span className="text-5xl font-bold text-center inline p-2">
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
      </TextBlock>
    </div>
  );
}
