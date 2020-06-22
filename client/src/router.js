import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginComponent from './components/Login/Login.vue';
import RegisterComponent from './components/Login/Register.vue';
import MemberInfoComponent from './components/MemberInfo/MemberInfo.vue';
import GiftsComponent from './components/MemberInfo/Gifts.vue';
import PromotionComponent from './components/Promotion/Promotion.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'promotion',
      path: '/',
      alias: '/promotion',
      component: PromotionComponent
    },
    {
        name: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterComponent
    },
    {
        name: 'memberInfo',
        path: '/memberInfo',
        component: MemberInfoComponent
    },
    {
        name: 'gifts',
        path: '/gifts',
        component: GiftsComponent
    }
  ]
});
