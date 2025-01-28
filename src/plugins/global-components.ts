import type { App } from 'vue';

import AppAlert from '@/components/app/AppAlert.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import AppModal from '@/components/app/AppModal.vue';
import AppPagination from '@/components/app/AppPagination.vue';

export default {
  install(app: App) {
    app.component('AppAlert', AppAlert);
    app.component('AppCard', AppCard);
    app.component('AppGrid', AppGrid);
    app.component('AppModal', AppModal);
    app.component('AppPagination', AppPagination);
  },
};
