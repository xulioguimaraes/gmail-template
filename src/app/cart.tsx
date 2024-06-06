import { FlatListProductCart } from "@/components/Cart/FlatListProductCart";
import { Header } from "@/components/Cart/Header";

import { View } from "react-native";

export default function Cart() {
  return (
    <View className="bg-white h-screen">
      <View className="pt-11">
        <Header />
        <FlatListProductCart />
      </View>
    </View>
  );
}
