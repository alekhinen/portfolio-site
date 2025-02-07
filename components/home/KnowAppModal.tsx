import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";
import { ImageGallery } from "./ImageGallery.web";

const images = [
  require("@/assets/images/know/1.jpg"),
  require("@/assets/images/know/2.jpg"),
  require("@/assets/images/know/3.jpg"),
  require("@/assets/images/know/4.jpg"),
  require("@/assets/images/know/5.jpg"),
  require("@/assets/images/know/6.jpg"),
];

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
      <View
        style={{
          alignSelf: "center",
          marginTop: Spacing.S6,
          paddingHorizontal: Spacing.S4,
        }}
      >
        <ThemedText type="semibold" style={{ textAlign: "center" }}>
          Know: Video Event Calendar
        </ThemedText>
        <ThemedText style={{ marginTop: Spacing.S2, textAlign: "center" }}>
          Written in Expo and React Native. Released on iOS, Web.{"\n"}
          2025 –
        </ThemedText>
      </View>
      <ImageGallery images={images} />
    </AppModal>
  );
}
