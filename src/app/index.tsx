import { data } from "@/data";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const RenderItem = ({ item, index, eixoX }: any) => {
  const { width } = useWindowDimensions();
  console.log({ item, index, eixoX });

  const imageAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      eixoX.value,
      [index - 1 * width, index * width, index + 1 * width],
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    const traslateYAnimation = interpolate(
      eixoX.value,
      [index - 1 * width, index * width, index + 1 * width],
      [100, 1, 100],
      Extrapolation.CLAMP
    );

    return {
      opacity: opacityAnimation,
      width: width * 0.8,
      height: width * 0.8,
      transform: [{ translateY: traslateYAnimation }],
    };
  });

  return (
    <View className="flex-1 justify-around items-center" style={[{ width }]}>
      <Animated.Image source={item.image} style={imageAnimationStyle} />
      <Text className="font-bold text-2xl text-center mb-3">{item.title}</Text>
      <Text className="text-center leading-[20px] mx-[35px]">{item.text}</Text>
    </View>
  );
};

export default function Home() {
  const eixoX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      eixoX.value = event.contentOffset.x;
    },
  });
  return (
    <SafeAreaView className=" flex-1 bg-[#f8e9b0]">
      <Animated.FlatList
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => (
          <RenderItem eixoX={eixoX} item={item} index={index} />
        )}
        keyExtractor={(item) => String(item.id)}
        horizontal={true}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
