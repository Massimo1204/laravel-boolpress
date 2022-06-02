<template>
<div>
    <div class="my-post-container d-flex align-items-center flex-column">
        <router-link :to="{name: 'home'}">Home</router-link>

        <Post v-for="(post, index) in posts" :key="index + 'post'" :post="post" />
        <nav >
            <ul class="pagination">
                <li v-if="pagination.currentPage > 1" class="page-item">
                    <a class="page-link" href="#" @click="getPosts(pagination.currentPage - 1)">Previous</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">{{pagination.currentPage}}</a>
                </li>
                <li v-if="pagination.currentPage < pagination.lastPage" class="page-item">
                    <a class="page-link" href="#" @click="getPosts(pagination.currentPage + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>

import Post from "./Post.vue"

export default {
    name: "PostList",
    components: {
        Post,
    },
    data: function() {
        return {
            posts : [],
            pagination : {},
        }
    },
    methods: {
        getPosts(page) {
            axios.get("http://localhost:8000/api/posts?page=" + page)
                .then((result)=>{
                    this.posts = result.data.data;
                    const {current_page , last_page } = result.data;
                    this.pagination = { currentPage : current_page, lastPage : last_page};
                    console.log(this.posts);
                }).catch((error)=>{
                    console.warn(error);
                });
        },
    },
    created() {
        this.getPosts(1);
    }
}
</script>

<style>

</style>