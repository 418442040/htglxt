<template>
  <div class="login_wrap">
      <!-- 左侧的盒子 -->
      <div class="login_left">
        <div class="title_wrap">
          <img class="logo" src="../../assets/logo.png" alt="">
          <div class="title">黑马面面</div>
          <div class="line"></div>
          <div class="user_login">用户登录</div>
        </div>
      </div>
      <!-- 右侧的图片 -->
      <img src="../../assets/login_banner_ele.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.login_wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(225deg, rgba(1, 198, 250, 1), rgba(20, 147, 250, 1));
  height: 100%;
  .login_left {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding-top: 48px;
    .title_wrap {
      display: flex;
      align-items: center;
      margin-left: 48px;
      .logo {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        font-weight: 400;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background-color: #C7C7C7;
        margin-right: 12px;
      }
      .user_login {
        font-size: 24px;
        font-weight: 400px;
      }
    }
  }
}
</style>