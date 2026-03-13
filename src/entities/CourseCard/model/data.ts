import { getRandomColors } from "@shared/lib/getRandomColor";
import type { CourseCardProps } from "./types";

const LOREM_LONG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.";

const generateTeachers = (prefix: string) => [
    { id: `${prefix}-t1`, name: 'Антон Болтов', position: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.', photo: 'FutureAcademyIcons/person.jpg' },
    { id: `${prefix}-t2`, name: 'Мария Сидорова', position: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.', photo: 'FutureAcademyIcons/person.jpg' },
    { id: `${prefix}-t3`, name: 'Иван Кузнецов', position: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.', photo: 'FutureAcademyIcons/person.jpg' },
    { id: `${prefix}-t4`, name: 'Елена Павлова', position: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.', photo: 'FutureAcademyIcons/person.jpg' },
];

const generateBenefits = (topic: string) => [
    { id: 'b1', icon: '🚀', title: 'Быстрый старт', description: `На курсе ${topic} мы обеспечиваем максимально глубокое погружение в материал с первых минут занятия. Это позволяет ученикам не только теоретически освоить базу, но и сразу применить полученные знания на реальных кейсах, что критически важно для закрепления навыка в долгосрочной перспективе.` },
    { id: 'b2', icon: '🧠', title: 'Развитие мышления', description: `Изучение направления ${topic} напрямую влияет на нейронные связи. Мы разработали уникальную методику, которая тренирует аналитические способности, заставляя мозг находить нестандартные решения в условиях ограниченного времени, что пригодится не только в IT, но и в повседневной жизни.` },
    { id: 'b3', icon: '🏆', title: 'Результат в портфолио', description: `По окончании обучения ${topic} у каждого студента будет готов полноценный проект. Это не просто учебная работа, а качественный кейс, выполненный по всем индустриальным стандартам, который станет весомым аргументом при поступлении в вуз или поиске первой работы в крупной компании.` }
];

const generateFaq = (topic: string) => [
    { question: `Нужен ли опыт для ${topic}?`, answer: LOREM_LONG },
    { question: `Какое оборудование требуется?`, answer: LOREM_LONG },
    { question: `Будет ли сертификат по ${topic}?`, answer: LOREM_LONG },
    { question: `Как проходят практические занятия?`, answer: LOREM_LONG }
];

const generateFeatures = (topic: string) => [
    { id: 'f1', icon: '🏆', label: `Интересные уроки по ${topic}` },
    { id: 'f2', icon: '🏆', label: 'Для взрослых и детей' },
    { id: 'f3', icon: '🏆', label: 'Обучение онлайн' },
    { id: 'f4', icon: '🏆', label: 'Проф. обучение' },
    { id: 'f5', icon: '🏆', label: 'Турниры и зачеты' },
    { id: 'f6', icon: '🏆', label: 'Сертификат GM' },
];

const generateImages = (text: string, count: number) => {
    return Array.from({length: count}, (_, i)  => 
        `https://placehold.ru/299x210/27AAE1/fff.png?text=${encodeURIComponent(text)}%20${i + 1}`
    )
}
export const COURSES_DATA: CourseCardProps[] = [
    // --- KIDS (k1 - k14) ---
    ...Array.from({ length: 14 }, (_, i) => {
        const id = `k${i + 1}`;
        const titles = ['Лего-роботы', 'Scratch Master', 'Python Kids', 'Minecraft Java', 'YouTube Start', 'Chess Junior', 'Robotics Pro', 'Unity Kids', 'Soft Skills', 'Digital Art', 'Mobile Junior', '3D Modeling', 'C# Start', 'Logic Games'];
        const tags = ['robotic', 'game-dev', 'programming', 'java', 'blogging', 'chess', 'robotic', 'game-dev', 'soft-skills', 'multimedia', 'programming', 'multimedia', 'programming', 'soft-skills'];
        const title = titles[i];
        return {
            id, title,
            shortDescription: `Первые шаги в ${title}.`,
            fullDescription: `Погружение в ${title} для самых маленьких. Учим через практику и игру.`,
            aboutDescription: `${title} — это отличная идея для развития ребенка. Занятия дают полезные навыки.`,
            studyDuration: 4, price: '12 000 ₽', category: 'kids-filter', tag: tags[i], level: 'novice', type: 'course',
            background: getRandomColors(),
            benefits: generateBenefits(title),
            teachers: generateTeachers(id),
            faq: generateFaq(title),
            features: generateFeatures(title), // ДОБАВЛЕНО
            gallery: {
                title: `Атмосфера занятий по ${title}`,
                desc: `Посмотрите, как наши маленькие гении осваивают ${title}.`,
                images: generateImages(title, 15)
            }
        };
    }),

    // --- TEENS (t1 - t14) ---
    ...Array.from({ length: 14 }, (_, i) => {
        const id = `t${i + 1}`;
        const titles = ['Frontend Pro', 'Python Backend', 'iOS Swift', 'C++ Games', 'Figma Design', 'Blender Art', 'Cyber Sec', 'Social Media', 'Unity Advanced', 'Web Design', 'Kotlin Mobile', 'Algorithm Pro', 'VFX Effects', 'SQL Data'];
        const tags = ['web', 'programming', 'mobile', 'applied', 'graphics', 'graphics', 'applied', 'blogging', 'game-dev', 'web', 'mobile', 'programming', 'graphics', 'programming'];
        const title = titles[i];
        return {
            id, title,
            shortDescription: `Профессиональный старт в ${title}.`,
            fullDescription: `Серьезный курс по ${title} для подростков. Готовим востребованных специалистов.`,
            aboutDescription: `Освоение ${title} — это инвестиция в будущее. Учим работать над реальными кейсами.`,
            studyDuration: 12, price: '45 000 ₽', category: 'teens-filter', tag: tags[i], level: 'pro', type: 'profession',
            background: getRandomColors(),
            benefits: generateBenefits(title),
            teachers: generateTeachers(id),
            faq: generateFaq(title),
            features: generateFeatures(title), // ДОБАВЛЕНО
            gallery: {
                title: `Проекты студентов: ${title}`,
                desc: `Здесь рождаются реальные IT-продукты. Фотоотчет из нашей лаборатории.`,
                images: generateImages(title, 15)
            }
        };
    }),

    // --- ADULTS (a1 - a12) ---
    ...Array.from({ length: 12 }, (_, i) => {
        const id = `a${i + 1}`;
        const titles = ['QA Automation', 'Digital Marketing', 'VR/AR Dev', 'Java Architect', 'UI/UX Design', 'Python DS', 'SEO Lead', 'Manual QA', 'Node.js Backend', 'iOS Lead', 'Java Spring', 'UX Research'];
        const tags = ['testing', 'marketing', 'unity', 'java', 'design', 'python', 'marketing', 'testing', 'software', 'ios', 'java', 'design'];
        const title = titles[i];
        return {
            id, title,
            shortDescription: `Карьера в ${title} с нуля.`,
            fullDescription: `Интенсивная программа по ${title} для взрослых. Переквалификация и практика.`,
            aboutDescription: `Профессия ${title} открывает двери в крупнейшие IT-компании. Актуальные инструменты.`,
            studyDuration: 8, price: '55 000 ₽', category: 'adults-filter', tag: tags[i], level: 'intermediate', type: 'profession',
            background: getRandomColors(),
            benefits: generateBenefits(title),
            teachers: generateTeachers(id),
            faq: generateFaq(title),
            features: generateFeatures(title), // ДОБАВЛЕНО
            gallery: {
                title: `Учебный процесс: ${title}`,
                desc: `Мы имитируем работу в реальном IT-отделе. Митинги, код-ревью и практика.`,
                images: generateImages(title, 15)
            }
        };
    })
] as CourseCardProps[];