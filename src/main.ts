import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import store from './store';
import { CoHamburgerMenu,IoCloseCircle } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";


addIcons(CoHamburgerMenu, IoCloseCircle);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(store);
app.mount('#app');
