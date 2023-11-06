<template>
  <input type="text" v-model="newTask" />
  <button @click="addTask(newTask)">Add</button>
</template>

<script setup lang="ts">
const { addTask, newTask } = useTasks();
</script>
