import { productList } from "@/mock";
import { FlatList, View } from "react-native";
import { ItemProduct } from "./ItemProduct";

export const FlatListProducts = () => {
  return (
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
  );
};
