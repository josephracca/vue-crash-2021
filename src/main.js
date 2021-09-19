/* entry point to vue */
import { createApp } from 'vue'

//also importing the root app component
import App from './App.vue'

//passing in the main app component and mounting it to the div with the id of app
createApp(App).mount('#app')
