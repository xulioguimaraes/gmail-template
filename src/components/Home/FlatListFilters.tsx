import { buttonsFilters } from "@/mock";
import { FlatList, View } from "react-native";
import { ItemFilter } from "./ItemFilter";
import { useState } from "react";
import { useFilterHome } from "@/hooks/useFilterHome";

export const FlatListFilters = () => {
  const { filterSelect, onPressableSelectFilter } = useFilterHome();
  return (
    <View className="pl-8">
      <FlatList
        data={buttonsFilters}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ItemFilter
            {...item}
            onPressable={onPressableSelectFilter}
            active={filterSelect === item.id}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
