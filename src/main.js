import Vue from "vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from "./App.vue";
import {firestorePlugin} from "vuefire";
import 'firebase/firestore';
import router from "./routes/index";
import store from "./store";

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");