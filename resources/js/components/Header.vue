<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{name: 'home'}">Presspress</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'posts'}">Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'aboutUs'}">About us</router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import PostList from "../pages/PostList.vue";
import Home from "../pages/Home.vue";
import SinglePost from "../pages/SinglePost.vue";
import AboutUs from "../pages/AboutUs.vue";

export default {
    name: 'Header',
    components: {
        Home,
        PostList,
        SinglePost,
        AboutUs
    },
}
</script>

<style>

</style>