import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./routes";

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

/*Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random.toString(16).slice(2, 8);
  }
});*/

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
