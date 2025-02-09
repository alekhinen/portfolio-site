import { ScrollView } from "react-native";
import { StickyHeader } from "@/components/home/StickyHeader";
import { Apps } from "@/components/home/Apps";
import { Media } from "@/components/home/Media";
import { Web } from "@/components/home/Web";
import { Spacing } from "@/components/design-system/spacing";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "@/components/home/Footer";

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nick Alekhine</title>
        <meta
          name="description"
          content="Nick Alekhine is a software engineer who focuses on React Native applications."
        />
        <meta
          name="keywords"
          content="React Native, TypeScript, Staff Software Engineer, Tech Lead, Cruise, NTWRK, Know, Everlane, CALA"
        />
        <meta name="author" content="Nick Alekhine" />
      </Helmet>

      <ScrollView
        style={{ backgroundColor }}
        contentContainerStyle={{
          alignSelf: "center",
          paddingBottom: Spacing.S2,
          paddingHorizontal: Spacing.S4,
        }}
        stickyHeaderIndices={[0]}
      >
        <StickyHeader />
        <Apps />
        <Media />
        <Web />
        <Footer />
      </ScrollView>
    </HelmetProvider>
  );
}
