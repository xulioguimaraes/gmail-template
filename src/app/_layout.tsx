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
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="list-collections"
          options={{ headerShown: false, headerBackButtonMenuEnabled: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
