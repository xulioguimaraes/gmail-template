import { FlatList, Text, View } from "react-native";
import { ItemProductCart } from "./ItemProductCart";
import { ListFooterComponent } from "./ListFooterComponent";
import { useCart } from "@/hooks/useCart";
import { ProductListProps } from "@/@types/cart";
import { getDataRenderGroup, groupBy } from "@/utils";
import { useEffect, useState } from "react";
interface IDataRender {
  amaount: number;
  data: ProductListProps;
  id: string;
  quantity: number;
}

export const FlatListProductCart = () => {
  const { dataCart } = useCart();

  const [dataRender, setDataRender] = useState<IDataRender[]>([]);

  useEffect(() => {
    const dataRenderAux = getDataRenderGroup(dataCart);
    setDataRender(dataRenderAux);
  }, [dataCart]);

  const handleRemove = (id: number) => {
    const productDelete = dataRender.find((item) => +item.id === id);
    if (productDelete) {
      productDelete.quantity = productDelete.quantity - 1;

      if (productDelete.quantity === 0) {
        const dataFilter = dataRender.filter((item) => +item.id !== id);
        setDataRender(dataFilter);
      }
    }
  };

  const totalPrice = dataRender.reduce((acumulador, produto) => {
    return acumulador + produto.data.price * produto.quantity;
  }, 0);
  return (
    <FlatList
      data={dataRender}
      contentContainerClassName="gap-4 mb-32"
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ItemProductCart onRemove={handleRemove} {...item} />
      )}
      ItemSeparatorComponent={() => (
        <View className="border-b mx-8 pt-4 border-gray-300" />
      )}
      ListEmptyComponent={() => (
        <View className="justify-center items-center">
          <Text>Cart Empty</Text>
        </View>
      )}
      ListFooterComponentClassName="mb-64"
      ListFooterComponent={() => (
        <ListFooterComponent totalPrice={totalPrice} />
      )}
    />
  );
};
