import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";



Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDN1eUIxBMmTkbT1n_lUM_j20Z-ckYn1Gs",
  authDomain: "videochatmysterytales.firebaseapp.com",
  databaseURL: "https://videochatmysterytales.firebaseio.com",
  projectId: "videochatmysterytales",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");