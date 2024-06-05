import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const RedirectColections = () => {
  return (
    <View className="px-8 flex flex-row pb-6 pt-8 justify-between">
      <Text className="text-2xl font-medium">Collections</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Link href="/list-collections">
          <MaterialIcons name="east" size={30} />
        </Link>
      </TouchableOpacity>
    </View>
  );
};
