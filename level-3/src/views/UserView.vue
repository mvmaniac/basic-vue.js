<template>
  <div>
    <user-profile>
      <template #username>{{ user.id }}</template>
      <template #time>{{ `Joined ${user.created}` }}, </template>
      <template #karma>{{ user.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import UserProfile from '../components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },
    computed: {
      ...mapGetters({
        user: 'fetchedUser',
      }),
    },
    created() {
      const username = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', username);
    },
  };
</script>
