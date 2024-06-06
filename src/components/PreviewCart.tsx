import { useCart } from "@/hooks/useCart";
import { Link, usePathname, useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export const PreviewCart = () => {
  const { dataCart } = useCart();
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <>
      {dataCart.length > 0 &&
        pathname !== "/cart" &&
        !pathname.includes("/product/") && (
          <TouchableOpacity onPress={() => push("/cart")} activeOpacity={0.9}>
            <View className="flex-row absolute bottom-0 left-0 right-0 bg-black pb-12 w-full justify-between px-10 pt-4">
              <View className="flex-row justify-center items-center">
                <View className="overflow-hidden rounded-full mr-8">
                  <Text className="rounded-full  bg-yellow-400  px-4 py-3 ">
                    {dataCart.length}
                  </Text>
                </View>

                <View>
                  <Text className="text-white text-2xl font-semibold">
                    Cart
                  </Text>
                  <Text className="text-white text-base font-light">
                    {dataCart.length} item
                  </Text>
                </View>
              </View>
              <View className="">
                <FlatList
                  data={dataCart}
                  keyExtractor={(item) => String(item.id)}
                  numColumns={4}
                  contentContainerClassName="relative"
                  contentContainerStyle={{
                    position: "relative",
                  }}
                  renderItem={({ item, index }) => {
                    if (index > 3) {
                      return <></>;
                    }
                    return (
                      <Image
                        className={`w-16 h-16 object-cover bg-white rounded-full ${
                          index === 0 ? "" : "ml-[-24px]"
                        }`}
                        src={item.image}
                      />
                    );
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
    </>
  );
};
