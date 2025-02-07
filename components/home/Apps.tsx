import { Image, View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";

export function Apps() {
  return (
    <View
      style={{
        marginTop: Spacing.S8,
        gap: Spacing.S8,
      }}
    >
      <ThemedText type="semibold" style={{ textAlign: "center" }}>
        Apps
      </ThemedText>

      <View style={styles.appContainer}>
        <Image
          style={styles.appIcon}
          source={require("@/assets/images/know-icon.webp")}
        />
        <View>
          <ThemedText type="semibold">Know: Video Event Calendar</ThemedText>
          <ThemedText>Expo / React Native</ThemedText>
        </View>
      </View>
      <View style={styles.appContainer}>
        <Image
          style={styles.appIcon}
          source={require("@/assets/images/cruise-icon.webp")}
        />
        <View>
          <ThemedText type="semibold">Cruise - Driverless Rides</ThemedText>
          <ThemedText>React Native</ThemedText>
        </View>
      </View>
      <View style={styles.appContainer}>
        <Image
          style={styles.appIcon}
          source={require("@/assets/images/ntwrk-icon.webp")}
        />
        <View>
          <ThemedText type="semibold">NTWRK | Live Sneaker Shopping</ThemedText>
          <ThemedText>React Native</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appIcon: {
    height: Spacing.S30,
    width: Spacing.S30,
    borderRadius: Spacing.S7,
  },
  appContainer: { flexDirection: "row", alignItems: "center", gap: Spacing.S4 },
});
