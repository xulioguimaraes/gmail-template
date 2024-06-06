import { useCart } from "@/hooks/useCart";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const Header = () => {
  const { back } = useRouter();
  const { dataCart } = useCart();
  return (
    <View className=" px-8 flex flex-row justify-between items-center mb-10 ">
      <Text className="text-4xl font-light ">Cart</Text>
      <View className="flex-row gap-4">
        <Pressable className="rounded-full  p-5  bg-yellow-200 justify-center ">
          <Text className="m-4">{dataCart.length}</Text>
        </Pressable>
        <Pressable
          onPress={() => back()}
          className="border h-[90px] rounded-full p-5 items-center flex justify-center border-gray-400"
        >
          <MaterialIcons name="west" size={30} />
        </Pressable>
      </View>
    </View>
  );
};
