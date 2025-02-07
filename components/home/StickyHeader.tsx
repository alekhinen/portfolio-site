import { ThemedText } from "@/components/ThemedText";
import { BlurView } from "expo-blur";
import { useColorScheme, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Spacing } from "@/components/design-system/spacing";
import { ExternalLink } from "../ExternalLink";
import { useEffect, useState } from "react";

export function StickyHeader() {
  const theme = useColorScheme() ?? "light";

  const [tint, setTint] = useState(theme === "dark" ? "dark" : "light");
  const [iconColor, setIconColor] = useState(
    theme === "dark" ? "white" : "black"
  );

  useEffect(() => {
    setTint(theme === "dark" ? "dark" : "light");
    setIconColor(theme === "dark" ? "white" : "black");
  }, [theme]);

  return (
    <BlurView
      tint={tint}
      style={{
        flexDirection: "row",
        paddingHorizontal: Spacing.S6,
        paddingVertical: Spacing.S3,
        borderRadius: Spacing.S6,
        zIndex: 1,
        marginTop: Spacing.S4,
        minWidth: 320,
        justifyContent: "space-between",
      }}
    >
      <ThemedText type="semibold">Nick Alekhine</ThemedText>
      <View style={{ flexDirection: "row", gap: Spacing.S2 }}>
        <ExternalLink href="https://www.linkedin.com/in/alekhinen/">
          <AntDesign
            name="linkedin-square"
            size={Spacing.S5}
            style={{ color: iconColor }}
          />
        </ExternalLink>
        <ExternalLink href="https://github.com/alekhinen">
          <AntDesign
            name="github"
            size={Spacing.S5}
            style={{ color: iconColor }}
          />
        </ExternalLink>
      </View>
    </BlurView>
  );
}
