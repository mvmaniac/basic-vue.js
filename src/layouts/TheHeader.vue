<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goPage = async () => {
    await router.push({
      name: 'PostCreate',
    });
  };
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" active-class="active" to="/">
          GYM CODING
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/about">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/posts">
                게시글
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/nested">
                Nested
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/my">
                MyPage
              </router-link>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
