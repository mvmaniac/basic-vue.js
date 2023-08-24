<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
  import ListItem from '../components/ListItem.vue';
  import useFetchList from '../composable/fetchList';

  export default {
    components: {
      ListItem,
    },
    setup() {
      useFetchList();
    },
  };
</script>
