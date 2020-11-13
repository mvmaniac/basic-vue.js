<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" v-model="username" type="text" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" v-model="password" type="text" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        console.log(this.username, this.password);

        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = {
          username: this.username,
          password: this.password
        };

        axios
          .post(url, data)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      }
    }
  };
</script>

<style></style>
