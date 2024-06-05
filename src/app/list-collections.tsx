import { ItemProductCollection } from "@/components/ItemProductCollection";
import { productList } from "@/mock";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function ListCollections() {
  const { back } = useRouter();
  return (
    <View className="bg-white h-screen">
      <View className="pt-11">
        <View className=" px-8 flex flex-row justify-between items-center mb-10 ">
          <Text className="text-4xl font-light max-w-[220px]">
            Order From The Best OF <Text className="font-medium">Snacks</Text>
          </Text>

          <TouchableOpacity
            onPress={() => back()}
            className="border h-[90px] rounded-full p-5 items-center flex justify-center border-gray-500"
          >
            <MaterialIcons name="west" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-6 gap-2 pb-8 flex-1">
        <FlatList
          data={productList}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{
            gap: 12,
            rowGap: 30,
          }}
          renderItem={({ item, index }) => (
            <View className="mb-2" key={item.id} style={{ width: "49%" }}>
              <ItemProductCollection
                {...item}
                position={index}
                length={productList.length - 1}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
