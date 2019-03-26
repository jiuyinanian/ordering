<template>
    <div class="login">
        <div class="user">
            <div class="username">
                <input type="email" placeholder="用户名" v-model="user.name">
            </div>
            <div class="password">
                <input type="password" placeholder="密码" v-model="user.password">
            </div>
            <div class="password">
                <input type="password" placeholder="确认密码" v-model="user.confirm">
            </div>
            <div class="btn">
                <button @click="submitUser">注册</button>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "login",
    data() {
        return {
            user: {
                name: "",
                password: "",
                confirm: ""
            }
        };
    },
    methods: {
        submitUser() {
            if (this.user.password == this.user.confirm) {
                axios
                    .post(
                        "https://wd5318880673xdcauy.wilddogio.com/users.json",
                        this.user
                    )
                    .then(res => {
                        this.$router.push({name:"loginLink"})
                    });
            }else{
              alert("两次密码不一致！")
            }
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
        width: 40%;
        height: 2.5em;
        font-size: 1em;
        margin: 0 auto;
        border: none;
        border-radius: 0.5em;
        outline: none;
    }
}
</style>