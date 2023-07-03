import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import ListAssign from "@/views/ListAssign/index.vue";
import SubmitTestingData from "@/views/SubmitTestingData/index.vue";
import Login from "@/views/Login/index.vue";

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
        path: "/SubmitTestingData",
        name: "SubmitTestingData",
        component: SubmitTestingData,
      },
    ],
  },

  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
