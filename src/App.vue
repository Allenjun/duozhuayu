<template>
  <div id="app">
    <Index></Index>
  </div>
</template>
<script>
import Index from "./views/Index";
export default {
  name: "Home",
  components: { Index }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background-color: #eeeeee;
  height: 100vh;
}
</style>
