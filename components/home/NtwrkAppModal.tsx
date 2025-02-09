import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { AppModal } from "./AppModal";
import { ImageGallery } from "./ImageGallery.web";
import { ExternalLink } from "../ExternalLink";

const images = [
  require("@/assets/images/ntwrk/1.jpg"),
  require("@/assets/images/ntwrk/2.jpg"),
  require("@/assets/images/ntwrk/3.jpg"),
  require("@/assets/images/ntwrk/4.jpg"),
  require("@/assets/images/ntwrk/5.jpg"),
  require("@/assets/images/ntwrk/6.jpg"),
  require("@/assets/images/ntwrk/7.jpg"),
];

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
      <View
        style={{
          alignSelf: "center",
          marginTop: Spacing.S6,
          paddingHorizontal: Spacing.S4,
        }}
      >
        <ThemedText type="semibold" style={{ textAlign: "center" }}>
          <ExternalLink href="https://apps.apple.com/us/app/ntwrk-live-sneaker-shopping/id1425910407">
            NTWRK | Live Sneaker Shopping
          </ExternalLink>
        </ThemedText>
        <ThemedText style={{ marginTop: Spacing.S2, textAlign: "center" }}>
          Written in React Native. Released on Android, iOS, Web.{"\n"}2019 -
          2023
        </ThemedText>
      </View>
      <ImageGallery images={images} />
    </AppModal>
  );
}
