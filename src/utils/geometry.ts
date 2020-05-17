export const getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  const q1 = Math.pow(Math.abs(x1 - x2), 2);
  const q2 = Math.pow(Math.abs(y1 - y2), 2);
  return Math.sqrt(q1 + q2);
};
