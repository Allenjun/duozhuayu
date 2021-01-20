<template>
  <div id="main">
    <div id="header"><img src="src/assets/logo.jpeg" />多抓鱼</div>
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: false, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: false, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          :loading="loading"
          loading-text="登录中..."
          block
          type="primary"
          native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <van-overlay :show="loading"></van-overlay>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      isLogin: state => state.auth.isLogin
    })
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("auth/login", true);
      }, 2000);
    }
  }
};
</script>
<style scoped lang="less">
#main {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
}
#header {
  img {
    width: 54px;
    height: 32px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
</style>
