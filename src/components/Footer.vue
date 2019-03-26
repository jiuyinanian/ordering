<template>
    <footer>
        <div class="copyright">&copy; Copyright 2018-2019 南京六点钟餐饮服务有限公司 All rights reserved.</div>
    </footer>
</template>

<script>
export default {
    name:"app-foot"
};
</script>

<style scoped>
.copyright {
    width: 100%;
    background: #ccc;
    text-align: center;
    padding: 5px 0 5px 0;
    margin: 10px 0 10px 0;
    font-size: 14px;
}
@media (max-width: 1024px) {
    footer {
        padding: 2em;
    }
    footer {
      display: none;
    }
}
</style>


