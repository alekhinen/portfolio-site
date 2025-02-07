import { Modal, Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { BlurView } from "expo-blur";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Spacing } from "../design-system/spacing";

export function AppModal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal transparent>
      <BlurView tint="light" style={{ flex: 1, paddingHorizontal: Spacing.S4 }}>
        <Pressable
          onPress={onClose}
          style={{ position: "absolute", right: Spacing.S4, top: Spacing.S4 }}
        >
          <AntDesign name="close" size={Spacing.S4} color="black" />
        </Pressable>

        {children}
      </BlurView>
    </Modal>
  );
}
