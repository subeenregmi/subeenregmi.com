import Icon, { type IconVariant } from "./icon";

export interface BannerProps {
  text?: string;
  icon?: IconVariant;
}

export default function Banner({ text, icon }: BannerProps) {
  return (
    <div className="border rounded-md text-sm w-fit text-swhite-25">
      <p className="font-blocks font-bold text-swhite-50 m-1">
        <Icon className="-mt-0.5 pr-0.5" variant={icon ?? "python"} />
        {text}
      </p>
    </div>
  );
}
