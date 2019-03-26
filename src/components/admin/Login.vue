<template>
    <div class="login">
        <div class="user" v-if="!isLogin">
            <div class="username">
                <input type="email" placeholder="用户名" v-model="user.name">
            </div>
            <div class="password">
                <input type="password" placeholder="密码" v-model="user.password">
            </div>
            <div class="btn">
                <button @click="submit">登录</button>
            </div>
            <span>
                <router-link to="/admin/register">免费注册</router-link>
            </span>
        </div>
        <div class="state" v-if="isLogin">
            <div class="tip">{{users}},您好！</div>
            <button class="exit" @click="exit">安全退出</button>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
    name: "login",
    data() {
        return {
            user: {
                name: "",
                password: ""
            }
        };
    },
    computed: mapState(["isLogin", "users"]),
    methods: {
        ...mapActions(["setUser", "setLogin"]),
        submit() {
            axios
                .get("https://wd5318880673xdcauy.wilddogio.com/users.json")
                .then(res => {
                    return res.data;
                })
                .then(data => {
                    let users = [];
                    for (let key in data) {
                        users.push(data[key]);
                    }
                    // console.log(users);
                    let res = users.filter(item => {
                        return (
                            item.name == this.user.name &&
                            item.password == this.user.password
                        );
                    });
                    if (res != null && res.length > 0) {
                        // this.$router.push({ name: "homeLink" });
                        // this.isLogin = true;
                        // this.users = this.user;
                        this.setUser(this.user.name);
                        this.setLogin(true);
                    } else {
                        alert("用户名或密码错误！");
                    }
                });
        },
        exit() {
            this.setUser(null);
            this.setLogin(false);
        }
    }
};
</script>

<style scoped>
@media (max-width: 1204px) {
    .content {
        padding: 4em 0 3em 0;
    }

    .user {
        width: 60%;
        /* background: red; */
        margin: 5em auto 0 auto;
    }

    .user .username,
    .user .password {
        width: 100%;
        text-align: center;
        border: 1px solid #ccc;
        padding: 0.2em;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }
    .user .btn {
        width: 100%;
        text-align: center;
        margin-bottom: 1em;
    }

    .user input {
        display: inline-block;
        width: 90%;
        height: 2em;
        outline: none;
        border: none;
        font-size: 1em;
        padding-left: 0.5em;
    }
    .user button {
        display: block;
        width: 50%;
        height: 2.5em;
        font-size: 1em;
        margin: 0 auto;
        border: none;
        border-radius: 0.5em;
        outline: none;
    }

    span {
        float: left;
        font-size: 0.8em;
    }

    .state {
        width: 60%;
        margin: 0 auto;
    }

    .state .tip {
        width: 100%;
        height: 2em;
        text-align: center;
        margin-bottom: 2em;
    }
    .state button {
        display: block;
        width: 50%;
        height: 2.5em;
        font-size: 1em;
        margin: 0 auto;
        border: none;
        border-radius: 0.5em;
        outline: none;
    }
}
</style>