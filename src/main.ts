import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createApp, markRaw } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
// if you need postCSS
// import './assets/index.postcss'
import router from "./router";

const head = createHead();
const app = createApp(App);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.use(head);
app.use(PrimeVue);

app.mount("#app");
