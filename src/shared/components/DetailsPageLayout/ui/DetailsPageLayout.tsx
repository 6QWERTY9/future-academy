
import { LayoutPage } from "@shared/components/LayoutPage"
import type { DetailsPageLayoutProps } from "../model/types"
import { AboutUsVideoBlock } from "@shared/components/AboutUsVideoBlock/AboutUsVideoBlock"







export const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({
  hero,
  benefits,
  team,
  children,
  faq,
  cta
}) => {
  return (
    <LayoutPage headerTheme="light">
      {hero}
      {benefits}
      <section>
        <AboutUsVideoBlock/>
      </section>
      {children}
      {team && team}
      {faq && faq}
      {cta}
    </LayoutPage>
  )
}
