<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from './store/taskStore'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'

const taskStore = useTaskStore()

const filterTasks = ref('all')

</script>

<template>
  <header>
    <img src="./assets/pinia-logo.svg" alt="pinia logo">
    <h1>Tasks</h1>
  </header>

  <section class="new-task-form">
    <TaskForm />
  </section>

  <nav class="filters">
    <button @click="filterTasks = 'all'">All Tasks</button>
    <button @click="filterTasks = 'favs'">Fav Tasks</button>
  </nav>

  <div class="task__list" v-if="filterTasks === 'all'">
    <p>You have {{ taskStore.totalTasks }} tasks left to do.</p>
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>

  <div class="task__list" v-if="filterTasks === 'favs'">
    <p>You have {{ taskStore.favCount }} tasks in your favorites list.</p>
    <div v-for="task in taskStore.favs" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header img {
  max-width: 60px;
  transform: rotate(-10deg);
}

header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

.task__list {
  max-width: 640px;
  margin: 20px auto;
}

.filters {
  width: 640px;
  margin: 10px auto;
  text-align: right;
}

.filters button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
}

.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
</style>
