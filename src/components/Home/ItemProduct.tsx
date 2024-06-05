import { ProductListProps } from "@/@types/cart";
import { useCart } from "@/hooks/useCart";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

type ItemProduct = ProductListProps & {
  position: number;
  length: number;
};

const ItemProductComponent = ({
  position,
  length,
  name,
  color,
  id,
  price,
  category,
  image,
}: ItemProduct) => {
  const { addProductCart } = useCart();

  return (
    <View
      className={clsx(
        ` px-8 py-9 rounded-[55px] h-full w-[330px] ml-6 justify-between relative overflow-hidden`,
        {
          "mr-8": position === length,
          "ml-6": position === 0,
        }
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <Image
        className="absolute bottom-0 right-0 top-0 h-[50vh] mt-20 left-0 ml-20 w-[90vw] origin-center rotate-[35deg]"
        src={image}
      />
      <View>
        <Text className="font-semibold text-5xl max-w-[200px] pt-1">
          {name}
        </Text>
        <View className="flex felx-row w-min items-start pt-8">
          <View className=" overflow-hidden rounded-full">
            <Text className="bg-[#ffffffa3] px-4 py-2 text-gray-600 ">
              {category}
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-[#ffffffcf] justify-between rounded-full py-4 px-6 flex-row relative">
        <Text className="text-2xl font-bold">$ {price}</Text>
        <TouchableOpacity
          onPress={() =>
            addProductCart({ name, color, id, price, image, category })
          }
          className="bg-black py-4 px-6 rounded-full absolute top-0 right-0 bottom-0 my-1"
        >
          <MaterialIcons name="shopping-basket" color={"#fff"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const ItemProduct = ItemProductComponent;
