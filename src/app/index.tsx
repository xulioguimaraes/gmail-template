import { ItemFilter } from "@/components/ItemFilter";
import { ItemProduct } from "@/components/ItemProduct";
import { buttonsFilters, productList } from "@/mock";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  const [filterSelect, setFilterSelect] = useState<string>("all");
  const onPressableSelectFilter = (id: string) => {
    setFilterSelect(id);
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="pt-11">
        <View className=" px-8 flex flex-row justify-between items-center mb-10 ">
          <Text className="text-4xl font-light max-w-[220px]">
            Order From The Best OF <Text className="font-medium">Snacks</Text>
          </Text>

          <Pressable className="border h-[90px] rounded-full p-5 items-center flex justify-center border-gray-500">
            <MaterialIcons name="menu" size={30} />
          </Pressable>
        </View>
        <View className="pl-8">
          <FlatList
            data={buttonsFilters}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <ItemFilter
                {...item}
                onPressable={onPressableSelectFilter}
                active={filterSelect === item.id}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className="px-8 flex flex-row pb-6 pt-8 justify-between">
          <Text className="text-2xl font-medium">Collections</Text>
          <Link href="/list-collections">
            <MaterialIcons name="east" size={30} />
          </Link>
        </View>

        <View className=" max-h-[75%]  h-full overflow-visible ">
          <FlatList
            data={productList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => (
              <ItemProduct
                {...item}
                position={index}
                length={productList.length - 1}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
