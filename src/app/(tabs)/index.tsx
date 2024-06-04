import { Input } from "@/components/Input";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { MenuButton } from "@/components/MenuButton";
import { Avatar } from "@/components/Avatar";

export default function Home() {
  const height = `pt-[${Constants.statusBarHeight}px]`;
  return (
    <View className={` flex-1 bg-gray-900 ${String(height)} px-4`}>
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no email" />
        <Avatar src="https://github.com/xulioguimaraes.png" size="small" />
      </Input>

      <Text>{height}</Text>
    </View>
  );
}
