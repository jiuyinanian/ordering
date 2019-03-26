<template>
    <div class="category">
        <Header></Header>
        <Nav></Nav>
        <div class="contain">
            <div class="menu">
                <ul>
                    <li>
                        <a href="#category1">米饭</a>
                    </li>
                    <li>
                        <a href="#category2">面条</a>
                    </li>
                    <li>
                        <a href="#category3">米线</a>
                    </li>
                    <li>
                        <a href="#category4">酸辣粉</a>
                    </li>
                    <li>
                        <a href="#category5">饮料</a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <a id="category1"></a>
                <!-- 隐形定位点-->
                <div class="categorys">
                    <div class="title firts-title">米饭</div>
                    <div class="item" v-for="product in products" :key="product.id">
                        <div v-if="product.type=='rice'">
                            <div class="pic">
                                <img :src="product.url" alt>
                            </div>
                            <div class="info">
                                <h4 class="name">{{product.name}}</h4>
                                <div class="info-details">{{product.description}}</div>
                                <div class="price">
                                    <div class="show-price">
                                        <span>&yen;{{product.price}}/份</span>
                                    </div>
                                    <div class="select">
                                        <span class="dec" @click="dec(product)">-</span>
                                        <span class="num">{{product.number}}</span>
                                        <span class="inc" @click="inc(product)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categorys" id="category2">
                    <div class="title">面条</div>
                    <div class="item" v-for="product in products" :key="product.id">
                        <div v-if="product.type=='noodles'">
                            <div class="pic">
                                <img :src="product.url" alt>
                            </div>
                            <div class="info">
                                <h4 class="name">{{product.name}}</h4>
                                <div class="info-details">{{product.description}}</div>
                                <div class="price">
                                    <div class="show-price">
                                        <span>&yen;{{product.price}}/份</span>
                                    </div>
                                    <div class="select">
                                        <span class="dec" @click="dec(product)">-</span>
                                        <span class="num">{{product.number}}</span>
                                        <span class="inc" @click="inc(product)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categorys" id="category3">
                    <div class="title">米线</div>
                    <div class="item" v-for="product in products" :key="product.id">
                        <div v-if="product.type=='riceNoodles'">
                            <div class="pic">
                                <img :src="product.url" alt>
                            </div>
                            <div class="info">
                                <h4 class="name">{{product.name}}</h4>
                                <div class="info-details">{{product.description}}</div>
                                <div class="price">
                                    <div class="show-price">
                                        <span>&yen;{{product.price}}/份</span>
                                    </div>
                                    <div class="select">
                                        <span class="dec" @click="dec(product)">-</span>
                                        <span class="num">{{product.number}}</span>
                                        <span class="inc" @click="inc(product)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categorys" id="category4">
                    <div class="title">酸辣粉</div>
                    <div class="item" v-for="product in products" :key="product.id">
                        <div v-if="product.type=='powders'">
                            <div class="pic">
                                <img :src="product.url" alt>
                            </div>
                            <div class="info">
                                <h4 class="name">{{product.name}}</h4>
                                <div class="info-details">{{product.description}}</div>
                                <div class="price">
                                    <div class="show-price">
                                        <span>&yen;{{product.price}}/份</span>
                                    </div>
                                    <div class="select">
                                        <span class="dec" @click="dec(product)">-</span>
                                        <span class="num">{{product.number}}</span>
                                        <span class="inc" @click="inc(product)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categorys" id="category5">
                    <div class="title">饮料</div>
                    <div class="item" v-for="product in products" :key="product.id">
                        <div v-if="product.type=='drinks'">
                            <div class="pic">
                                <img :src="product.url" alt>
                            </div>
                            <div class="info">
                                <h4 class="name">{{product.name}}</h4>
                                <div class="info-details">{{product.description}}</div>
                                <div class="price">
                                    <div class="show-price">
                                        <span>&yen;{{product.price}}/份</span>
                                    </div>
                                    <div class="select">
                                        <span class="dec" @click="dec(product)">-</span>
                                        <span class="num">{{product.number}}</span>
                                        <span class="inc" @click="inc(product)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"
import { mapState, mapActions } from "vuex"
import axios from 'axios'
export default {
    name: "category",
    components: {
        Nav,
        Header,
        Footer
    },
    computed: mapState(["products"]),
    created() {
        // console.log(this.products)
        if (this.products.length == 0) {
            axios
                .get("../../static/data.json")
                .then(res => {
                    return res.data.products;
                })
                .then(data => {
                    this.$store.state.products = data;
                });
        }
    },
    methods: {
        ...mapActions(["add", "decrease"]),
        inc(product) {
            console.log(product);
            this.add(product);
        },
        dec(product) {
            this.decrease(product);
        }
    }
};
</script>

<style scoped>
@media (max-width: 1204px) {
    .category {
        width: 100%;
        margin: 0 auto;
        /* background: #eee; */
        height: 100%;
    }
    .contain {
        width: 100%;
        padding-top: 4em;
    }
    .contain .menu {
        width: 25%;
        /* background: #eee; */
        float: left;
        position: fixed;
    }
    .contain .menu li {
        padding: 0.5em;
        /* border: 1px solid #aaa; */
        text-align: center;
        margin-bottom: 0.5em;
        margin-top: 0.5em;
        background: #b0e0e6;
        border-radius: 0.5em;
    }
    /* .contain .menu li:last-child {
        border-bottom: none;
    } */
    .contain .content {
        width: 75%;
        background: #fff;
        float: right;
        margin-bottom: 3em;
    }
    .contain .content .categorys {
        padding-top: 4em;
        /* padding-left: 1em; */
        margin-top: -4em;
        border-left: 1px solid #bbb;
    }
    .contain .content #category5 {
        padding-bottom: 2.5em;
    }
    .contain .content .title {
        padding: 0.3em 0 0.3em 0;
        border-bottom: 1px solid #bbb;
        padding-left: 1em;
    }
    .contain .content .item {
        width: 100%;
        overflow: hidden;
        /* border-bottom: 1px solid #bbb; */
    }

    .item .pic {
        width: 40%;
        height: 100%;
        float: left;
    }
    .item .pic img {
        margin-top: 0.5em;
        width: 100%;
        height: 100%;
    }
    .item .info {
        width: 60%;
        height: 100%;
        float: right;
        padding-bottom: 0.5em;
        /* background: #eee; */
        /* margin:0.5em 0 0.5em 0;
        border:1px solid #eee; */
    }
    .item .info .name {
        text-align: center;
        margin: 0.5em;
        padding: 0.1em 0 0.1em 0;
        background: #85d79f;
        border-radius: 10px;
        color: #555;
    }
    .item .info .info-details {
        padding: 0 0.5em 0.5em 0.5em;
        font-size: 0.8em;
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
        font-size: 0.8em;
    }

    .item .price .select span {
        display: inline-block;
        line-height: 1.5em;
        text-align: center;
        height: 1.5em;
    }

    .item .price .show-price span {
        display: inline-block;
        font-size: 0.8em;
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
}
</style>
