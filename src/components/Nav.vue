<template>
    <div class="app-nav">
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/category">分类</router-link>
            </li>
            <li>
                <router-link to="/shop">购物车</router-link>
                <span v-if="totalNum">{{totalNum}}</span>
            </li>
            <li>
                <router-link to="/admin">我的</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["shoppingCar"]),
        totalNum() {
            let totalNum = 0;
            this.shoppingCar.forEach(item => {
                return totalNum += item.number;
            });
            return totalNum;
        }
    }
};
</script>
<style scoped>
.app-nav {
    width: 100%;
    background: #00cc00;
}
ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
}
li {
    float: left;
    padding: 5px 0 5px 0;
    margin-right: 50px;
}
a {
    text-decoration: none;
    font-size: 1em;
    padding: 5px;
    font-weight: bold;
    color: #fff;
}
ul::after {
    content: "";
    clear: both;
    display: block;
}
@media (max-width: 1024px) {
    .app-nav {
        position: fixed;
        bottom: 0;
        z-index: 10;
        height: 3em;
    }
    ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* padding: 5px; */
        height: 3em;
    }
    li {
        text-align: center;
        margin: 0;
        height: 3em;
    }
    a {
        text-decoration: none;
        font-size: 0.9em;
        padding: 5px;
        font-weight: bold;
        color: #fff;
        line-height: 3em;
    }

    span {
        float: right;
        display: block;
        height: 1.5em;
        width: 1.5em;
        background: red;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 1.5em;
        margin-left: -1.5em;
        font-size: .9em;
    }
}
</style>


