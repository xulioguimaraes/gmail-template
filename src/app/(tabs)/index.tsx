import { Input } from "@/components/Input";
import { View, FlatList, Text } from "react-native";
import Constants from "expo-constants";
import { MenuButton } from "@/components/MenuButton";
import { Avatar } from "@/components/Avatar";
import { Email } from "@/components/Email";
import { EMAILS } from "@/utils/email";
import { FloatButton } from "@/components/FloatButton";

export default function Home() {
  const height = `pt-[${Constants.statusBarHeight}px]`;
  return (
    <View
      className={` flex-1 bg-gray-900  px-4`}
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no email" />
        <Avatar src="https://github.com/xulioguimaraes.png" size="small" />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
      <FloatButton />
    </View>
  );
}
