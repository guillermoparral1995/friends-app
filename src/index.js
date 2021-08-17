import Vue from 'vue';
import VueRouter from 'vue-router';
import AppComponent from './index.vue'
import ProfileComponent from './pages/Profile/Profile.vue';
import MainPageComponent from './pages/MainPage/MainPage.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/profile',
    component: ProfileComponent
}, {
    path: '/',
    component: MainPageComponent
}]

const router = new VueRouter({
    routes
})

const vm = new Vue({
    el: "#app-container",
    render: (createElement) => createElement(AppComponent),
    router,
})