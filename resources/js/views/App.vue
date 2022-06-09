<template>
    <div>
        <Header />
        <Main />
    </div>
</template>

<script>

import Main from "../components/Main.vue";
import Header from "../components/Header.vue";

export default {
    name: "App",
    components: {
        Main,
        Header,
    },

}
</script>

<style>
    header{
        width: 50%;
        margin: 0 auto;
    }
</style>