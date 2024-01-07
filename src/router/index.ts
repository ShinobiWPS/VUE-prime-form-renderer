import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "@/pages/IndexPage.vue";
import FormPage from "@/pages/FormPage.vue";

export enum RoutesLabels {
  ROOT = "/",
  FORM = "/form",
}

const routes = [
  {
    path: RoutesLabels.ROOT,
    component: IndexPage,
    meta: {
      title: "Home",
    },
  },
  {
    path: RoutesLabels.FORM,
    component: FormPage,
    meta: {
      title: "Form renderer",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
