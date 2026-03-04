import { colors } from "../model/data"

export const getRandomColors = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}