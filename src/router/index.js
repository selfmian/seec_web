import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"login"
  },
  {
    path:"/home",
    name:"home",
    component: () => import('../views/HomeView.vue')
  },
  {
    path:"/login",
    name:"login",
    component:() => import('../views/Login.vue')
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
