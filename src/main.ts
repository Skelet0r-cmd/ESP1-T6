import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue from "../node_modules/bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line no-unused-vars
createApp(App)
    .use( createPinia() )
    .mount('#app')
