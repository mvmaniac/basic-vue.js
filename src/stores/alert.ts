import { defineStore } from 'pinia';

import type { Alert } from '@/shared/types';

interface State {
  alerts: Alert[];
}

export const useAlertStore = defineStore('alert', {
  state: (): State => ({
    alerts: [],
  }),

  actions: {
    vAlert(message: string, type = 'error') {
      this.alerts.push({ message, type });

      setTimeout(() => {
        this.alerts.shift();
      }, 2000);
    },

    vSuccess(message: string) {
      this.vAlert(message, 'success');
    },
  },
});
