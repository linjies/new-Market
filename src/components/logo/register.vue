  <template>
  <div>
    <div class="register_content">
      <div class="a-fixed">
        <a href="javascript:;" @click="joke">
          <div class="ar-left">
            <img src="/static/images/zuo-left.png" alt />
          </div>
        </a>
      </div>

      <div class="text-header">
        <h2>天宇注册</h2>
      </div>

      <div class="register_hear">
        <form @submit.prevent="login">
          <!-- 注册 -->
          <div class="regiter">
            <section>
              <section class="register_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </section>
              <section class="register_verification">
                <input type="text" maxlength="21" placeholder="密码" v-if="showPwd" v-model="pwd" />

                <input type="password" maxlength="21" placeholder="密码" v-else v-model="pwd" />

                <div
                  class="switch_button off"
                  :class="showPwd?'on':'off'"
                  @click="showPwd=!showPwd"
                >
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? '显示' : '隐藏'}}</span>
                </div>
              </section>
              <section class="register_verification">
                <input type="password" maxlength="21" placeholder="再次确认密码" v-model="pow" />
              </section>
            </section>
          </div>

          <button class="register_submit" @click.prevent="login">注册</button>
          <a href="javascript:;" class="about_us">关于我们</a>
        </form>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
    </div>
  </div>
</template>
<script>
import AlertTip from "../AlertTip/AlertTip";
import reqPwdLogin from "../04";
export default {
  data() {
    return {
      showPwd: false,
      pwd: "",
      name: "",
      alertText: "",
      alertShow: false,
      pow: "",
      iq: ""
    };
  },
  methods: {
    joke() {
      this.$router.go(-1);
    },
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
    login() {
      let que = []
      const { pwd, name, pow } = this;
      if (!name) {
        this.showAlert("用户名不能为空");
        return;
      } else if (!/^1[345678]\d{9}$/.test(name)) {
        this.showAlert("手机号码格式不对");
        return;
      }else if (!pwd) {
        this.showAlert("密码不能空");
        return;
      } else if (pow != this.pwd) {
        this.showAlert("两次密码不正确");
        return;
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test(pwd)) {
        this.showAlert("密码格式不对，密码由6-21字母和数字组成");
        return;
      }  else if (this.pwd = this.pwd) {
        this.$notify("注册成功，返回登录");
        let usename = this.name
        let password = this.pow
        // console.log(usename)
        // console.log(password)
        // localStorage.setItem("password", pwd);
        let yue = { usename: usename,password:password};
        if(localStorage.getItem("name")){
        que =  JSON.parse(localStorage.getItem("name"));
        window.console.log(localStorage.getItem("name"))
          for(let i = 0; i< que.length;i++){
            if(JSON.stringify(yue)==JSON.stringify(que[i])){
               this.$notify("该用户已经注册了");
              return;
            }
          }

        }
      que.push(yue);
        localStorage.setItem("name", JSON.stringify(que));
        this.$router.push({ name: "logo" });
      }
     
    }
  },

  components: {
    AlertTip
  }
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.text-header {
  width: 80%;
  margin: 0 auto;
}
.text-header h2 {
  text-align: center;
  color: rgb(216, 113, 72);
  font-size: 20px;
}
.register_content {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.register_hear {
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
.regiter {
  width: 100%;
  height: 100%;
}
.register_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.register_message input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.register_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.register_verification input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.register_submit {
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

.register_content
  .register_hear
  > form
  > div
  .register_verification
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
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button.off {
  background: #fff;
}
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button.on {
  background: #fc0;
}

.register_content
  .register_hear
  > form
  > div
  .register_verification
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
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button
  > .switch_circle
  .right {
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
  margin-left: -20px;
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

.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button
  > .switch_circle.right {
  transform: translateX(30px);
}
.switch_text {
  float: right;
  color: red;
}
</style>
