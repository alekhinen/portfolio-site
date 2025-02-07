import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { StickyHeader } from "@/components/home/StickyHeader";
import { Apps } from "@/components/home/Apps";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center" }}>
      <StickyHeader />

      <Apps />
    </View>
  );
}
