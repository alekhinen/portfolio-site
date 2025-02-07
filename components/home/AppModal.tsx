import { Modal, Pressable, useColorScheme } from "react-native";
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
  const theme = useColorScheme() ?? "light";
  const tint = theme === "dark" ? "dark" : "light";
  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <Modal transparent>
      <BlurView tint={tint} style={{ flex: 1, paddingHorizontal: Spacing.S4 }}>
        <Pressable
          onPress={onClose}
          style={{
            zIndex: 1,
            position: "absolute",
            right: Spacing.S7 / 2,
            top: Spacing.S7,
          }}
        >
          <AntDesign
            name="close"
            size={Spacing.S4}
            style={{ color: iconColor }}
          />
        </Pressable>

        {children}
      </BlurView>
    </Modal>
  );
}
