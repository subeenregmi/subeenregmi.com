import type { PropsWithChildren } from "react";

export interface TextBlockProps {
  className?: string;
}

export default function TextBlock({
  children,
}: PropsWithChildren<TextBlockProps>) {
  return <div className="m-10 mx-[25vw] text-2xl ">{children}</div>;
}
