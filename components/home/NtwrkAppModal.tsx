import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";

export function NtwrkAppModal({
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
          NTWRK | Live Sneaker Shopping
        </ThemedText>
        <ThemedText style={{ textAlign: "center" }}>
          Written in React Native. Released on Android, iOS, Web.{"\n"}2019 -
          2023
        </ThemedText>
      </View>
    </AppModal>
  );
}
