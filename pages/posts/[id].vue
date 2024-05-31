<template>
  <h1>Cart Number {{ route.params.id }}</h1>
  <h1 v-if="route.params.id == 1">Show Cart number 1</h1>
  <h1 v-else-if="route.params.id == 2">Show Cart number 2</h1>
</template>

<script setup>
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>
