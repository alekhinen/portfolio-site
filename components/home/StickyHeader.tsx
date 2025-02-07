import { ThemedText } from "@/components/ThemedText";
import { BlurView } from "expo-blur";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Spacing } from "@/components/design-system/spacing";

export function StickyHeader() {
  return (
    <BlurView
      tint="light"
      style={{
        flexDirection: "row",
        position: "fixed",
        paddingHorizontal: Spacing.S6,
        paddingVertical: Spacing.S3,
        borderRadius: Spacing.S6,
        zIndex: 1,
        marginTop: Spacing.S4,
        minWidth: 320,
        justifyContent: "space-between",
      }}
    >
      <ThemedText>Nick Alekhine</ThemedText>
      <View style={{ flexDirection: "row", gap: Spacing.S2 }}>
        <FontAwesome name="linkedin-square" size={Spacing.S5} color="black" />
        <FontAwesome name="github" size={Spacing.S5} color="black" />
      </View>
    </BlurView>
  );
}
