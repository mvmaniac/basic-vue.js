import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useBus } from '../plugins/bus';

export default function useFetchList() {
  const store = useStore();
  const route = useRoute();
  const bus = useBus();

  bus.emit('start-spinner');

  store
    .dispatch('FETCH_LIST', route.name)
    .then(() => bus.emit('end-spinner'))
    .catch((e) => console.error(e));
}
