<!-- this is our main app -->


<template>
  <div class="container">
    <header>
      <!-- <h1 >Task Tracker</h1> -->
      <Header
        @toggle-add-task="toggleAddTask"
        title="Task Tracker"
        v-bind:showAddTask="showAddTask"
      />
      <div v-show="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
      <Tasks
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask"
        v-bind:tasks="tasks"
      />
    </header>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    // when you want to use a component you ahve to declare it here in the components object, then you can pass it into the template above, which takes a message prop
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
      tasks: [],
      //data is going to be a function that returns an object and we're going top have tasks,
      //NOTE: we could put the tasks in here but we don't want to do that because we want to use a LIFECYCLE METHOD
      //when a component is loaded it goes through a specific lifecylce where there are certain methods/functions that are fired off that you can hook into to do specific things at specific times
      //here we want to use created (see below
    };
  },
  methods: {
    async addTask(task) {
      // console.log(task);
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      // console.log(data);

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      // this.tasks[id].reminder = !this.tasks[id].reminder;
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
    // [
    //   {
    //     id: 1,
    //     text: 'Doctors Appointment',
    //     day: 'October 1st at 5:30pm',
    //     reminder: true
    //   },
    //   {
    //     id: 2,
    //     text: 'Hair Appointment',
    //     day: 'October 4th at 5:30pm',
    //     reminder: true
    //   },
    //   {
    //     id: 3,
    //     text: 'Gym Time',
    //     day: 'November 1st at 5:30pm',
    //     reminder: false
    //   },

    // ]
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
