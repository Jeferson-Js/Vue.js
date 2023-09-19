import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Configuracao from "../views/Configuracao.vue";


const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/configuracao",
    component: Configuracao,
  },
];

// Roteador

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
