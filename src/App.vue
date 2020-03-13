<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="selected">
      <router-link to="/home">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      </router-link>
      <router-link to="/shangping">
        <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      </router-link>
      <router-link to="/guwuche">
        <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      </router-link>
      <router-link to="/si">
      <van-tabbar-item  icon="user-o">个人中心</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      value: "",
      it: ""
    };
  },
  methods: {
    // fook() {
    //   console.log(123);


    //   // this.$router.push({ name: "si", params: { it: this.it } });
    // }
  }
};
</script>

<style>
/* #app{
  background: rebeccapurple;
} */
.sou {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.van-tabbar-item {
  padding-top: 10px;
}
.van-tabbar--fixed a {
  width: 25%;
}
.apps {
  display: block;
  margin: 0.34rem 0 0 0;
  width: 2.42rem;
  height: 2.42rem;
}
.van-search {
  /* margin:0 0 0 0 auto; */
  float: left;
  width: 80%;
}
.spx {
  width: 10%;
  float: left;
  height: 54px;
  background: #ffffff;
}
.sup {
  width: 10%;
  float: left;
  height: 54px;
  background: #ffffff;
}

.van-tabbar-item .van-tabbar-item__icon {
  margin-bottom: 18px;
}

.van-tabbar-item__icon .van-icon-apps-o {
  position: absolute;
  /* width: 6%; */
  font-size: 23px;
  float: left;
  margin: 0px 10px;
  top: -2px;
  left: -20px;
}
.van-tabbar-item__text {
  position: absolute;
  bottom: 5px;
}

.ppp {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  position: relative;
  top: 0;
  left: 0;
}
.van-icon-friends-o {
  top: 15px;
  position: absolute;
  right: 0px;
  width: 10%;
  float: left;
  font-size: 24px;
}
.JON {
  position: absolute;
  top: 32px;
  left: 9px;
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: black;
}
.jso {
  position: absolute;
  top: 25px;
  right: 14px;
  font-size: 10px;
  color: black;
}
</style>
