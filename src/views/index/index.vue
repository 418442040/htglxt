<template>
  <div class="index_wrap">
    <el-container>
      <el-header class="my_header">
        <!-- 头部左边的盒子 -->
        <div class="my_header_left">
          <i class="index_icon el-icon-s-fold" @click="collapse=!collapse"></i>
          <img class="index_logo" src="../../assets/index_logo.png" alt="" />
          <span class="index_title">黑马面面</span>
        </div>
        <!-- 头部右边的盒子 -->
        <div class="my_header_right">
          <img class="photo" src="../../assets/tx.png" alt="" />
          <span class="index_name">李达,你好</span>
          <el-button type="primary" size="mini" @click="userOut"
            >退出</el-button
          >
        </div>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px" class="my_aside">
          <el-menu
            :default-active="$route.path"
            router
            class="el-menu-vertical-demo"
            :collapse="collapse"
          >
            <el-menu-item index="1">
              <i class="el-icon-time"></i>
              <span slot="title">数据概览</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">题库列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-office-building"></i>
              <span slot="title">企业列表</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">学科列表</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右侧功能模块 -->
        <el-main class="my_main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse:false
    };
  },
  methods: {
    userOut() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
/* element布局容器样式 */
html,
body {
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
      color: rgba(73, 161, 255, 1);
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
      color: rgba(99, 99, 99, 1);
      margin-right: 38px;
      font-weight: bold;
    }
  }
}
.my_aside {
  height: 100%;
}
.my_main {
  height: 100%;
  background-color: green;
}
</style>
