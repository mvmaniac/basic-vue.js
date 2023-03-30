<template>
  <div class="header">
    <router-link to="/news">News</router-link><span>|</span>
    <router-link to="/ask">Ask</router-link><span>|</span>
    <router-link to="/show">Show</router-link><span>|</span>
    <router-link to="/chart">Chart</router-link><span>|</span>
    <router-link to="/design">Design</router-link>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    data: () => ({
      title: process.env.VUE_APP_SUB_TITLE
    })
  };
</script>

<style scoped>
  .header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
  }

  .header a {
    color: white;
  }

  .header .router-link-exact-active {
    color: #35495e;
  }

  span {
    margin: 0 5px;
  }

  span.title {
    margin-left: auto;
    font-weight: bold;
  }
</style>
