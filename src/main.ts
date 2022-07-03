import { createApp } from "vue";
import App from './App.vue'

// 引入通用样式
import './styles/index.css'

// 导入 pinia
import {createPinia}from 'pinia'
const pinia=createPinia()

createApp(App).use(pinia).mount('#app')