<!-- take in prop of tasks and loop through and put a component for each one -->
<template>
    <div v-bind:key="task.id" v-for="task in tasks">
        <!-- warning that elements in an interation, we need a unique key -->
        <!-- <h3>
            {{task.text}}
        </h3> -->
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" v-bind:task="task" />
    </div>
</template>

<script>
import Task from './Task';

export default {
    name: 'Tasks',
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    // because we are emitting an event like this, we need to define emits, which is an array of events that we are emitting, and it should get rid of the warning: 
    //"runtime-core.esm-bundler.js?5c40:6539 [Vue warn]: Extraneous non-emits event listeners (deleteTask) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option. at <Tasks onDeleteTask=fn<bound deleteTask> tasks= (3) [{…}, {…}, {…}] > at <App>"
    emits:['delete-task', 'toggle-reminder'],

}
</script>