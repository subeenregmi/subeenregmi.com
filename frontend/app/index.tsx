import Links from "@/components/links";
import StickmanUrl from "@/assets/stickman.png";
import Icon from "./components/icon";

export default function Home() {
  return (
    <div className="h-[92.5vh] w-screen flex items-center justify-center">
      <img
        className="h-[100px] invert mr-7"
        src={StickmanUrl}
        alt="stickman figure"
      />
      <div className="text-center">
        <h1 className="text-[48px] font-bold">SUBEEN REGMI</h1>
        <p className="inline-block text-[28px] -mt-2 mr-auto mb-[4.5px] ml-auto text-swhite-75">
          software engineer
        </p>
        <div className="flex justify-evenly">
          <Links
            className="text-[20px] m-[5px]"
            links={[
              ["whoami", "/whoami"],
              ["blogs", "/blogs"],
              ["projects", "/projects"],
              [<Icon variant="github" />, "https://github.com/subeenregmi"],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
