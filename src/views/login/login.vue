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
          <el-col :span="6" class="code_col">
            <img :src="codeUrl" alt="" class="code_img" @click="changeCode">
          </el-col>
          </el-row>
        </el-form-item>
        <el-form-item >
          <el-checkbox v-model="ruleForm.checked" >
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>
            和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="login_btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button class='login_btn register_btn' type="primary" @click="dialogFormVisible=!dialogFormVisible">注册</el-button>
        </el-form-item>
      </el-form>
      <!-- 注册框 -->
      <el-dialog center title="用户注册" :visible.sync="dialogFormVisible" width='600px'>
      <el-form :model="register">
        <el-form-item label="头像">
          <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          name="img"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="register.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="register.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="register.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="register.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图形码" :label-width="formLabelWidth">
          <el-row>
          <el-col :span="18"> 
          <el-input v-model="register.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="6" class="code_col">
            <img class="code_img" :src="codeUrl" alt="">
          </el-col>
        </el-row>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-row>
          <el-col :span="18"> 
          <el-input v-model="register.rcode" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="6" class="code_col">
            <el-button @click='getMessage()'>{{btnMessage}}</el-button>
          </el-col>
        </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    </div>
    <!-- 右侧的图片 -->
    <img src="../../assets/login_banner_ele.png" alt="" />
  </div>
</template>

<script>
//导入封装的登录接口
import {login,short_message} from '../../api/login.js'
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
      // 验证码的地址
      codeUrl: "http://127.0.0.1/heimamm/public/captcha?type=login",
      //负责弹出对话框
      dialogFormVisible:false,
      //对话框的宽度
      formLabelWidth:'60px',
      //手机验证码计时
      second:0,
      //短信验证码倒计时更新
      btnMessage:'获取用户验证码',
      //注册头像上传的地址
      uploadUrl:'http://127.0.0.1/heimamm/public/uploads',
      //头像的地址
      imageUrl:"",
      ruleForm: {
        phone: "",
        password: "",
        code: "",
        checked: false,
      },
      register: {
        name:'',
        email:'',
        phone:'',
        password:'',
        code:'',
        rcode:'',
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
  methods: {
    //刷新验证码
    changeCode(){
      this.codeUrl = "http://127.0.0.1/heimamm/public/captcha?type=login" + Date.now()
    },
    submitForm(formName) {
      if(this.ruleForm.checked == false) {
        this.$message.warning("请先阅读并勾选用户协议")
        return
      }
      this.$refs[formName].validate((valid) => {
          if (valid) {
            login({
              phone:this.ruleForm.phone,
              password:this.ruleForm.password,
              code:this.ruleForm.code,
            }).then(res => {
              if(res.status == 200) {
                this.$message.success('登录成功')
              }
            })
          } else {
            this.$message.error("表单格式错误")
          }
        });
      },
      getMessage(){
        const reg = /0?(13|14|15|18|17)[0-9]{9}/
        if(reg.test(this.register.phone) == false) {
          return this.$message.warning('手机号码错误')
        }
        if(this.register.code.length != 4) {
          return this.$message.warning('验证码为4位数')
        }
        if(this.second == 0) {
          this.second = 60
          let timeId = setInterval(() => {
            this.second --
            this.btnMessage = '还剩' + this.second + '秒'
            if(this.second == 0) {
              this.btnMessage = '获取用户验证码'
              clearInterval(timeId)
            }
          }, 100);
        } else {
          return
        }
        short_message({
          phone:this.register.phone,
          code:this.register.code
        }).then(res => {
          if(res.status == 200) {
            this.$message.success('验证码为1234')
            // window.console.log(URL.createObjectURL)
          }
        })
      },
     // 上传的逻辑
    // 上传成功了
    handleAvatarSuccess(res, file) {
      // 生成本地的临时路径
      this.imageUrl = URL.createObjectURL(file.raw);
      // 打印res
      // window.console.log(res)
      // 获取服务器返回的 地址
      // window.console.log(res.data.file_path);
      // 保存到 注册表单的 头像中
      // this.registerForm.avatar =res.data.file_path;
    },
}};
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
      width: 100%;
      height: 100%;
    }
    .login_btn {
      width: 100%;
    }
    .register_btn {
      margin-left: 0;
      margin-top: 26px;
    }
    .code_col {
      height: 40px;
    }
    .el-dialog__header {
      background: linear-gradient(
      -225deg,
      rgba(1, 198, 250, 1),
      rgba(20, 147, 250, 1)
  );
     
    }
    .el-dialog__title {
       font-size: 18px;
      color: #f5f5f5;
    }
    
  }
  .demo-ruleForm {
    margin-right: 41px;
    margin-top: 31px;
  }
}
//element头像上传组件样式
.avatar-uploader {
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
