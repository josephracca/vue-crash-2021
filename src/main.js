/* entry point to vue */
import { createApp } from 'vue'

//also importing the root app component
import App from './App.vue'

//pulling in the router file
import router from './router'

//passing in the main app component and mounting it to the div with the id of app
createApp(App).use(router).mount('#app')
