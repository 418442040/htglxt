<template>
  <div class="index_wrap">
      <el-container>
        <el-header class="my_header">
          <!-- 头部左边的盒子 -->
          <div class="my_header_left">
            <i class="index_icon el-icon-s-fold"></i>
            <img class="index_logo" src="../../assets/index_logo.png" alt="">
            <span class="index_title">黑马面面</span>
          </div>
          <!-- 头部右边的盒子 -->
          <div class="my_header_right">
            <img class="photo" src="../../assets/tx.png" alt="">
            <span class="index_name">李达,你好</span>
            <el-button type="primary" size="mini">退出</el-button>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px" class="my_aside">Aside</el-aside>
          <el-main class="my_main">Main</el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
/* element布局容器样式 */
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
.index_wrap {
  height: 100%;
}
.el-container {
  height: 100%;
}
.my_header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  .my_header_left {
    display: flex;
    align-items: center;
    .index_icon {
    font-size: 30px;
    margin-right: 22px;
  }
  .index_logo {
    width: 28px;
    height: 23px;
    margin-right: 11px;
  }
  .index_title {
    font-size: 22px;
    font-weight: bold;
    color: rgba(73,161,255,1);
  }
  }
  .my_header_right {
    display: flex;
    align-items: center;
    .photo {
      width: 43px;
      height: 43px;
      margin-right: 9px;
    }
    .index_name {
      font-size: 14px;
      color:rgba(99,99,99,1);
      margin-right: 38px;
      font-weight:bold;
    }
  }
}
.my_aside {
  height: 100%;
  background-color:yellow;
}
.my_main {
  height: 100%;
  background-color: green;
}

</style>