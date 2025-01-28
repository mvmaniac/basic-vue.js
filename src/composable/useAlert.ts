import { storeToRefs } from 'pinia';

import { useAlertStore } from '@/stores/alert';

export function useAlert() {
  const alertStore = useAlertStore();

  const { alerts } = storeToRefs(alertStore);

  // prettier-ignore
  const vAlert = (message: string, type = 'error') => alertStore.vAlert(message, type);
  const vSuccess = (message: string) => alertStore.vSuccess(message);

  return {
    alerts,
    vAlert,
    vSuccess,
  };
}
