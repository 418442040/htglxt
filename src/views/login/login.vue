<template>
  <div class="login_wrap">
    <!-- 左侧的盒子 -->
    <div class="login_left">
      <div class="title_wrap">
        <img class="logo" src="../../assets/logo.png" alt="" />
        <div class="title">黑马面面</div>
        <div class="line"></div>
        <div class="user_login">用户登录</div>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="43px"
        class="demo-ruleForm"
      >
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-user"
            v-model="ruleForm.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="ruleForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row>
          <el-col :span="18">
            <el-input
            prefix-icon="el-icon-key"
            v-model="ruleForm.code"
            placeholder="请输入验证码"
          ></el-input>
          </el-col>
          <el-col :span="6" class="code_img">
            <img src="" alt="">
          </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="ruleForm.checked" >
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>
            和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="login_btn" type="primary">登录</el-button>
          <el-button class='login_btn register_btn' type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右侧的图片 -->
    <img src="../../assets/login_banner_ele.png" alt="" />
  </div>
</template>

<script>
//导入axios
import axios from 'axios'
var validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入手机号码"));
  } else {
    const reg = /0?(13|14|15|18|17)[0-9]{9}/;
    if (reg.test(value) === true) {
      callback();
    } else {
      callback(new Error("手机号码格式不正确"));
    }
  }
};
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
        code: "",
        checked: false,
      },
      rules: {
          phone: [{ validator: validatePass, trigger: "blur" }],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 10, message: "密码为6到11位数", trigger: "blur" },
          ],
          code: [
            { required: true, message: "请输入验证码", trigger: "blur" },
            { min: 4, max: 4, message: "验证码为四位数", trigger: "blur" },
          ],
        },
    };
  },
};
</script>

<style lang="less">
.login_wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
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
        background-color: #c7c7c7;
        margin-right: 12px;
      }
      .user_login {
        font-size: 24px;
        font-weight: 400px;
      }
    }
    .code_img {
      background-color: red;
    }
    .login_btn {
      width: 100%;
    }
    .register_btn {
      margin-left: 0;
      margin-top: 26px;
    }
  }
  .demo-ruleForm {
    margin-right: 41px;
    margin-top: 31px;
  }
}
</style>
