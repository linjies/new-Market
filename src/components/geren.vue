<template>
  <div class="loginContainer">
    <div class="a-fixed">
      <a href="javascript:;" @click="turnTop">
        <div class="ar-left">
          <img src="/static/images/zuo-left.png" alt />
        </div>
      </a>
    </div>
    <div class="loginInner">
      <div class="login_header">
        <!-- <h2 class="login_logo">天宇购物</h2> -->
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login  ">
          <!-- 短信 -->
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_phone: rightPhone}"
                @click.prevent="getCode"
              >{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
            </section>
            <section class="login_hint">
              温馨提示：未注册天宇帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 密码 -->
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </section>
              <section class="login_verification">
                <!-- 是否显示密码 -->
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" />

                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd" />

                <div
                  class="switch_button off"
                  :class="showPwd?'on':'off'"
                  @click="showPwd=!showPwd"
                >
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? '显示' : '隐藏'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="6" placeholder="验证码" v-model="picLyanzhengma" />

                <input
                  type="button"
                  class="get_verificationa"
                  id="cook"
                  @click="createCode"
                  v-model="checkCode"
                />
              </section>
            </section>
          </div>

          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
    <!-- 提示组件,closeTip事件在其中被分发出来 -->
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </div>
</template>
<script>
import AlertTip from "../components/AlertTip/AlertTip";
import reqPwdLogin from "../components/04";
var cook;
export default {
  data() {
    return {
      loginWay: false, //true 代表短信 ，flase 代表 手机号码
      phone: "",
      computeTime: 0, //计时
      showPwd: false, //是否显示密码
      pwd: "", //密码
      code: "", //短信验证码
      captcha: "", //图像验证码
      name: "", //用户名`
      alertText: "", // 提示文本
      picLyanzhengma: "", // 验证码格式
      alertShow: false, // 是否显示提示框
      checkCode: "",
      yzm: "",
      it: ""
    };
  },
  computed: {
    rightPhone() {
      // 手机号正则验证
      return /^1[3-9]\d{9}$/.test(this.phone);
    }
  },
  created() {
    this.createCode();
  },
  methods: {
//返回上一级
turnTop(){
 this.$router.go(-1)
},




    // 获取验证码倒计时
    getCode() {
      this.yzm = Math.floor(Math.random() * 899999 + 100000);
      if (!this.computeTime) {
        this.computeTime = 60;

        const intervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime == 0) {
            //停止计时
            clearInterval(intervalId);
          } else if (this.computeTime == 50) {
            alert("验证码为：" + this.yzm);
          }
        }, 1000);
      }
    },
    // 随机验证码
    createCode() {
      cook = "";
      var codeLength = 6; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        cook += random[index]; //根据索引取得随机数加到cook上
      }
      this.checkCode = cook; //把cook值赋给验证码
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },

    //登录匹配正则
    login() {
      this.picLyanzhengma.toUpperCase();
      if (this.loginWay) {
        const { rightPhone, phone, code, yzm,it } = this;
        if (!rightPhone) {
          this.showAlert("手机号不正确");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          this.showAlert("验证码必须为6位数字");
          return;
        }else if(this.code != this.yzm){
  this.showAlert("验证码错误");
        }else if(this.code = this.yzm){
      this.$router.push({ name: "si", params: { it:this.it } });

        }

      }
      
      else {
        // this.$route.push("")
        //密码登陆
              const { name, pwd, picLyanzhengma } = this;
        if (!this.name) {
          // 用户名不能空
          this.showAlert("用户名不能空");
          return;
        } else if (!this.pwd) {
          // 密码不能空
          this.showAlert("密码不能空");
          return;
        } else if (!this.picLyanzhengma) {
          // 验证码不能空
          this.showAlert("验证码不能空");
          return;
        }else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
        //验证码与随机的验证码不一致时
        console.log(this.picLyanzhengma.toUpperCase());
        console.log(cook);
        this.showAlert("验证码不正确");
        this.createCode(); //刷新验证码
        this.picLyanzhengma = "";
      } else if (this.picLyanzhengma = this.checkCode) {
    this.$router.push({ name: "si", params: { it:this.it } });
      }
      
  

      }

    },
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    }
  },
  components: {
    AlertTip
  }
};
</script>

<style scoped>
a {
  color: #000;
}
* {
  margin: 0px;
  padding: 0px;
}
.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #f7df59;
  text-align: center;
}
.login_header_title {
  padding-top: 40px;
  text-align: center;
}
.login_content {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

.login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer .loginInner .login_content > form > div {
  display: none;
}
.loginContainer .loginInner .login_content > form > div.on {
  display: block;
}
.cook {
  font-size: 18px;
  letter-spacing: 3px;
  color: #053d84;
  background: #f2f2f5;
}
.loginContainer .loginInner .login_content > form > div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification {
  position: absolute;
  top: 50%;
  width: 35%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: rgb(207, 207, 218);
  font-size: 14px;
  background: transparent;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verificationa {
  position: absolute;
  top: 50%;
  width: 35%;
  right: -2px;
  transform: translateY(-50%);
  border: 0;
  color: red;
  font-size: 14px;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification.right_phone {
  color: #000;
}

.login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.login_verification input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #fc0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
  border-radius: 20px;
}
.about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.loginContainer .loginInner .login_header .login_header_title > a.on {
  color: #f5eb5b;
  font-weight: 700;
  border-bottom: 2px solid #f7da5a;
}
.switch_text {
  float: right;
  color: red;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off {
  background: #fff;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.on {
  background: #fc0;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle.right {
  transform: translateX(30px);
}
.a-fixed {
  position: fixed;
  z-index: 999;
  background: #999;
  width: 24px;
  top: 11px;
  height: 24px;
  border-radius: 20px;
  margin-left: 10px;
}
.ar-left {
  width: 100%;
  height: 100%;
}
.ar-left img {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 17px;
}
</style>
