
import { LayoutPage } from "@shared/components/LayoutPage"
import type { DetailsPageLayoutProps } from "../model/types"
import { AboutUsVideoBlock } from "@shared/components/AboutUsVideoBlock/AboutUsVideoBlock"
import { CTA } from "@shared/components/CTA"







export const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({
  hero,
  benefits,
  team,
  children,
  faq,
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

      <section>
        <div className="content_center">
          <CTA/>
        </div>
      </section>
    </LayoutPage>
  )
}
