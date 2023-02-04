import { defineStore } from 'pinia'
import { Task } from '../models/task.model'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true}
        ]
    }),
    getters: {
        favs() : Task[] {
            return this.tasks.filter(task => task.isFav)
        },
        favCount() : number {
            return this.tasks.reduce((acc: number, task: Task) => {
                return task.isFav ? acc + 1 : acc 
            }, 0) 
        },
        totalTasks: (state) => {
            return state.tasks.length
        }
    }
})