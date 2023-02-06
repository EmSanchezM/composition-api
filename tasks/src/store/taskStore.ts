import { defineStore } from 'pinia'
import { Task } from '../models/task.model'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true},
            {id: 3, title: "play GTA", isFav: true},
            {id: 4, title: "play soccer", isFav: true}
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
    },
    actions: {
        addTask(task: Task) {
            this.tasks.push(task);
        },
        deleteTask(id: number) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })
        },
        toggleFav(id: number) {
            let task = this.tasks.find(task=> task.id === id)
            if(!task) return; 

            task.isFav = !task.isFav;
        }
    }
})