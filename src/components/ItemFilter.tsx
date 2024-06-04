import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import clsx from "clsx";
interface ItemFilterProps {
  icon?: ReactNode | null;
  name: string;
  active: boolean;
  id: string;
  onPressable: (id: string) => void;
}

interface ItemFilterProps {
  icon?: ReactNode | null;
  name: string;
}

const ItemFilterComponent: React.FC<ItemFilterProps> = ({
  icon,
  name,
  active,
  id,
  onPressable,
}) => {
  return (
    <Pressable
      className={clsx("py-4 px-5 flex flex-row gap-2  mr-4 rounded-full items-center", {
        "bg-yellow-400": !!active,
        "bg-[#f4f4f4]": !active,
      })}
      onPress={() => onPressable(id)}
    >
      {icon}
      <Text className="text-lg">{name}</Text>
    </Pressable>
  );
};

export const ItemFilter = ItemFilterComponent;
