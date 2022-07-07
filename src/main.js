import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
console.log("55", process.env);
Vue.config.productionTip = false;

// 引入 mock 拦截
if (process.env.NODE_ENV === 'development') {
  require("./mock/mock")
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
