import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";
import { ImageGallery } from "./ImageGallery.web";

const images = [
  require("@/assets/images/cruise/1.jpg"),
  require("@/assets/images/cruise/2.jpg"),
  require("@/assets/images/cruise/3.jpg"),
  require("@/assets/images/cruise/4.jpg"),
  require("@/assets/images/cruise/5.jpg"),
  require("@/assets/images/cruise/6.jpg"),
];

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
      <View
        style={{
          alignSelf: "center",
          marginTop: Spacing.S6,
          paddingHorizontal: Spacing.S4,
        }}
      >
        <ThemedText type="semibold" style={{ textAlign: "center" }}>
          Cruise – Driverless Rides
        </ThemedText>
        <ThemedText style={{ marginTop: Spacing.S2, textAlign: "center" }}>
          Written in React Native. Released on Android, iOS.{"\n"}2023 – 2025
        </ThemedText>
      </View>
      <ImageGallery images={images} />
    </AppModal>
  );
}
