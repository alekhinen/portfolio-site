import { Image, View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { Fragment, useState } from "react";
import { KnowAppModal } from "./KnowAppModal";
import { CruiseAppModal } from "./CruiseAppModal";
import { NtwrkAppModal } from "./NtwrkAppModal";

type AppModals = "know" | "ntwrk" | "cruise";

export function Apps() {
  const [visibleModal, setVisibleModal] = useState<AppModals | null>(null);

  const displayKnowAppModal = () => {
    setVisibleModal("know");
  };

  const displayNtwrkAppModal = () => {
    setVisibleModal("ntwrk");
  };

  const displayCruiseAppModal = () => {
    setVisibleModal("cruise");
  };

  const dismissModal = () => {
    setVisibleModal(null);
  };

  return (
    <Fragment>
      <View
        style={{
          marginTop: Spacing.S8,
          gap: Spacing.S8,
          flex: 1,
        }}
      >
        <ThemedText type="semibold" style={{ textAlign: "center" }}>
          Apps
        </ThemedText>

        <Pressable onPress={displayKnowAppModal} style={styles.appContainer}>
          <Image
            style={styles.appIcon}
            source={require("@/assets/images/know-icon.webp")}
          />
          <View style={styles.text}>
            <ThemedText type="semibold">Know: Video Event Calendar</ThemedText>
            <ThemedText>Expo / React Native</ThemedText>
          </View>
        </Pressable>
        <Pressable onPress={displayCruiseAppModal} style={styles.appContainer}>
          <Image
            style={styles.appIcon}
            source={require("@/assets/images/cruise-icon.webp")}
          />
          <View style={styles.text}>
            <ThemedText type="semibold">Cruise - Driverless Rides</ThemedText>
            <ThemedText>React Native</ThemedText>
          </View>
        </Pressable>
        <Pressable onPress={displayNtwrkAppModal} style={styles.appContainer}>
          <Image
            style={styles.appIcon}
            source={require("@/assets/images/ntwrk-icon.webp")}
          />
          <View style={styles.text}>
            <ThemedText type="semibold">
              NTWRK | Live Sneaker Shopping
            </ThemedText>
            <ThemedText>React Native</ThemedText>
          </View>
        </Pressable>
      </View>
      <KnowAppModal onClose={dismissModal} show={visibleModal === "know"} />
      <CruiseAppModal onClose={dismissModal} show={visibleModal === "cruise"} />
      <NtwrkAppModal onClose={dismissModal} show={visibleModal === "ntwrk"} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appIcon: {
    height: Spacing.S30,
    width: Spacing.S30,
    borderRadius: Spacing.S7,
  },
  text: { flex: 1 },
  appContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.S4,
  },
});
