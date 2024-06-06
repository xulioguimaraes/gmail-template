import { ProductListProps } from "@/@types/cart";
import { useProductApp } from "@/hooks/useProductsApp";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();

  const [quantity, setQuantity] = useState(1);

  const { back, push } = useRouter();
  const { dataProductApp } = useProductApp();

  const product =
    dataProductApp.find((item) => item.id === Number(id)) ||
    ({} as ProductListProps);

  const addQuantity = () => {
    setQuantity((old) => old + 1);
  };
  const removeQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((old) => old - 1);
  };

  return (
    <View className="bg-white h-screen">
      <View className="pt-11">
        <View className=" px-8 flex flex-row justify-between items-center mb-3 ">
          <Text className="text-4xl font-semibold max-w-[220px]">
            {product.name}
          </Text>

          <TouchableOpacity
            onPress={() => back()}
            className="border h-[90px] rounded-full p-5 items-center flex justify-center border-gray-500"
          >
            <MaterialIcons name="west" size={30} />
          </TouchableOpacity>
        </View>

        <View className="  h-[380px] overflow-visible ">
          <Image className=" h-full scale-75" src={product.image} />
        </View>

        <View className="flex-row justify-center mb-12">
          <View className="flex-row">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={removeQuantity}
              className="bg-[#e4e4e4] p-5 rounded-full "
            >
              <MaterialIcons name="remove" size={26} />
            </TouchableOpacity>

            <View className="w-32 border-b border-[#e4e4e4] justify-center items-center mx-4 ">
              <Text className="text-5xl font-bold">{quantity}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={addQuantity}
              className="bg-[#202020] p-5 rounded-full"
            >
              <MaterialIcons name="add" size={26} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row mx-12 justify-between items-center">
          <Text className="text-2xl font-light">Grand Total</Text>
          <Text className="text-4xl font-bold">$ {product.price}</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => push("/cart")}
          className="bg-[#202020] mx-8 flex-row p-[6px] rounded-[32px] items-center justify-between mt-8"
        >
          <View className="bg-white rounded-[32px] px-8 py-4">
            <MaterialIcons name="shopping-basket" size={25} />
          </View>
          <View>
            <Text className="text-white">Make Payment</Text>
          </View>
          <View className="flex-row pr-4">
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color={"#636363"}
            />
            <MaterialIcons
              className="ml-[-10px]"
              name="arrow-forward-ios"
              size={20}
              color={"#939393"}
            />
            <MaterialIcons
              className="ml-[-10px]"
              name="arrow-forward-ios"
              size={20}
              color={"#fff"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
