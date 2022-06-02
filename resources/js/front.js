window.Vue = require('vue');
window.axios = require('axios');

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App";

Vue.use(VueRouter);

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import SinglePost from "./pages/SinglePost.vue";


const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/single-post',
            name: 'singlePost',
            component: SinglePost
        },
    ]
})

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
