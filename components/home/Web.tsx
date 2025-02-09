import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { ExternalLink } from "../ExternalLink";

export function Web() {
  return (
    <View
      style={{
        marginTop: Spacing.S16,
        gap: Spacing.S8,
        paddingBottom: Spacing.S8,
        width: "100%",
      }}
    >
      <ThemedText type="semibold" style={{ textAlign: "center" }}>
        Web
      </ThemedText>

      <View>
        <ExternalLink href="https://ca.la">
          <ThemedText>CALA</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://everlane.com">
          <ThemedText>Everlane</ThemedText>
        </ExternalLink>
      </View>
    </View>
  );
}
