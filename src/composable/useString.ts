export function useString() {
  const padZero = (value: number): string => value.toString().padStart(2, '0');
  return { padZero };
}
