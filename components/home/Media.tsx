import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";

export function Media() {
  return (
    <View
      style={{
        marginTop: Spacing.S16,
        gap: Spacing.S8,
      }}
    >
      <ThemedText type="semibold" style={{ textAlign: "center" }}>
        Conferences & Podcasts
      </ThemedText>

      <View style={styles.appContainer}>
        <ThemedText type="semibold">Chain React 2023</ThemedText>
        <ThemedText>
          Building NTWRK’s livestream shopping application
        </ThemedText>
      </View>
      <View style={styles.appContainer}>
        <ThemedText type="semibold">React Native Radio</ThemedText>
        <ThemedText>Ep. 272 – Real Life React Native</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
