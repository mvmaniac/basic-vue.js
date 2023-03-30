<template>
  <div>
    <h1>Slot Approach</h1>
    <ul>
      <!-- 단순 slot 사용 -->
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->

      <!-- props로 했을 경우 -->
      <!-- <item v-for="it in items" :key="it" :item="it"></item> -->

      <!-- slot로 했을 경우 -->
      <item v-for="it in items" :key="it">{{ it }}</item>
    </ul>
  </div>
</template>

<script>
  import Item from './ItemSlot.vue';

  export default {
    components: {
      Item
    },
    data: () => ({
      items: ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5']
    })
  };
</script>

<style></style>
