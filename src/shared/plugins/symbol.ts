import dayjs from 'dayjs';

import type { InjectionKey } from 'vue';

export const Dayjs = Symbol() as InjectionKey<typeof dayjs>;
