import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export const MenuButton = () => {
  return (
    <Pressable>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
};
