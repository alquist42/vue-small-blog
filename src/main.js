import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

if (process.env.VUE_APP_API_MOCK) {
  console.log("Mocked API");
  require("@/assets/mocks/mock-adapter");
}

Vue.prototype.$radio = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
