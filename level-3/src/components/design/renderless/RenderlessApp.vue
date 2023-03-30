<template>
  <div>
    <h1>Renderless Approach</h1>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <template #default="{ response, loading }">
        <div v-if="!loading">
          <p>name: {{ response.name }}</p>
          <p>email: {{ response.email }}</p>
        </div>
        <div v-if="loading">Loading...</div>
      </template>
    </fetch-data>
  </div>
</template>

<script>
  import FetchData from './FetchData.vue';

  export default {
    components: {
      FetchData
    },
    data: () => ({
      checked: false
    })
  };
</script>

<style></style>
