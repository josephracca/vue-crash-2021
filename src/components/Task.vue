    <!-- breaking UI into specific components -->
<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" v-bind:class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}}
            <i  @click="$emit('delete-task', id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name:'Task',
    props: {
        task: Object
    },
    methods: {
        // onDelete(id){
            // this.$emit('delete-task', id)
//                        ^custom event, and ^id as param
            //Now to be able to send it to the component above it, or the parent?, we need to use $emit, which basically allows us to send a custom event so we can call it whatever we want
        // }
    }
}
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>