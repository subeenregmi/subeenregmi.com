import Icon, { IconType } from "./icon";
import Links from "./links";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center text-2xl m-2">
        <a>
          <Icon type={IconType.Stickman} />
        </a>
        <div className="flex items-end gap-5 mr-5 underline underline-offset-[2.5px]">
          <Links
            links={[
              ["blogs", "/blogs"],
              ["projects", "/projects"],
              [
                <Icon type={IconType.Github} />,
                "https://github.com/subeenregmi",
                true,
              ],
            ]}
          />
        </div>
      </header>
      <hr className="text-swhite-25" />
    </>
  );
}
