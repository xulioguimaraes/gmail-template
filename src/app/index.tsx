import { ItemProductProps } from "@/@types/products";
import { LinearGradient } from "expo-linear-gradient";
import { useProductApp } from "@/hooks/useProductsApp";
import { useRef, useState } from "react";
import Constants from "expo-constants";

import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

const Irem = ({ image, color, name }: ItemProductProps) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{ width }}
      className=" h-[100%] justify-center items-center py-6"
    >
      <View className="rounded-t-[44px] bg-white w-full overflow-hidden">
        <LinearGradient
          className="rounded-r-[55%] "
          colors={["white", "white", "white", color]}
          style={styles.background}
        />
        <View
          className="mt-10 mx-12 mb-28 h-[380px] relative rounded-[55%] overflow-hidden drop-shadow-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <Text className="font-semibold text-4xl pl-10 p-10 max-w-56">
            {name}
          </Text>
          <Image
            className="h-full  absolute right-[-80px] bottom-[-60px] mt-10 w-[90vw] rotate-[35deg] "
            source={{
              uri: image,
            }}
            style={{
              resizeMode: "contain",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default function GetStarted() {
  const { dataProductApp } = useProductApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const heightStatusBar = Constants.statusBarHeight;
  const router = useRouter();
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const color = dataProductApp[currentIndex].color;
  return (
    <View
      style={{ backgroundColor: `${color}`, paddingTop: heightStatusBar }}
      className="flex-1 relative transition-colors"
    >
      <View className=" mt-11 px-8 flex flex-row justify-between items-center mb-4 ">
        <Text className="text-[62px] font-bold ">
          Order From The Best Snacks
        </Text>
      </View>
      <View className="bg-black absolute bottom-10 right-8 py-5 px-10  z-10 rounded-full">
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text className="text-white font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={dataProductApp}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => <Irem {...item} />}
          horizontal
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            {
              useNativeDriver: false,
            }
          )}
          contentContainerClassName="relative"
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
    </View>
  );
}
