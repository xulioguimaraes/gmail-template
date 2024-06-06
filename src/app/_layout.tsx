import "@/styles/global.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Constants from "expo-constants";
import { CartProvider } from "@/hooks/useCart";
import { PreviewCart } from "@/components/PreviewCart";
import { ProductAppProvider } from "@/hooks/useProductsApp";

export default function Layout() {
  const heightStatusBar = Constants.statusBarHeight;
  const [fontsLoader] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoader) {
    return;
  }
  return (
    <GestureHandlerRootView
      style={{ flex: 1, paddingTop: heightStatusBar, overflow: "visible" }}
    >
      <StatusBar style="auto" />
      <ProductAppProvider>
        <CartProvider>
          <Stack>
            <Stack.Screen
              name="product/[id]"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="cart" options={{ headerShown: false }} />
            <Stack.Screen
              name="list-collections"
              options={{
                headerShown: false,
                headerBackButtonMenuEnabled: false,
              }}
            />
          </Stack>
          <PreviewCart />
        </CartProvider>
      </ProductAppProvider>
    </GestureHandlerRootView>
  );
}
