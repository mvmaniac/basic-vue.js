<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue';
  import AppContent from './AppContent.vue';

  export default {
    components: {
      AppHeader,
      AppContent
    },
    data: () => ({
      appTitle: 'Common Approach',
      items: [10, 20, 30]
    }),
    methods: {
      renewItems() {
        const newItem = this.items.map(i => i + 10);
        this.items = newItem;
      }
    }
  };
</script>

<style></style>
