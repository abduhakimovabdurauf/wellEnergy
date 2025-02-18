import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n';
import store from '@/store/index.js'
const app = createApp(App)
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const options = {
    position: POSITION.TOP_RIGHT,
    timeout: 3000
};

app.use(router)
app.use(store)
app.use(i18n)
app.use(Toast, options);
app.mount('#app')
