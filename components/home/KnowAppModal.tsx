import { Modal, Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { BlurView } from "expo-blur";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Spacing } from "../design-system/spacing";

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
    <Modal transparent>
      <BlurView tint="light" style={{ flex: 1 }}>
        <Pressable
          onPress={onClose}
          style={{ position: "absolute", right: Spacing.S4, top: Spacing.S4 }}
        >
          <AntDesign name="close" size={Spacing.S4} color="black" />
        </Pressable>

        <View style={{ alignSelf: "center", marginTop: Spacing.S8 }}>
          <ThemedText type="semibold" style={{ textAlign: "center" }}>
            Know: Video Event Calendar
          </ThemedText>
          <ThemedText style={{ textAlign: "center" }}>
            Written in React Native. Released on iOS, Android.{"\n"}2023 - 2025
          </ThemedText>
        </View>
      </BlurView>
    </Modal>
  );
}
