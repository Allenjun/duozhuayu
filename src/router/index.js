import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/pages/Home")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/pages/Search")
  },
  {
    path: "/classify",
    name: "classify",
    component: () => import("../views/pages/Classify")
  },
  {
    path: "/sale",
    name: "sale",
    component: () => import("../views/pages/Sale")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/pages/Cart")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/pages/User")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
