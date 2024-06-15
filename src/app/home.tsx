import { FilteredProducts } from "@/components/Home/FilteredProducts";
import { FlatListFilters } from "@/components/Home/FlatListFilters";
import { FlatListProducts } from "@/components/Home/FlatListProducts";
import { Header } from "@/components/Home/Header";

import { RedirectColections } from "@/components/Home/RedirectColections";
import { FilterHomeProvider, useFilterHome } from "@/hooks/useFilterHome";

import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white relative">
      <FilterHomeProvider>
        <ScrollView className="flex-1 h-[20%]">
          <View className="pt-11">
            <Header />

            <FlatListFilters />

            <RedirectColections />

            <FlatListProducts />
            <FilteredProducts />
          </View>
        </ScrollView>
      </FilterHomeProvider>
    </View>
  );
}
