import dayjs from 'dayjs';

import type { App } from 'vue';

import { Dayjs } from '@/shared/types';

export default {
  install(app: App) {
    app.config.globalProperties.$dayjs = dayjs;
    app.provide(Dayjs, dayjs);
  },
};
