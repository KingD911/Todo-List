import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import("../views/TheHome.vue")}, 
        {path: "/feed", component: () => import("../views/TheFeed.vue")},
        {path: "/register", component: () => import("../views/TheRegister.vue")},
        {path: "/login", component: () => import("../views/TheLogin.vue")},
        {path: "/todo", component: () => import("../components/TodoList.vue")}
    ]
});
export default router;

