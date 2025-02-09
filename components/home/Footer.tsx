import { View } from "react-native";
import { ExternalLink } from "../ExternalLink";
import { ThemedText } from "../ThemedText";

export function Footer() {
  return (
    <View>
      <ThemedText type="caption">
        This site was written using{" "}
        <ExternalLink
          href="https://expo.dev"
          style={{ textDecorationLine: "underline" }}
        >
          Expo
        </ExternalLink>{" "}
        and its source code can be found{" "}
        <ExternalLink
          href="https://github.com/alekhinen/portfolio-site"
          style={{ textDecorationLine: "underline" }}
        >
          here
        </ExternalLink>
        .
      </ThemedText>
    </View>
  );
}
