<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
  import ListItem from '../components/ListItem.vue';
  import ListMixin from '../mixins/ListMixin';

  export default {
    components: {
      ListItem
    },
    mixins: [ListMixin],
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
    }
  };
</script>
