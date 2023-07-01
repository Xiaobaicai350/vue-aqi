import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import ListAssign from "@/views/ListAssign/index.vue";
import NowAssign from "@/views/NowAssign/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/ListAssign",
        name: "ListAssign",
        component: ListAssign,
      },
      {
        path: "/NowAssign",
        name: "NowAssign",
        component: NowAssign,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
