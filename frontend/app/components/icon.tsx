import StickmanUrl from "@/assets/stickman.png";
import { cn } from "@/utils";
import {
  BiLogoCPlusPlus,
  BiLogoFlask,
  BiLogoJava,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaDocker, FaGitAlt } from "react-icons/fa";
import { FaGolang, FaReact } from "react-icons/fa6";
import { FiGithub, FiMapPin } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import {
  IoSchoolOutline,
  IoLaptopOutline,
  IoCodeSlash,
  IoLogoPython,
} from "react-icons/io5";
import { LuBinary } from "react-icons/lu";
import { SiGnubash, SiLua, SiPulumi, SiRedis } from "react-icons/si";
import { TbHexagonLetterCFilled } from "react-icons/tb";

const IconVariantMap = {
  github: FiGithub,
  locationPin: FiMapPin,
  educationHat: IoSchoolOutline,
  code: IoCodeSlash,
  laptop: IoLaptopOutline,
  python: IoLogoPython,
  go: FaGolang,
  cPlusPlus: BiLogoCPlusPlus,
  c: TbHexagonLetterCFilled,
  postgresql: BiLogoPostgresql,
  mysql: GrMysql,
  typescript: BiLogoTypescript,
  react: FaReact,
  tailwind: BiLogoTailwindCss,
  flask: BiLogoFlask,
  vue: BiLogoVuejs,
  lua: SiLua,
  java: BiLogoJava,
  assembly: LuBinary,
  bash: SiGnubash,
  gcp: DiGoogleCloudPlatform,
  git: FaGitAlt,
  docker: FaDocker,
  redis: SiRedis,
  pulumi: SiPulumi,
  stickman: true,
};

export type IconVariant = keyof typeof IconVariantMap;

export interface IconProps {
  variant: IconVariant;
  className?: string;
}

export default function Icon({ variant, className }: IconProps) {
  if (variant === "stickman") {
    return (
      <img src={StickmanUrl} className={cn("invert", "h-15", className)} />
    );
  }

  const IconComponent = IconVariantMap[variant];
  if (!IconComponent) return;

  return (
    <IconComponent className={cn("inline", className)} stroke="currentColor" />
  );
}
