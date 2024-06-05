import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const Header = () => {
  return (
    <View className=" px-8 flex flex-row justify-between items-center mb-10 ">
      <Text className="text-4xl font-light max-w-[220px]">
        Order From The Best OF <Text className="font-medium">Snacks</Text>
      </Text>

      <TouchableOpacity className="border h-[90px] rounded-full p-5 items-center flex justify-center border-gray-500">
        <MaterialIcons name="menu" size={30} />
      </TouchableOpacity>
    </View>
  );
};
