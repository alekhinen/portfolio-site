import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";

export function CruiseAppModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) {
    return null;
  }

  return (
    <AppModal onClose={onClose}>
      <View style={{ alignSelf: "center", marginTop: Spacing.S6 }}>
        <ThemedText type="semibold" style={{ textAlign: "center" }}>
          Cruise – Driverless Rides
        </ThemedText>
        <ThemedText style={{ marginTop: Spacing.S2 }}>
          Written in React Native. Released on Android, iOS.{"\n"}2023 – 2025
        </ThemedText>
      </View>
    </AppModal>
  );
}
