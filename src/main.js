import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'fontawesome/fontawesome-free-6.2.1-web/css/all.min.css' 
import 'fontawesome/fontawesome-free-6.2.1-web/js/all.min.js' 
import 'fontawesome/fontawesome-free-6.2.1-web/css/fontawesome.min.css' 

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


