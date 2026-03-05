export const colors = ['#FFDDC1', '#C2EABD', '#D1D9FF', '#F9E2AF', '#E2CCFF', '#FFD1DC'];

export const getRandomColors = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}