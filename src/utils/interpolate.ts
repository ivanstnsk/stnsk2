export const interpolate = (
  value: number,
  fromRange: number,
  toRange: number,
): number => {
  return (toRange / fromRange) * value;
};
