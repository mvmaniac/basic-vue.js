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
    computed: {
      // # 3
      // ...mapGetters({
      //   ask: 'fetchedAsk'
      // })
      //
      // #2
      // ...mapState(['ask'])
      // ...mapState({ask: state => state.ask})
      //
      // #1
      // ask() {
      //   return this.$store.state.ask;
      // }
    },
  };
</script>
