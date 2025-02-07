import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";

export function KnowAppModal({
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
          Know: Video Event Calendar
        </ThemedText>
        <ThemedText style={{ marginTop: Spacing.S2 }}>
          Written in Expo and React Native. Released on iOS, Web.{"\n"}
          2025 –
        </ThemedText>
      </View>
    </AppModal>
  );
}
