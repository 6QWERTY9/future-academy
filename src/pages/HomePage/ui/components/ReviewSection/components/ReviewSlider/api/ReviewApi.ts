export const getReviews = async () => {
    const respones = await fetch('https://qwerty.lightboxapi.ru/reviews');

    if (!respones.ok) {
        throw new Error('Ошибка при загрузки отзывов')
    }

    return await respones.json();
}