import type { InjectionKey } from 'vue';

import dayjs from 'dayjs';

export const Dayjs = Symbol() as InjectionKey<typeof dayjs>;
