<template>
  <div>
    <van-nav-bar left-arrow fixed placeholder>
      <slot slot="title"></slot>
      <slot slot="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
