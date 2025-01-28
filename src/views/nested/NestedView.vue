<script setup lang="ts"></script>

<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- replace로 할 경우 history에 쌓이지 않음 -->
        <router-link
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedOne', replace: true }"
        >
          Nested One
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/nested/two">
          Nested Two2
        </router-link>
      </li>
    </ul>
    <hr class="my-4" />
    <router-view />
  </div>
</template>

<style scoped></style>
