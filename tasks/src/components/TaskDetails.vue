<template>
    <article class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i>delete</i>
            <i>favorite</i>
        </div>
    </article>
</template>

<script lang="ts">
    export default {
        props: ['task']
    }
</script>

<style scoped>
    .task {
        padding: 6px 20px;
        background: #fff;
        margin-top: 20px;
        border-radius: 4px;
        box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
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
</style>