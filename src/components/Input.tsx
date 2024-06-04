import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";
interface InputProps {
  children: ReactNode;
}
const Input = ({ children }: InputProps) => {
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  );
};

const InputField = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      className="flex-1 font-normal text-base text-white"
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
};

Input.Field = InputField;

export { Input };
