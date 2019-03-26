<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Home from "./components/Home";
export default {
    name: "App",
    components: {
        Home
    }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
}
body{
    /* background: #eee; */
    box-sizing: border-box;
}
a{
    color:#333;
    text-decoration: none
}
ul{
    list-style: none;
}
</style>
