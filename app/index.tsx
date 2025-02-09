import { ScrollView } from "react-native";
import { StickyHeader } from "@/components/home/StickyHeader";
import { Apps } from "@/components/home/Apps";
import { Media } from "@/components/home/Media";
import { Web } from "@/components/home/Web";
import { Spacing } from "@/components/design-system/spacing";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Fragment } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nick Alekhine</title>
      </Helmet>

      <ScrollView
        style={{ backgroundColor }}
        contentContainerStyle={{
          alignSelf: "center",
          paddingBottom: Spacing.S8,
          paddingHorizontal: Spacing.S4,
        }}
        stickyHeaderIndices={[0]}
      >
        <StickyHeader />
        <Apps />
        <Media />
        <Web />
      </ScrollView>
    </HelmetProvider>
  );
}
