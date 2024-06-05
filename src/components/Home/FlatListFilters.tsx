import { buttonsFilters } from "@/mock";
import { FlatList, View } from "react-native";
import { ItemFilter } from "./ItemFilter";
import { useState } from "react";

export const FlatListFilters = () => {
  const [filterSelect, setFilterSelect] = useState<string>("all");
  const onPressableSelectFilter = (id: string) => {
    setFilterSelect(id);
  };
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
