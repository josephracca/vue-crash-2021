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

    </header>
    <router-view v-bind:show-add-task="showAddTask" ></router-view>
  <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // when you want to use a component you ahve to declare it here in the components object, then you can pass it into the template above, which takes a message prop
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
      //data is going to be a function that returns an object and we're going top have tasks,
      //NOTE: we could put the tasks in here but we don't want to do that because we want to use a LIFECYCLE METHOD
      //when a component is loaded it goes through a specific lifecylce where there are certain methods/functions that are fired off that you can hook into to do specific things at specific times
      //here we want to use created (see below
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
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
