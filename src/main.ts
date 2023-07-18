import { createApp } from 'vue';
import { router } from './plugins/router';
import { pinia } from './plugins/pinia';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
