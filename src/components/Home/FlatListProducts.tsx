import { FlatList, View } from "react-native";
import { ItemProduct } from "./ItemProduct";
import { useProductApp } from "@/hooks/useProductsApp";

export const FlatListProducts = () => {
  const { dataProductApp } = useProductApp();
  return (
    <View className=" max-h-[72%]  h-full overflow-visible ">
      <FlatList
        data={dataProductApp}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <ItemProduct
            {...item}
            position={index}
            length={dataProductApp.length - 1}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
