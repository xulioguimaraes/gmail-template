import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";
const width = 35.0;
const height = 35.0;
export const LoadingAnimated = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 1.5 * Math.PI}rad` },
      ],
      borderRadius: (progress.value * height) / 7,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(2), Infinity, true);
    scale.value = withRepeat(withSpring(3), Infinity, true);
  }, []);
  return (
    <View className="flex-1 justify-center items-center h-full">
      <Animated.View
        className="bg-yellow-400"
        style={[{ width: width, height: height }, reanimatedStyle]}
      />
    </View>
  );
};
