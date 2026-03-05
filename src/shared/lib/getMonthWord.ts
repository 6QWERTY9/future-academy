export const getMonthWord = (count: number) => {
    if (count === 1) return 'месяц';
    if (count >= 2 && count <= 4) return 'месяца';
    return 'месяцев'; // для 5-20, 0
};
