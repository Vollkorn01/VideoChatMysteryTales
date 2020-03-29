import Vue from "vue";
import App from "./App.vue";
import {firestorePlugin} from "vuefire";
import 'firebase/firestore';
import router from "./routes/index";
import store from "./store";


Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");