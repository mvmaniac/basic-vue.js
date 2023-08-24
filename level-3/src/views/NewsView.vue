<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
  import ListItem from '../components/ListItem.vue';

  export default {
    components: {
      ListItem,
    },
    // 해당 부분도 중복이 된다면 mixin 방식으로 중복을 제거 할 수 있음
    mounted() {
      this.$bus.emit('end-spinner');
    },
  };
</script>
