import './assets/main.css'

//創建應用實例對象 = vue 2 的new Vue()
import { createApp } from 'vue'
import App from './App.vue'

//1. createApp(App):以跟組件App作為參數生成一個應用實例對象
//2. .mount('#app'):  掛載到id=app 的節點上（see index.html: <body><div id="app"></div></body>
createApp(App).mount('#app')
