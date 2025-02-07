import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { StickyHeader } from "@/components/home/StickyHeader";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center" }}>
      <StickyHeader />

      <View>
        <ThemedText>Apps</ThemedText>
      </View>
    </View>
  );
}
