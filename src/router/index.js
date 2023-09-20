import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/secret",
    name: "secret",
    component: () => import('../views/secret/Secret.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: "notes",
        component: () => import('../views/secret/Notes.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = store.state.authentication.isLogged
  if (!requiresAuth && isLogged && to.path === '/login') {
    next('/secret')
  }
  if (requiresAuth && !isLogged) {
    next('/login')
  } else {
    next()
  }
})

export default router;
