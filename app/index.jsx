import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200">
      <Text className="text-3xl">Its a ne day!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
