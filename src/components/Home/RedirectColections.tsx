import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const RedirectColections = () => {
  const router = useRouter();
  return (
    <View className="px-8 flex flex-row pb-6 pt-8 justify-between">
      <Text className="text-2xl font-medium">Collections</Text>
      <TouchableOpacity onPress={() => router.push("/list-collections")}>
        <MaterialIcons name="east" size={30} />
      </TouchableOpacity>
    </View>
  );
};
