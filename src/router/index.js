import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Preview from "@/pages/Preview";

const routes = [
  { path: "/", component: Main },
  { path: "/preview", component: Preview },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
