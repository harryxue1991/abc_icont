import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import elementPlus from 'element-plus';

// import './style/element/light.scss';
import './style/element/dark.scss';

const app = createApp(App)
app.use(elementPlus)
app.mount('#app')
