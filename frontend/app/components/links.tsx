import { cn } from "@/utils";
import Icon from "./icon";

export interface Link {
  content: any;
  url: string;
  external?: boolean;
  externalIcon?: boolean;
}

export interface LinksProps {
  links?: Link[];
  className?: string;
}

export default function Links({ links, className }: LinksProps) {
  return links?.map(({ content, url, external, externalIcon }, i) => {
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
        {content}
        {externalIcon && (
          <Icon className="text-sm ml-1" variant="externalLink" />
        )}
      </a>
    );
  });
}
