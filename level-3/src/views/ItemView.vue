<template>
  <div>
    <section>
      <user-profile>
        <template #username>
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </template>
        <template #time>{{ `Posted ${item.time_ago}` }}</template>
      </user-profile>
      <h2>{{ item.title }}</h2>
    </section>

    <section></section>
    <p>{{ item.title }}</p>
    <div v-html="item.content"></div>
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
        item: 'fetchedItem',
      }),
    },
    created() {
      const { id } = this.$route.params;
      this.$store.dispatch('FETCH_ITEM', id);
    },
  };
</script>

<style scoped></style>
