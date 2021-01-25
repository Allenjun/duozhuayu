<template>
  <div class="main">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-cell-group>
        <van-cell title="书单" is-link value="全部书单" />
        <ul class="booklist">
          <li v-for="(book, key) in booklist" :key="key">
            <div>
              <h4>{{ book.name }}</h4>
              <span
                >{{ book.contributorsCount }} 人推荐了
                {{ book.itemsCount }} 本书</span
              >
              <div v-if="book.proposer != null">
                <van-image
                  style="border: solid 2px #eeeeee"
                  round
                  width="2rem"
                  height="2rem"
                  :src="book.proposer.avatar"
                />
                <div>
                  <div>{{ book.proposer.name }}</div>
                  <div>客座鱼编</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <h4>查看全部书单></h4>
            {{ booklist.length }}个
          </li>
        </ul>
      </van-cell-group>
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
.booklist {
  color: #eeeeee;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 15px;
  li {
    background: linear-gradient(
          to top,
          rgba(161, 72, 12, 0.8) 0%,
          rgba(161, 72, 12, 0.3) 35%,
          rgb(161, 72, 12) 59%
        )
        center top / auto no-repeat,
      url("https://img.duozhuayu.com/27f8bd3e4a6b11eb83d9f29e57f9cb06.png?x-oss-process=image/resize,w_450/quality,Q_80")
        center center / cover no-repeat;
    border-radius: 5px;
    width: 132px;
    height: 178px;
    flex-shrink: 0;
    margin-left: 10px;
    padding: 10px;
    line-height: 1.44;
    span {
      font-size: 12px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
