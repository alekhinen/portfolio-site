import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";

export function Web() {
  return (
    <View
      style={{
        marginTop: Spacing.S16,
        gap: Spacing.S8,
        width: "100%",
      }}
    >
      <ThemedText style={{ textAlign: "center" }}>Web</ThemedText>

      <View style={styles.appContainer}>
        <ThemedText>CALA</ThemedText>
        <ThemedText>Everlane</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
