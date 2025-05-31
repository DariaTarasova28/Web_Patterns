import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // путь к файлу с роутером

const app = createApp(App)
app.use(router)    // ОБЯЗАТЕЛЬНО подключаем роутер!
app.mount('#app')
