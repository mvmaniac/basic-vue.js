import type { App } from 'vue';

import dayjs from 'dayjs';

import { Dayjs } from '@/types';

export default {
  install(app: App) {
    app.config.globalProperties.$dayjs = dayjs;
    app.provide(Dayjs, dayjs);
  },
};
