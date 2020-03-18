<template>
  <div class="header">
    <router-link to="/news">News</router-link><span>|</span>
    <router-link to="/ask">Ask</router-link><span>|</span>
    <router-link to="/jobs">Jobs</router-link><span>|</span>
    <router-link to="/chart">Chart</router-link>
  </div>
</template>

<script>
  export default {};
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
</style>
