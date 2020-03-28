import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";



Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDN1eUIxBMmTkbT1n_lUM_j20Z-ckYn1Gs",
  authDomain: "videochatmysterytales.firebaseapp.com",
  databaseURL: "https://videochatmysterytales.firebaseio.com",
  projectId: "videochatmysterytales",
  storageBucket: "videochatmysterytales.appspot.com",
  messagingSenderId: "915336612614",
  appId: "1:915336612614:web:7d4d9717eccfdc8a342c87",
  measurementId: "G-9Q93B7CM98"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");