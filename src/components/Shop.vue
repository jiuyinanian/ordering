<template>
    <div class="shop">
        <Header></Header>
        <Nav></Nav>
        <div class="content">
            <div v-if="shoppingCar.length>0">
                <div class="item" v-for="item in shoppingCar" :key="item.id">
                    <div class="left">
                        <span>✔</span>
                    </div>
                    <div class="right">
                        <div class="pic">
                            <img :src="item.url" alt>
                        </div>
                        <div class="info">
                            <span class="delete" @click="remo(item)">×</span>
                            <h4 class="name">{{item.name}}</h4>
                            <div class="info-details">{{item.description}}</div>
                            <div class="price">
                                <div class="show-price">
                                    <span>小计：&yen;{{item.price * item.number}}</span>
                                </div>
                                <div class="select">
                                    <span class="dec" @click="dec(item)">-</span>
                                    <span class="num">{{item.number}}</span>
                                    <span class="inc" @click="inc(item)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="empty">购物车空空哒，快去选购吧</div>
        </div>
        <div class="cost">
            <div class="left">
                <span>总计： &yen; {{totalprice}}</span>
            </div>
            <div class="right">去结算</div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { mapState, mapActions } from "vuex";
export default {
    name: "shop",
    components: {
        Nav,
        Header,
        Footer
    },
    computed: {
        ...mapState(["shoppingCar", "isLogin"]),
        totalprice() {
            let totalprice = 0;
            this.shoppingCar.forEach(item => {
                return (totalprice += item.price * item.number);
            });
            return totalprice;
        }
    },
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            // console.log(vm)
            if (vm.isLogin == true) {
                if (to.path == "/shop") {
                    next();
                }
            } else {
                // alert("请先登录！");
                next({ name: "loginLink" });
            }
        });
    },
    methods: {
        ...mapActions(["add", "decrease", "remove"]),
        inc(product) {
            // console.log(product);
            this.add(product);
        },
        dec(product) {
            this.decrease(product);
        },
        remo(product) {
            this.remove(product);
        }
    }
};
</script>

<style scoped>
@media (max-width: 1204px) {
    .shop {
        width: 100%;
        margin: 0 auto;
        background: #eee;
    }
    .content {
        width: 100%;
        margin-top: 4em;
        margin-bottom: 6em;
        background: #fff;
    }
    .content .item {
        width: 100%;
        height: 8em;
        overflow: hidden;
    }
    .content .left {
        float: left;
        width: 15%;
        /* background: red; */
        height: 100%;
        position: relative;
    }
    .content .left span {
        display: block;
        width: 1.4em;
        height: 1.4em;
        border-radius: 50%;
        background: red;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.7em;
        margin-top: -0.7em;
        text-align: center;
        font-size: 1em;
        color: #fff;
    }
    .content .right {
        float: right;
        width: 85%;
        height: 100%;
    }
    .content .right .pic {
        float: left;
        width: 40%;
        height: 100%;
    }
    .content .right .pic img {
        width: 100%;
        border-radius: 5px;
        margin-top: 0.5em;
    }
    .content .right .info {
        float: right;
        width: 60%;
        height: 100%;
    }

    .item .info .name {
        text-align: center;
        margin: 0.5em;
        padding: 0.1em 0 0.1em 0;
        background: #85d79f;
        border-radius: 10px;
        color: #555;
        width: 70%;
    }

    .item .info .delete {
        float: right;
        display: block;
        height: 1.4em;
        width: 1.4em;
        border-radius: 50%;
        background: red;
        text-align: center;
        font-size: 1em;
        color: #fff;
        margin: 0.5em;
    }
    .item .info .info-details {
        padding: 0 0.5em 0.5em 0.5em;
        font-size: 0.8em;
        height: 30%;
    }
    .item .info .price {
        overflow: hidden;
    }

    .item .info .price .show-price,
    .item .info .price .select {
        display: inline-block;
    }

    .item .info .price .show-price {
        float: left;
        padding-left: 0.5em;
    }

    .item .info .price .select {
        float: right;
        padding-right: 0.5em;
        font-size: 1em;
    }

    .item .price .select span {
        display: inline-block;
        line-height: 1.5em;
        text-align: center;
        height: 1.5em;
    }

    .item .price .show-price span {
        display: inline-block;
        font-size: 1em;
        height: 1.5em;
        line-height: 1.5em;
    }

    .item .price .select .dec,
    .item .price .select .inc {
        width: 1.5em;
        height: 1.5em;
        background: #f7699c;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
    }

    .cost {
        position: fixed;
        width: 100%;
        height: 3em;
        background: red;
        left: 0;
        bottom: 3em;
    }

    .cost .left {
        float: left;
        width: 70%;
        height: 100%;
        background: #444;
    }

    .cost .left span {
        display: block;
        height: 100%;
        line-height: 3em;
        font-size: 1em;
        color: red;
        margin-left: 1em;
    }

    .cost .right {
        float: right;
        width: 30%;
        height: 100%;
        line-height: 3em;
        text-align: center;
        font-size: 1em;
        font-weight: bold;
        color: #fff;
    }
    .empty{
        width: 80%;
        height: 3em;
        font-size: 1.5em;
        margin: 10em auto;
        text-align: center;
    }
}
</style>