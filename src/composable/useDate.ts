import { useString } from '@/composable/useString';

export function useDate() {
  const formatDate = (date = new Date(), format = 'YYYY-MM-DD'): string => {
    const { padZero } = useString();

    const map: Record<string, string | number> = {
      YYYY: date.getFullYear(),
      MM: padZero(date.getMonth() + 1),
      DD: padZero(date.getDate()),
      HH: padZero(date.getHours()),
      mm: padZero(date.getMinutes()),
      ss: padZero(date.getSeconds()),
    };

    return format.replace(
      /YYYY|MM|DD|HH|mm|ss/g,
      (matched) => map[matched] as string,
    );
  };

  return { formatDate };
}
