import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/filter'
import '@/style/index.scss'

const app = createApp(App)

app.use(pinia).use(router).use(ElementPlus)
app.mount('#app')

