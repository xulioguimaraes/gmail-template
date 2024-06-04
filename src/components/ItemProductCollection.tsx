import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { Image, Pressable, Text, View } from "react-native";

interface ItemProductCollection {
  image: string;
  name: string;
  id: number;
  color: string;
  price: number;
  position: number;
  length: number;
}

const ItemProductCollectionComponent = ({
  position,
  length,
  name,
  color,
  price,
  image,
}: ItemProductCollection) => {
  return (
    <View
      className={clsx(
        ` px-6 py-4 rounded-[38px] h-[220px] w-full  justify-between relative overflow-hidden`,
        {
          "mb-12": position === length,
        }
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <Image
        className="absolute bottom-0 right-0 top-0 h-full mt-20 left-0 ml-20 w-full origin-center rotate-[35deg]"
        src={image}
      />
      <View>
        <Text className="font-semibold text-lg max-w-[80px] pt-1">{name}</Text>
        <View className="flex felx-row w-min items-start pt-8">
          <View className=" overflow-hidden rounded-full">
            <Text className="bg-[#ffffffa3] px-4 py-2 text-xs">Choco</Text>
          </View>
        </View>
      </View>

      <View className="bg-[#ffffffcf] justify-between rounded-full py-2 px-3 flex-row relative">
        <Text className="text-lg font-bold">$ {price}</Text>
        <Pressable className="bg-black py-2 px-3 rounded-full absolute top-0 right-0 bottom-0 my-1">
          <MaterialIcons name="shopping-basket" color={"#fff"} size={20} />
        </Pressable>
      </View>
    </View>
  );
};
export const ItemProductCollection = ItemProductCollectionComponent;
