import { ThemedText } from "@/components/ThemedText";
import { BlurView } from "expo-blur";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Spacing } from "@/components/design-system/spacing";
import { ExternalLink } from "../ExternalLink";

export function StickyHeader() {
  return (
    <BlurView
      tint="light"
      style={{
        flexDirection: "row",
        paddingHorizontal: Spacing.S6,
        paddingVertical: Spacing.S3,
        borderRadius: Spacing.S6,
        zIndex: 1,
        marginTop: Spacing.S4,
        minWidth: 320,
        justifyContent: "space-between",
      }}
    >
      <ThemedText type="semibold">Nick Alekhine</ThemedText>
      <View style={{ flexDirection: "row", gap: Spacing.S2 }}>
        {/* <ExternalLink href="https://www.linkedin.com/in/alekhinen/"> */}
        <FontAwesome name="linkedin-square" size={Spacing.S5} color="black" />
        {/* </ExternalLink> */}
        {/* <ExternalLink href="https://github.com/alekhinen"> */}
        <FontAwesome name="github" size={Spacing.S5} color="black" />
        {/* </ExternalLink> */}
      </View>
    </BlurView>
  );
}
