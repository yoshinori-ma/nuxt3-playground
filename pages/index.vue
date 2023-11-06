<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const pageTitle: Ref<string> = ref("Tasks");
</script>

<template>
  <h1 v-text="pageTitle"></h1>
  <TaskList />
  <AddTask />
</template>

<style scoped>
button {
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  padding: 0.5rem;
}

button:hover {
  background: #eee;
}
</style>
