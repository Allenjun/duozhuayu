<template>
  <div class="main">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="cell-group"
          v-for="category in categorys"
          :key="category.object.id"
        >
          <van-cell-group>
            <van-cell
              :title="category.object.name"
              is-link
              :value="category.count + '本'"
            />
            <div v-for="book in category.items" :key="book.item.id">
              <van-cell
                center
                :title="book.item.title"
                value="内容"
                label="描述信息"
              />
            </div>
            <van-cell border>
              <template #title>
                <div class="more">再多来点儿<van-icon name="arrow-down" /></div>
              </template>
            </van-cell>
          </van-cell-group>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import booklistdata from "../../static/booklist.js";
import categorydata from "../../static/category.js";
export default {
  name: "Book",
  data() {
    return {
      refreshing: false,
      finished: false,
      loading: false,
      booklist: [],
      categorys: []
    };
  },
  mounted() {
    this.loadBooklist();
    this.loadCategorys();
    this.$utils.http
      .get("/feeds", { params: { offset: 12, limit: 2 } })
      .then(result => {
        console.info(result);
      })
      .catch(error => console.info(error));
  },
  methods: {
    loadBooklist() {
      this.booklist = booklistdata.data;
    },
    loadCategorys() {
      this.categorys = categorydata.data;
    },
    onLoad() {},
    onRefresh() {}
  }
};
</script>

<style scoped lang="less">
.cell-group {
  margin-top: 10px;
  &:nth-last-child(1) {
    margin-bottom: 10px;
  }
}
.more {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
