<template>
    <div class="w-50 mx-auto d-flex align-items-center flex-column pt-5 pb-2 border-bottom border-secondary">
        <h2 class="mb-3">{{ post.user.name }}</h2>
        <img class="mb-4" :src="post.image_source" alt="post image">
        <div class="my-content-wrapper clearfix">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <ul class="float-right">
                <li v-for="(category, index) in post.categories" :key="index + 'category'" :style=" { color: category.color }" class="d-inline ml-3 " >{{ category.name }}</li>                            
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'SinglePost',
    props:['post'],
    methods: {
    }
}
</script>

<style>

</style>