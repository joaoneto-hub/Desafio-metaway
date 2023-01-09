import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
   component(){
    return import(/* webpackChunkName: "Home" */ '../pages/Home/Home.vue');
   }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../modules/auth/pages/Login.vue')
  },
  {
    path: '/MyUser',
    name: 'MyUser',
    component: () => import(/* webpackChunkName: "MyUser" */ '../pages/MyUser/MyUser.vue')
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "User" */ '../pages/User/User.vue')
  },
  {
    path: '/Peoples',
    name: 'Peoples',
    component: () => import(/* webpackChunkName: "People" */ '../pages/People/People.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "People" */ '../pages/Contacts/Contacts.vue')
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    to.name !== "Login" &&
    !localStorage.token &&
    !sessionStorage.token
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
