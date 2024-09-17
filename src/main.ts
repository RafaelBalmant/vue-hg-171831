import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import store from './store';
import { CoHamburgerMenu } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";


addIcons(CoHamburgerMenu);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(store);
app.mount('#app');
