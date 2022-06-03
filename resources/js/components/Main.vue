<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import PostList from "../pages/PostList.vue";
import Home from "../pages/Home.vue";
import SinglePost from "../pages/SinglePost.vue";
import AboutUs from "../pages/AboutUs.vue";


export default {
    name: 'Main',
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