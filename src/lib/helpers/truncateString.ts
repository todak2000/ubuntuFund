export const truncateString = (name: string, num: number): string => {
  return name.length > num ? `${name.slice(0, num)}...` : name;
};
