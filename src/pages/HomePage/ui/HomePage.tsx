
import { AboutUsSection } from "./components/AboutUsSection/AboutUsSection";
import { BentoGridSection } from "./components/BentoGridSection/BentoGridSection";
import { CourseNavSection } from "./components/CourseNavSection/CourseNavSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ReviewSection } from "./components/ReviewSection/ReviewSection";

export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <CourseNavSection/>
    <AboutUsSection/>
    <BentoGridSection/>
    <ReviewSection/>
    </>
  )
}
