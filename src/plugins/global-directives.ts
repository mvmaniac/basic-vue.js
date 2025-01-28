import type { App } from 'vue';

import color from '@/directives/color';
import focus from '@/directives/focus';

export default {
  install(app: App) {
    app.directive<HTMLElement>('focus', focus);
    app.directive<HTMLElement, string>('color', color);
  },
};
