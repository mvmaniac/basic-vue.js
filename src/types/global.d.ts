import type { Person } from '@/types';
import type { RouteRecordInfo } from 'vue-router';

import dayjs from 'dayjs';

declare module 'vue' {
  interface ComponentCustomProperties {
    $route: RouteRecordInfo;
    $person: Person;
    $dayjs: typeof dayjs;
  }
}
