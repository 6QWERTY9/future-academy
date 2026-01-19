export const getAssetPath = (relativePath: string): string => {
    return `${import.meta.env.BASE_URL}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};