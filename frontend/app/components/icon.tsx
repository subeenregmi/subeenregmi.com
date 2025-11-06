import StickmanUrl from "@/assets/stickman.png";
import { cn } from "@/utils";
import { FiGithub } from "react-icons/fi";

export enum IconType {
  Stickman,
  Github,
}

export interface IconProps {
  type: IconType;
  className?: string;
}

export default function Icon({ type, className }: IconProps) {
  switch (type) {
    case IconType.Stickman:
      return (
        <img src={StickmanUrl} className={cn("invert", "h-15", className)} />
      );

    case IconType.Github:
      return (
        <FiGithub
          className={cn("inline", "text-2xl", className)}
          stroke="currentColor"
        />
      );

    default:
      break;
  }
}
