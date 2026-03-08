
import type { AccordionItemProps } from "@shared/components/AccordionItem/model/types"
import { LayoutPage } from "@shared/components/LayoutPage"
import { FAQSection } from "@widgets/DetailsPageComponents/components/FAQSection/FAQSection"
import type { TeamSectionProps } from "@widgets/DetailsPageComponents/components/TeamSection/model/types"
import { TeamSection } from "@widgets/DetailsPageComponents/components/TeamSection/TeamSection"


const faqItems: AccordionItemProps[] = [
  {
    question: "Кому подойдёт это курс?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
  },
  {
    question: "Кому подойдёт это курс?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
  },
  {
    question: "Кому подойдёт это курс?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
  },
  {
    question: "Кому подойдёт это курс?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
  },
]

const teamSectionData: TeamSectionProps = {
  title: 'Наши преподаватели',
  persons: [
    {
      img: '/FutureAcademyIcons/person.jpg',
      name: 'Имя Фамилия',
      desc: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
      img: '/FutureAcademyIcons/person.jpg',
      name: 'Имя Фамилия',
      desc: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
      img: '/FutureAcademyIcons/person.jpg',
      name: 'Имя Фамилия',
      desc: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
      img: '/FutureAcademyIcons/person.jpg',
      name: 'Имя Фамилия',
      desc: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
  ]
}



export const DetailsPageLayout = () => {
  return (
    <LayoutPage headerTheme="light">
      <TeamSection {...teamSectionData}/>
      <FAQSection
        items={faqItems}
      />


    </LayoutPage>
  )
}
