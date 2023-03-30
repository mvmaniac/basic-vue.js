import { h } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useBus } from '../plugins/bus';
import ListView from './ListView.vue';

export default function createListView(name) {
  return {
    // 재 사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    setup() {
      const store = useStore();
      const route = useRoute();
      const bus = useBus();

      bus.emit('start-spinner');

      store
        .dispatch('FETCH_LIST', route.name)
        .then(() => bus.emit('end-spinner'))
        .catch((e) => console.error(e));
    },
    render() {
      return h(ListView);
    }
  };
}
