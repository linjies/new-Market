<template>
  <div class="Setup">
    <!-- 账户设置 -->
    <div class="ty-nav">
      <div class="ty-left">
        <div class="ty-back" @click="gohost">
          <img src="/static/images/zuo-left.png" alt />
        </div>
      </div>

      <div class="sn-nav-title">账户设置</div>
    </div>

    <!-- 个人 -->

    <a href="javascript:;">
      <div class="btn-content off">
        <img src="/static/images/login-01.jpg" alt />

        <label class="ge-label">我的个人设置</label>
      </div>
    </a>
    <!-- 会员码 -->
    <a href="javascript:">
      <div class="btn-content lop">
        <label>会员码</label>
        <div class="qrcode-ico">
          <img src="/static/images/erwei_wps.png" alt />
        </div>
      </div>
    </a>
    <!-- 我的信息 -->
    <a href="javascript:">
      <div class="btn-content lop">
        <label>我的信息</label>
        <span>添加汽车/宝宝等信息</span>
      </div>
    </a>
    <!-- 地址管理 -->
    <a href="javascript:">
      <div class="btn-content off">
        <label>地址管理</label>
        <span>新增 / 修改地址</span>
      </div>
    </a>



    <!-- 账户安全 -->
    <a href="javascript:">
      <div class="btn-content lop">
        <label>账户安全</label>
        <span>修改密码 / 修改手机</span>
      </div>
    </a>
    <!-- 增票资质 -->
    <a href="javascript:">
      <div class="btn-content lop">
        <label>增票资质</label>
        <span>个人增票认证</span>
      </div>
    </a>
    <!-- 关联账号 -->
    <a href="javascript:">
      <div class="btn-content off">
        <label>关联账号</label>
        <span>暂无关联账户</span>
      </div>
    </a>



    <a href="javascript:" class="outbtn-logout" @click="minate">退出登录</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sige: false
    };
  },
  mounted() {},
  methods: {
    gohost() {
      this.$router.go(-1);
    },
    minate() {
      if (window.localStorage.phoname) {
        let sigo = JSON.parse(window.localStorage.phoname);
        localStorage.removeItem("phoname");
      } else if (window.localStorage.phone) {
        let soge = JSON.parse(window.localStorage.phone);
        localStorage.removeItem("phone");
      } else {
        this.sige = false;
        this.$router.push({ name: "logo" });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0ox;
  padding: 0px;
}
body {
  width: 100%;
  height: 100%;
  background: #e0dbdb;
  color: #222;
}

.ty-nav {
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  height: 50px;
  position: relative;
  background: #fff;
  line-height: 1.76rem;
  font-size: 0.6rem;
}
.ty-back {
  position: absolute;
  left: 0.1rem;
  top: 10px;
  width: 20px;
  height: 20px;
}
.ty-back img {
  width: 100%;
  height: 100%;
}
.ty-left {
  width: 20%;
  float: left;
  height: 100%;
}
.sn-nav-title {
  width: 60%;
  margin: 0 auto;
  color: #333;
  text-align: center;
  height: 100%;
  font-size: 15px;
  /* font-weight: bold; */
  padding-top: 10px;
}
.btn-content {
  display: flex;
  padding-left: 10px;
  height: 48px;
  background: #fff;
}
.lop{
  border-bottom: 1px rgb(241, 235, 235) solid;

}
.off {
  margin-bottom: 0.8rem;
}
.btn-content span {
  display: block;
  color: #999;
  font-size: 12px;
  padding-top: 15px;
  padding-right: 10px;
}

.btn-content img {
  display: block;
  width: 43px;
  height: 43px;
  border: 0;
  border-radius: 0.9rem;
  margin-right: 0.4rem;
}
.btn-content label {
  display: block;
  flex: 1;
  color: rgb(46, 45, 45);
  padding-top: 13px;
  font-size: 15px;
}
.qrcode-ico {
  display: block;
  width: 20px;
  height: 20px;
  padding-right: 10px;
  padding-top: 10px;
}
.qrcode-ico img {
  width: 100%;
  height: 100%;
}
.ge-label {
  color: black;
  padding-top: 15px;
  width: 80%;
  font-size: 12px;
  margin-left: 10px;
}
.outbtn-logout {
  display: block;
  width: 13.8rem;
  height: 2.6rem;
  text-align: center;
  line-height: 2.6rem;
  color: #fff;
  font-size: 0.6rem;
  background: #f60;
  margin: 1.2rem auto 0.8rem;
  border-radius: 0.16rem;
}
.Setup {
  width: 100%;
  padding-bottom: 2.5rem;
  background: #f7f7f7;
  height: 100%;
}
</style>