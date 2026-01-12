import dayjs from 'dayjs';

import type { Person } from '@/shared/types';
import type { RouteRecordInfo } from 'vue-router';

declare module 'vue' {
  interface ComponentCustomProperties {
    $route: RouteRecordInfo;
    $person: Person;
    $dayjs: typeof dayjs;
  }
}
