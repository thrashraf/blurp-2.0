export function parseMoney(value: number): string {
  const formatter = (value / 100).toFixed(2);
  return `RM ${formatter}`;
}