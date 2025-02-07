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
          style={{
            zIndex: 1,
            position: "absolute",
            right: Spacing.S7 / 2,
            top: Spacing.S7,
          }}
        >
          <AntDesign name="close" size={Spacing.S4} color="black" />
        </Pressable>

        {children}
      </BlurView>
    </Modal>
  );
}
