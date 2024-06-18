import { Text, View } from "react-native";

export const ListFooterComponent = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <View>
      <View className="mx-8 p-8 my-8 bg-yellow-200 rounded-[32px] overflow-hidden">
        <View className="flex-row justify-between items-center ">
          <Text>Delivery Amount</Text>
          <Text className="font-bold text-2xl">Free</Text>
        </View>
        <View className="border-b border-[#f7dd7b] my-4" />
        <View>
          <Text className="text-2xl">Total Amount</Text>
          <Text className="text-4xl font-semibold">USD {totalPrice}</Text>
        </View>
      </View>
      <View className="mx-8 p-8 justify-center items-center bg-yellow-200 rounded-[32px] overflow-hidden">
        <Text className="font-semibold text-xl">Make Payment</Text>
      </View>
    </View>
  );
};
