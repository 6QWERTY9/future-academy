
import { LayoutPage } from "@shared/components/LayoutPage";
import { AboutUsSection } from "./components/AboutUsSection/AboutUsSection";
import { AdvantagesSection } from "./components/AdvantagesSection/AdvantagesSection";
import { BentoGridSection } from "./components/BentoGridSection/BentoGridSection";
import { CourseNavSection } from "./components/CourseNavSection/CourseNavSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ReviewSection } from "./components/ReviewSection/ReviewSection";

export const HomePage: React.FC = () => {
  return (
    <LayoutPage headerTheme="light">
      <HeroSection/>
      <CourseNavSection/>
      <AboutUsSection/>
      <BentoGridSection/>
      <ReviewSection/>
      <AdvantagesSection/>
    </LayoutPage>
  )
}
