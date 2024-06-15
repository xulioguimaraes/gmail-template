import { FlatList, View } from "react-native";
import { ItemProduct } from "./ItemProduct";
import { useProductApp } from "@/hooks/useProductsApp";
import { useFilterHome } from "@/hooks/useFilterHome";

export const FlatListProducts = () => {
  const { dataProductApp } = useProductApp();
  const { filterSelect } = useFilterHome();

  return (
    <>
      {filterSelect === "all" && (
        <View className=" max-h-[72%] transition-all h-full overflow-visible ">
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
      )}
    </>
  );
};
