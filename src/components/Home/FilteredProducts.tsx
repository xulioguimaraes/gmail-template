import { FlatList, Image, Text, View } from "react-native";
import { ItemProductCollection } from "../ListCollections/ItemProductCollection";
import { useProductApp } from "@/hooks/useProductsApp";
import { useFilterHome } from "@/hooks/useFilterHome";
import { useEffect, useState } from "react";

import { ProductListProps } from "@/@types/cart";
import { LoadingAnimated } from "../LoadingAnimated";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const FilteredProducts = () => {
  const progress = useSharedValue(0.1);
  const { dataProductApp } = useProductApp();
  const { filterSelect } = useFilterHome();
  const [isLoading, setIsLoading] = useState(true);

  const data =
    dataProductApp.filter(
      (item: any) => item.category.toLocaleLowerCase() === filterSelect
    ) || ([] as ProductListProps[]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [filterSelect]);
  useEffect(() => {
    setIsLoading(true);
  }, [filterSelect]);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withSpring(1);
  }, []);
  return (
    <>
      {filterSelect !== "all" && (
        <View className="mx-6 gap-2 py-8 transition-all flex-wrap flex-row mb-24">
          {isLoading ? (
            <LoadingAnimated />
          ) : data.length === 0 ? (
            <Animated.View
              style={[{}, reanimatedStyle]}
              className={"w-full h-full justify-center items-center"}
            >
              <Image
                className="w-40 h-40"
                source={require("@/assets/no-data.png")}
              />
              <Text>No Data</Text>
            </Animated.View>
          ) : (
            data.map((item, index) => (
              <View className="mb-2 " key={item.id} style={{ width: "49%" }}>
                <ItemProductCollection
                  {...item}
                  position={index}
                  length={dataProductApp.length - 1}
                />
              </View>
            ))
          )}
          {}
        </View>
      )}
    </>
  );
};
