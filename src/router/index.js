import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

// import 'core-js/es6/promise'
// import { reject, resolve } from "core-js/es/promise/all-settled";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import("../views/TheHome.vue")}, 
        {path: "/feed", component: () => import("../views/TheFeed.vue"), 
        meta: {
            requiresAuth: true
        }         
    },
        {path: "/register", component: () => import("../views/TheRegister.vue")},
        {path: "/login", component: () => import("../views/TheLogin.vue")},
        {path: "/todo", component: () => import("../components/TodoList.vue"),
        meta: {
            requiresAuth: true
        }}
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(), (user) => {
                removeListener();
                resolve(user)
            }, reject
        )
    } )
}
router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if(await getCurrentUser())
        {
            next();
        } else {
            alert('you don\'t have access');
            next('/')
        }
        
    } else {
        next();
    }
})
export default router;

