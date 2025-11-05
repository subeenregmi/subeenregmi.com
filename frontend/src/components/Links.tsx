export interface LinksProps {
  links?: string[];
}

export default function Links({ links }: LinksProps) {
  return (
    <div className="flex justify-evenly">
      {links?.map((link) => {
        return (
          <a className="text-[20px] m-[5px] text-swhite-25 underline underline-offset-[2.5px] transition-colors duration-150 ease-linear hover:text-swhite-75 cursor-pointer">
            {link}
          </a>
        );
      })}
    </div>
  );
}
