<template>
  <div>
    <van-search
      show-action
      placeholder="请输入搜索关键词"
      @focus="$router.push('/search')"
    >
      <template #action>
        <div id="right-action" @click="$router.push('/classify')">
          <van-icon name="apps-o" size="24px" />
        </div>
      </template>
    </van-search>
    <van-tabs v-model="active">
      <van-tab title="图书">
        <Book />
      </van-tab>
      <van-tab title="电子">
        <EBook />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Book from "./Book";
import EBook from "./EBook";
export default {
  name: "Home",
  components: {
    Book,
    EBook
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped lang="less">
#right-action {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: smaller;
}
</style>
