import { FlatList, View } from "react-native";
import { ItemProductCart } from "./ItemProductCart";
import { ListFooterComponent } from "./ListFooterComponent";
import { useCart } from "@/hooks/useCart";
import { ProductListProps } from "@/@types/cart";

interface IDataRender {
  amaount: number;
  data: ProductListProps;
  id: string;
  quantity: number;
}

export const FlatListProductCart = () => {
  const { dataCart } = useCart();
  const groupBy = (array: any, key: string) => {
    return array.reduce((result: any, currentItem: any) => {
      if (!result[currentItem[key]]) {
        result[currentItem[key]] = [];
      }
      result[currentItem[key]].push(currentItem);
      return result;
    }, {});
  };

  const groupedData = groupBy(dataCart, "id");

  let dataRender = [] as IDataRender[];

  Object.keys(groupedData).forEach((key) => {
    dataRender.push({
      id: key,
      data: groupedData[key].find((item: any) => !!item),
      amaount: 0,
      quantity: groupedData[key].length,
    });
  });
  return (
    <FlatList
      data={dataRender}
      contentContainerClassName="gap-4 mb-32"
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ItemProductCart {...item} />}
      ItemSeparatorComponent={() => (
        <View className="border-b mx-8 pt-4 border-gray-300" />
      )}
      ListFooterComponentClassName="mb-64"
      ListFooterComponent={<ListFooterComponent />}
    />
  );
};
