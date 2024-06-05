import { FlatListFilters } from "@/components/Home/FlatListFilters";
import { FlatListProducts } from "@/components/Home/FlatListProducts";
import { Header } from "@/components/Home/Header";
import { ItemFilter } from "@/components/Home/ItemFilter";
import { ItemProduct } from "@/components/Home/ItemProduct";
import { PreviewCart } from "@/components/Home/PreviewCart";
import { RedirectColections } from "@/components/Home/RedirectColections";
import { useCart } from "@/hooks/useCart";
import { buttonsFilters, productList } from "@/mock";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { dataCart } = useCart();
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

      {dataCart.length > 0 && <PreviewCart />}
    </View>
  );
}
