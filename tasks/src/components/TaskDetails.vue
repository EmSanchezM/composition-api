<template>
    <article class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">
                delete
            </i>
            <i class="material-icons" :class="{ active: task.isFav }" @click="taskStore.toggleFav(task.id)">
                favorite
            </i>
        </div>
    </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Task } from '../models/task.model'
import { useTaskStore } from '../store/taskStore'

interface Props {
    task: Task
}

const { task } = defineProps<Props>()

const taskStore = useTaskStore()
</script>

<style scoped>
.task {
    padding: 6px 20px;
    background: #fff;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task h3 .task .icons {
    display: inline-block;
}

.task .icons {
    text-align: right;
}

.task i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
}

.task i.active {
    color: #ff005d;
}
</style>