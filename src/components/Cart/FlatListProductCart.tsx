import { FlatList, View } from "react-native";
import { ItemProductCart } from "./ItemProductCart";
import { ListFooterComponent } from "./ListFooterComponent";
import { useCart } from "@/hooks/useCart";
import { ProductListProps } from "@/@types/cart";
import { getDataRenderGroup, groupBy } from "@/utils";



export const FlatListProductCart = () => {
  const { dataCart } = useCart();

  const dataRender = getDataRenderGroup(dataCart);
  const totalPrice = dataRender.reduce((acumulador, produto) => {
    return acumulador + produto.data.price * produto.quantity;
  }, 0);
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
      ListFooterComponent={() => (
        <ListFooterComponent totalPrice={totalPrice} />
      )}
    />
  );
};
