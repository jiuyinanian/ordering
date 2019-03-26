<template>
    <div class="admin">
        <Header></Header>
        <Nav></Nav>

        <div class="content">
            <div class="welcome">欢迎光临六点钟餐饮</div>
            <router-view />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"
import Login from "./admin/Login"
export default {
    name: "admin",
    components: {
        Nav,
        Header,
        Footer,
        Login
    }
};
</script>

<style scoped>
@media (max-width: 1204px) {
    .content {
        padding: 4em 0 3em 0;
    }
    .welcome{
        width: 80%;
        height: 3em;
        margin:1em auto;
        text-align: center;
        font-size: 1.5em;
    }

    
}
</style>