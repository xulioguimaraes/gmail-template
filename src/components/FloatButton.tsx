import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

export const FloatButton = () => {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-4 flex-row gap-2 items-center"
      activeOpacity={0.7}
    >
      <MaterialIcons name="edit" color={colors.orange[500]} size={22} />
      <Text className=" font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  );
};
