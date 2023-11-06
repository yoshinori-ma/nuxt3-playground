<template>
  <div v-for="task in tasks" :key="task.id">
    <div>
      <span>{{ task.title }}</span>
      <button @click="removeTask(task.id)">x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tasks, removeTask } = useTasks();
</script>
