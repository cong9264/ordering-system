<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="login-form"
    >
      <h3 class="title">登录</h3>
      <el-form-item prop="name">
        <i class="iconfont icon-user"></i>
        <el-input 
          v-model="loginForm.name"
          placeholder="请输入用户名"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <i class="iconfont icon-password"></i>
        <el-input 
          :type="pwdType"
          v-model="loginForm.pwd"
          placeholder="请输入密码"
        >
        </el-input>
        <i 
          :class="['iconfont', 'icon-pwd', !pwdType ? 'icon-eye-open' : 'icon-eye-close']"
          @click="switchPwdType()"
        >
        </i>
      </el-form-item>
      <el-button 
        class="login-btn"
        :loading="loading" 
        type="primary" 
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      const { name } = this.$store.state.user.user;
      if (name === value) {
        callback();
      } else {
        callback(new Error('请输入正确的用户名'));
      }
    };
    const validateUserPwd = (rule, value, callback) => {
      if (value.length >= 5) {
        callback();
      } else {
        callback(new Error('密码不能少于5位'));
      }
    };
    return {
      loginForm: {
        name: "",
        pwd: ''
      },
      rules: {
        name: [ { required: true,  trigger: "blur", validator: validateUsername } ],
        pwd: [ { required: true, trigger: 'blur', validator: validateUserPwd } ]
      },
      loading: false,
      pwdType: 'password',

    };
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            setTimeout(() => {
              this.$router.push('/');
              this.loading = false;
            }, 300);
          }).catch(() => {
            setTimeout(() => {
              alert('登录失败，请检查用户名及密码是否正确！');
              this.loading = false;
            }, 300);
          });
        }
      });
    },
    switchPwdType () {
      this.pwdType = !this.pwdType ? 'password' : '';
    }
  }
};
</script>

<style lang="less" scoped>
@bg-color: #283443;
@light_gray: #eee;
@dark_gray: #889aa4;
@cursor: #fff;

.login-container {
  min-height: 100vh;
  background-color: @bg-color;

  .login-form {
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    box-sizing: border-box;

    .title {
      font-size: 26px;
      color: @light_gray;
      text-align: center;
      margin: 0 0 40px;
    }

    .iconfont {
      display: inline-block;
      width: 30px;
      color: @dark_gray;
      text-align: right;
      padding: 6px 0;
      vertical-align: middle;
    }

    .icon-pwd {
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      &::before {
        cursor: pointer;
      }
    }

    .login-btn {
      width: 100%;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, .1);
    background-color: rgba(0, 0, 0, .1);
    border-radius: 5px;
    color: #454545;

    .el-form-item__content  {
      position: relative;
      font-size: 14px;
      line-height: 40px;

      .el-input {
        height: 47px;
        width: 85%;

        /deep/.el-input__inner {
          height: 47px;
          background-color: transparent;
          border: none;
          color: @light_gray;
          caret-color: @cursor;
        }
      }
    }
  }
}
</style>