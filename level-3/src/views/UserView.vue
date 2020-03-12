<template>
  <div>
    <p>name: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        user: 'fetchedUser'
      })
    },
    created() {
      const username = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', username);
    }
  };
</script>

<style></style>
