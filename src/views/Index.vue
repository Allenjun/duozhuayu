<template>
  <div>
    <router-view />
    <div style="height: 50px">
      <van-tabbar v-model="active">
        <van-tabbar-item replace icon="wap-home-o" to="/home"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace icon="balance-o" to="/sale"
          >卖东西</van-tabbar-item
        >
        <van-tabbar-item replace icon="shopping-cart-o" to="/cart"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item replace icon="user-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      active: 0
    };
  }
};
</script>
