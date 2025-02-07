import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";
import { StickyHeader } from "@/components/home/StickyHeader";
import { Apps } from "@/components/home/Apps";
import { Media } from "@/components/home/Media";
import { Web } from "@/components/home/Web";
import { Spacing } from "@/components/design-system/spacing";

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ alignSelf: "center", paddingBottom: Spacing.S8 }}
      stickyHeaderIndices={[0]}
    >
      <StickyHeader />
      <Apps />
      <Media />
      <Web />
    </ScrollView>
  );
}
