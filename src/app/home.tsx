import { FlatListFilters } from "@/components/Home/FlatListFilters";
import { FlatListProducts } from "@/components/Home/FlatListProducts";
import { Header } from "@/components/Home/Header";

import { RedirectColections } from "@/components/Home/RedirectColections";

import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white relative">
      <ScrollView className="flex-1">
        <View className="pt-11">
          <Header />

          <FlatListFilters />

          <RedirectColections />

          <FlatListProducts />
        </View>
      </ScrollView>
    </View>
  );
}
