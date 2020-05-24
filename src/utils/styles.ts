type TClass = string | undefined;

export const combineClasses = (...classes: TClass[]): string => {
  return classes
    .filter((it) => it)
    .join(' ');
};
