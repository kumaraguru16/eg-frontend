export const generateUrl = (pathName: string) => {
  return `${import.meta.env.VITE_BASE_URL}${pathName}`;
};
