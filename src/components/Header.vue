<template>
        <header>
            <div class="header">
                <h1>
                    南京六点钟餐饮
                    <span class="order">&nbsp;&nbsp;点餐平台</span>
                </h1>
                <div class="logo">
                    <img src="../../static/imgs/logo.jpg" width="100" alt>
                </div>
            </div>
        </header>
</template>
<script>
export default {
    name:"app-head"
};
</script>
<style scoped>
header {
    width: 100%;
    padding: 10px 0 10px 0;
    background: #ccc;
    height: 6em;
}
.header {
    width: 80%;
    margin: 0 auto;
}
.logo {
    width: 20%;
    height: 100px;
    text-align: center;
}
.log img {
    width: 100%;
}
h1 {
    position: absolute;
    width: 80%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    right: 0;
}
h1 .order {
    font-size: 20px;
}

@media (max-width: 1024px) {
    header {
        width: 100%;
        padding: 0;  
        height: 0;     
    }
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 3em;
        padding: 0.5em 0 0.5em 0;
        background: green;
        color:#fff;
        z-index: 10;
    }
    .logo {
        width: 30%;
        height: 2em;
        text-align: center;
    }
    .logo img {
        width: 50px;
    }
    h1 {
        position: absolute;
        width: 70%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        right: 0;
        font-size: 1.1em;
    }
    h1 .order {
        font-size: 0.7em;
    }
}
</style>
