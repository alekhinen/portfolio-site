import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";

export function Apps() {
  return (
    <View style={{ marginTop: Spacing.S24 }}>
      <ThemedText>Apps</ThemedText>
    </View>
  );
}
