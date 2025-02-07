import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Spacing } from "../design-system/spacing";
import { ExternalLink } from "../ExternalLink";

export function Media() {
  return (
    <View
      style={{
        marginTop: Spacing.S16,
        gap: Spacing.S8,
      }}
    >
      <ThemedText type="semibold" style={{ textAlign: "center" }}>
        Conferences & Podcasts
      </ThemedText>

      <ExternalLink href="https://www.youtube.com/watch?v=ik1eMi0Raro">
        <ThemedText type="semibold">Chain React 2023{"\n"}</ThemedText>
        <ThemedText>
          Building NTWRK’s livestream shopping application
        </ThemedText>
      </ExternalLink>

      <ExternalLink href="https://reactnativeradio.com/episodes/rnr-272-real-life-react-native-nick-alekhine-at-ntwrk-h0wCv_0I">
        <ThemedText type="semibold">React Native Radio{"\n"}</ThemedText>
        <ThemedText>Ep. 272 – Real Life React Native</ThemedText>
      </ExternalLink>
    </View>
  );
}
