import "./App.css";
import Links from "./components/Links";
import Stickman from "./assets/stickman.png";

export default function App() {
  return (
    <div className="h-[92.5vh] w-screen flex items-center justify-center">
      <img
        className="h-[100px] invert mr-7"
        src={Stickman}
        alt="stickman figure"
      />
      <div className="text-center">
        <h1 className="text-[48px] font-bold">SUBEEN REGMI</h1>
        <p className="inline-block text-[28px] -mt-2 mr-auto mb-[4.5px] ml-auto text-swhite-75">
          software engineer
        </p>
        <Links links={["whoami", "blogs", "projects"]} />
      </div>
    </div>
  );
}
