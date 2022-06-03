window.Vue = require('vue');
window.axios = require('axios');

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App";

Vue.use(VueRouter);

import Home from "./pages/Home.vue";
import PostList from "./pages/PostList.vue";
import SinglePost from "./pages/SinglePost.vue";
import AboutUs from "./pages/AboutUs.vue";

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostList,
            props: true,
        },
        {
            path: '/post/:postId',
            name: 'singlePost',
            component: SinglePost,
            props: true,
        },
        {
            path: '/about-us',
            name: 'aboutUs',
            component: AboutUs
        },
    ]
});

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
