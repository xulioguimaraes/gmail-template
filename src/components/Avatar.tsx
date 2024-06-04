import clsx from "clsx";
import { Image, ImageProps } from "react-native";

type AvatarProps = ImageProps & {
  size?: "small" | "medium";
};

export const Avatar = ({ size = "medium", ...rest }: AvatarProps) => {
  return (
    <Image
      className={clsx("rounded-full", {
        "w-8 h-8": size === "small",
        "w-10 h-10": size === "medium",
      })}
      {...rest}
    />
  );
};
