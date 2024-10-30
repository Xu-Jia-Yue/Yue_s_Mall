<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: '三折起狂欢'
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          <img src="/src/assets/images/TitleLogo.png" alt="" />
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -- 插槽进行渲染-->
      <slot>主体内容</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    img {
      width: 60px;
    }

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      line-height: 70px;
      padding-left: 20px;
      border-radius: 20px;
      background-color: rgb(130, 195, 215);
      color: rgb(20, 65, 90);

      small {
        font-size: 16px;
        color: white;
        margin-left: 20px;
      }
    }
  }
}
</style>
