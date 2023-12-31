import { createApp } from 'vue';
import { router } from './plugins/router';
import { pinia } from './plugins/pinia';
import { i18n } from './plugins/i18n';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
