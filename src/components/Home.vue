<template>
    <div class="home">
        <Header></Header>
        <Nav></Nav>
        <div class="box">
            <div class="contain">
                <div class="item" v-for="product in products" :key="product.id">
                    <div class="pic">
                        <img :src="product.url">
                    </div>
                    <div class="name">{{product.name}}</div>
                    <div class="info">{{product.description}}</div>
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
        <Footer></Footer>
    </div>
</template> 

<script>
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
    name: "home",
    data() {
        return {
            goodsnum: null,
            goodschoosed: {}
        };
    },
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
            // console.log(id);
            this.add(product);
        },
        dec(product) {
            this.decrease(product);
        }
    }
};
</script>

<style scoped>
.home {
    background: #eee;
}

.contain {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
}
.item {
    width: 100%;
    /* border: 1px solid #666; */
    margin-top: 20px;
    border-radius: 5px;
    /* padding: .2em; */
    background: #fff;
}

.item .pic {
    width: 100%;
    text-align: center;
    padding-top: 10px;
    margin: 0;
}

.item .pic img {
    width: 90%;
    border-radius: 5px;
}

.item .info {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    height: 4em;
}
.item .name {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 1.5em;
}
.item .price {
    padding: 10px;
    color: #333;
    height: 1.5em;
    text-align: center;
    font-size: 1em;
}

.item .price .select {
    height: 1.5em;
    float: right;
}
.item .price .show-price {
    height: 1.5em;
    float: left;
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

@media (max-width: 1024px) {
    .home {
        width: 100%;
        margin: auto;
        background: #eee;
    }
    .contain {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        margin-top: 4em;
        padding-bottom: 4em;
    }
    .item .info {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        height: 4em;
        font-size: 0.8em;
    }
}
</style>
