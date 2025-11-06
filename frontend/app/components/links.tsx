import { cn } from "@/utils";

export interface LinksProps {
  links?: [any, string, boolean?][];
  className?: string;
}

export default function Links({ links, className, ...props }: LinksProps) {
  return links?.map(([display, url, external], i) => {
    return (
      <a
        key={i}
        className={cn(
          "text-swhite-25",
          "underline",
          "underline-offset-[2.5px]",
          "transition-colors",
          "duration-150",
          "ease-linear",
          "hover:text-swhite-75",
          "cursor-pointer",
          className,
        )}
        href={url}
        target={external ? "_blank" : "_self"}
      >
        {display}
      </a>
    );
  });
}
