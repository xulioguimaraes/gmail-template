import { ProductListProps } from "@/@types/cart";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ItemProductCartProps {
  amaount: number;
  data: ProductListProps;
  id: string;
  quantity: number;
  onRemove: (id: number) => void;
}
export const ItemProductCart = ({
  data,
  quantity,
  onRemove,
}: ItemProductCartProps) => {
  return (
    <View className="justify-between flex-row px-8 items-center">
      <View className="flex-row justify-center items-center">
        <Image
          src={data.image}
          className="w-20 h-20 object-cover bg-[#f4f4f4] rounded-full"
        />
        <View className="justify-center ml-6 items-start">
          <Text className="font-bold text-lg">{data.name}</Text>
          <Text className="text-gray-500">{data.category}</Text>
          <View className="rounded-full overflow-hidden mt-2">
            <Text className="text-xs bg-yellow-200 px-2 py-1">
              Unit {quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => onRemove(data.id)}
            className="flex-row items-center "
          >
            <MaterialIcons name="delete" size={12} color={colors.red[500]} />
            <Text className="text-xs my-2 text-red-500 font-semibold">
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="rounded-full overflow-hidden">
        <Text className="text-xl bg-yellow-200 py-4 px-5 ">
          $ {data.price * quantity}
        </Text>
      </View>
    </View>
  );
};
