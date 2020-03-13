<template>
  <div class="hello">
    <!-- 顶部 -->
    <div class="cart-var">
      <label class="var-text">购物车</label>
    </div>
    <div class="boy">
      <div class="shops">
        <div class="shop">
          <div class="ander">
            <div class="input">
              <label class="label">
                <input type="checkbox" @click="checkAll($event)" class="checktop" />
                <span class="label-span"></span>
              </label>
            </div>
            <div class="ander-text">
              <p>天宇自营</p>
              <span>免运费</span>
            </div>
          </div>
        </div>
        <div class="cmmdty-layout">
          <div class="content-empty" v-if="puko">
            <div class="empty-cart">
              <img src="/static/images/ty-empty.png" alt />
            </div>
            <span class="empty-cart-tip">购物车空空儿也,快去逛一下吧！</span>
            <div class="lead">
              <router-link to="/home">
                <p class="lead-click">去逛逛</p>
              </router-link>
            </div>
          </div>
          <!-- 购物车商品 -->
          <div class="am-swipe" v-else>
            <div class="am-swipe-actions" v-for="(pro,index) in proList" :key="index">
              <div class="am-cpnter">
                <div class="layoutWapper">
                  <div class="left-out">
                    <label class="label-poke">
                      <input type="checkbox" class="checkItem" @click="selectPro(pro,$event)" />
                      <span class="label-span"></span>
                    </label>
                  </div>
                  <div class="right-out">
                    <div class="cnmdy">
                      <div class="cnmdy-img">
                        <img :src="pro.IMG" />
                      </div>
                      <div class="in-fo">
                        <div class="in-fo-top">
                          <p class="in-fo-p">{{pro.title}}s</p>
                        </div>
                        <div class="services">
                          <span class="func-der">{{pro.poos}}</span>
                        </div>
                        <div class="info-middle">
                          <div class="tybmol">
                            <p>{{pro.onwo}}</p>
                          </div>
                        </div>
                        <div class="info-bottom">
                          <p class="price">
                            <span class="price-icon">￥</span>
                            <span class="f28">{{pro.price}}</span>
                          </p>
                          <div class="counter">
                            <span class="gray-reduce" @click="changeNum(pro,-1)">-</span>
                            <input type="text" readonly="readonly" v-model="pro.proNum" />
                            <span class="gray-push" @click="changeNum(pro,1)">+</span>
                          </div>
                          <div class="m_action">
                            <span class="m_action_item" @click="delPro(index)">删除</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 结算 -->
                  <div class="settlement">
                    <div class="t_detail">
                      <p class="t_main">
                        总计
                        <span class="heji">￥{{totlePrice}}.00</span>
                      </p>
                    </div>
                    <div class="buy-right" @click="onSubmit">
                      去结算
                      <span class="nuy-num"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 猜你喜欢 -->

    <div class="guessUlike">
      <a href="javascript:;" class="vititle">
        <h2>..猜你喜欢..</h2>
      </a>
      <div class="prowrapper">
        <div class="pro_list">
          <!-- 左边数据 -->
          <ul class="left_list">
            <div class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img
                    src="//imgservice.suning.cn/uimg1/b2c/atmosphere/-zKnlp6HkQY3DUUcjHCYcA.jpg?format=_is_300w_300h_4e.webp"
                    alt
                  />
                </div>
              </a>
              <p class="line-clamp-2">TCL BCD-515WEFA1 515升对开门冰箱 纤薄双开门式 风冷无霜电脑控温 家用电冰箱（流光金）</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">自营</span>
                <span class="cx-text">大聚惠</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">2199</span>
                  <span class="price_comments">1600+评价</span>
                </div>
              </div>
            </div>

            <div v-for="(item,index) in mad" :key="index" class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img :src="item.url" alt />
                </div>
              </a>
              <p class="line-clamp-2">{{item.p}}</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">{{item.span}}</span>
                <span class="cx-text">{{item.span2}}</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">{{item.span3}}</span>
                  <span class="price_comments">{{item.span4}}</span>
                </div>
              </div>
            </div>
          </ul>

          <!-- 右边数据 -->
          <ul class="left_list">
            <div class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img
                    src="//imgservice.suning.cn/uimg1/b2c/image/naXEp_m1z1-FBmCu0uavzg.jpg?format=_is_300w_300h_4e.webp"
                    alt
                  />
                </div>
              </a>
              <p
                class="line-clamp-2"
              >vivoy97钢化膜抗蓝光viv0y81s/y93手机膜y53N非全屏y51/y55屏保_8 vivoy97【炫紫抗蓝光】舒眼呵护版8888888888</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">自营</span>
                <span class="cx-text">大聚惠</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">9.6</span>
                  <span class="price_comments">100+评价</span>
                </div>
              </div>
            </div>

            <div v-for="(item,index) in mad2" :key="index" class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img :src="item.url" alt />
                </div>
              </a>
              <p class="line-clamp-2">{{item.p}}</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">{{item.span}}</span>
                <span class="cx-text">{{item.span2}}</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">{{item.span3}}</span>
                  <span class="price_comments">{{item.span4}}</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="tyu-bottom">
      <p class="tyu-text">没有更多了！</p>
    </div>
  </div>
</template>

<script>
import mad from "../data/index.json";
import { Dialog } from "vant";
import mad2 from "../data/index2.json";
import mad3 from "../data/index3.json";
import axios from "axios";

export default {
  data() {
    return {
      mad,
      mad2,
      mad3,
      rou: "",
      proList: {},
      puko: true,
      type: false,
      jake: false,
      totlePrice: 0
    };
  },
  created() {
    this.getData();
    let json = window.localStorage.getItem("json");
    this.proList = JSON.parse(json);
  },
  computed: {},
  methods: {
    onChange() {
      this.getData();
      let json = window.localStorage.getItem("json");
      this.proList = JSON.parse(json);
    },
    changeNum(pro, tag) {
      if (tag > 0) {
        pro.proNum++;
      } else {
        pro.proNum--;
        if (pro.proNum < 0) {
          pro.proNum = 0;
        }
      }
      this.calcTotalPrice();
    },
    selectPro(pro, e) {
      pro.checked = e.target.checked;
      // console.log(this.proList)
      window.localStorage.setItem("json", JSON.stringify(this.proList));
      this.calcTotalPrice();
    },
    checkAll(e) {
      var checkObj = document.querySelectorAll(".checkItem");
      for (var i = 0; i < checkObj.length; i++) {
        checkObj[i].checked = e.target.checked;
      }
      this.proList.forEach(function(item, index) {
        item.checked = e.target.checked;
      });
      // console.log(this.proList);
      window.localStorage.setItem("json", JSON.stringify(this.proList));
      this.calcTotalPrice();
    },
    calcTotalPrice() {
      var _this = this;
      this.totlePrice = 0;
      this.proList.forEach(function(item, index) {
        if (item.checked) {
          _this.totlePrice += item.price * item.proNum;
        }
      });
    },
    delPro(index) {
      this.proList.splice(index, 1);
      window.localStorage.setItem("json", JSON.stringify(this.proList));
      if (this.proList == "") {
        this.puko = true;
      } else {
        this.puko = false;
      }
      // window.localStorage.removeItem(this.proList,this.i)
    },
    onSubmit() {
      var checkObj = document.querySelectorAll(".checkItem");

      // console.log(checkObj);
      this.proList = this.proList.filter(item => item.checked != true);
      window.localStorage.setItem("json", JSON.stringify(this.proList));
      this.$dialog.alert({
        message: "支付成功" + "￥" + this.totlePrice + "元"
      });
      for (var i = 0; i < checkObj.length; i++) {
        checkObj[i].checked = false;
      }
      this.calcTotalPrice();
      // let arr = []
      //  for (var i = 0; i < checkObj.length; i++) {
      // if(checkObj[i].checked) {
      //     // console.log(checkObj[i])
      //     console.log( this.proList[i])
      // arr.push(this.proList[i])
      //     this.proList.splice(i, 1)
      //     window.localStorage.setItem("json", JSON.stringify(this.proList));
      //     this.$dialog.alert({ message: '支付成功'+"￥" +this.totlePrice});
      // }
      // }
      // console.log(arr);
      if (this.proList == "") {
        this.puko = true;
      } else {
        this.puko = false;
      }

      // this.$notify("跳转支付页面")
    },
    getData() {
      //接受数据
      let url = localStorage.getItem("json");
      url = JSON.parse(localStorage.getItem("json"));
      // let data = JSON.parse(url);
      // console.log(url);
      // url[0]=this.proList
      // console.log(url[0]);
      for (let i = 0; i < url.length; i++) {
        url[i] = this.proList;
        if (this.proList == "") {
          this.puko = true;
        } else {
          this.puko = false;
        }
      }
    }
  }
};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.hello {
  padding: 0px;
  margin: 0px;
}
.cart-var {
  height: 2.76rem;
  line-height: 2.76rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  justify-content: space-between;
  padding: 0 0.48rem;
  display: flex;
  -webkit-box-pack: justify;
}
.var-text {
  width: 100%;
  font-size: 20px;
  color: #222;
  text-align: center;
}
.boy {
  padding: 0.48rem;
}

.guessUlike {
  width: 100%;
  margin: 0 auto;
}
.vititle {
  display: block;
  width: 100%;
  height: 2.2rem;
  margin: 0 auto;
}
.vititle h2 {
  height: 100%;
  text-align: center;
  color: white;
  font-size: 1.18rem;
  padding: 0px;
  margin: 0px;
  background: #fb0;
}
.prowrapper {
  width: 100%;
  background: #f7f7f7;
}
.pro_list {
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.left_list {
  width: 48%;
  height: auto;
}
.normal-pro {
  position: relative;
  box-sizing: border-box;
  width: 11.84rem;
  overflow: hidden;
  border-radius: 0.24rem;
  margin-bottom: 0.36rem;
  background-color: #fff;
}

.wloop {
  width: 100%;
  height: 16.84rem;
  padding: 0 0 0.28rem 0;
  background: #fff;
  margin-top: 10px;
}
.pro_image {
  position: relative;
  width: 10.84rem;
  height: 10.84rem;
  margin-left: 0.5rem;
  margin-top: 5px;
}
.pro_image img {
  width: 96%;
  height: 100%;
}
.line-clamp-2 {
  margin: 0.36rem auto 0;
  width: 160px;
  /* text-align: center; */
  display: -webkit-box;
  height: 2.66rem;
  font-size: 0.52rem;
  font-weight: 500;
  line-height: 0.88rem;
  color: #000;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  white-space: normal;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-width: 300px;
}
.fp-index2 {
  position: relative;
  float: left;
  width: 24%;
  height: 12rem;
}

.fpximg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cuxiao-tag {
  display: flex;
  width: 100%;
  margin: 0px;
  height: 1.48rem;
  overflow: hidden;
  flex-wrap: wrap;
}
.guess_zyicon {
  background: #fc0;
  display: block;
  margin-right: 0.12rem;
  height: 1.16rem;
  line-height: 1.36rem;
  font-size: 0.38rem;
  text-align: center;
  padding: 0.06rem 0.12rem;
  margin-bottom: 0.04rem;
  border-radius: 0.12rem;
  margin-left: 5px;
  box-sizing: content-box;
}
.cx-text {
  /* margin: 0 0.06rem 0.04rem 0.04rem; */
  margin-top: 3px;
  border-radius: 0.12rem;
  height: 0.98rem;
  padding: 0.04rem 0.24rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  box-sizing: border-box;
  border: 1px solid #fb0;
}
.pro_price {
  height: 0.76rem;
  margin-left: 0.24rem;
  line-height: 2.76rem;
}
.real_price {
  display: flex;
  height: 1.76rem;
  font-size: 0.48rem;
  color: #f42;
  font-weight: bold;
  align-items: flex-end;
}
.flg {
  line-height: 2.56rem;
  font-size: 0.89rem;
}
.pre_price {
  font-size: 1.02rem;
  line-height: 2.72rem;
}
.price_comments {
  color: #999;
  margin-left: 0.26rem;
  font-weight: normal;
  font-size: 0.4rem;
}
.new-dack {
  width: 100%;
  margin: 0 auto;
  height: 395px;
}
.fp-index1 {
  position: relative;
  float: left;
  width: 26%;
  height: 12rem;
}
.click-are {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.click-are img {
  width: 100%;
  height: 100%;
}
.lopk {
  position: absolute;
  top: 1.48rem;
  width: 65%;
  height: 37%;
  left: 1.28rem;
}
.lopk img {
  width: 100%;
  height: 100%;
}
.lopk2 {
  position: absolute;
  top: 1.48rem;
  width: 65%;
  height: 37%;
  right: 1.28rem;
}
.lopk2 img {
  width: 100%;
  height: 100%;
}
.go-top {
  /* border: #999 solid 1px; */
  border-radius: 20px;

  position: fixed;
  bottom: 6rem;
  right: 0.6rem;
  border-radius: 1.6rem;
  width: 2.6rem;
  height: 2.6rem;
  background: #3a3a3a;
  background-size: 0.6rem 0.76rem;
  z-index: 50;
}

.line {
  margin: 0.36rem auto 0;
  width: 5.96rem;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}
.pad-tern {
  width: 100%;
  height: 2.84rem;
  margin: 0.36rem 0.36rem 0;
}
.pd-logo {
  float: left;
  width: 1.84rem;
  height: 1.84rem;
}
.pd-logo img {
  width: 100%;
  height: 100%;
}
.welok {
  width: 100%;
  height: 19.84rem;
  padding: 0 0 0.28rem 0;
  background: #fff;
  margin-top: 10px;
}
.pd-name {
  float: left;
  height: 1.84rem;
  line-height: 1.84rem;
  font-size: 0.68rem;
  color: #666;
  margin: 0px;
  /* margin-left: .24r0em; */
}
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
.van-icon-apps-o {
  position: absolute;
  /* width: 6%; */
  font-size: 23px;
  float: left;
  margin: 0px 10px;
  top: 7px;
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

.tyu-bottom {
  position: absolute;
  align-items: center;
  margin: 0.72rem auto 1.8rem;
  width: 100%;
  height: 8.48rem;
  background-size: 100% 100%;
}
.tyu-text {
  width: 8.4rem;
  margin: 0 auto;
  color: #999;
  height: 2.4rem;
  text-align: center;
}
.shops {
  background-color: #fff;
  margin-bottom: 0.48rem;
  border-radius: 0.24rem;
}
.shop {
  padding: 0.48rem 0.48rem 0.36rem 0;
  height: auto;
}
.ander {
  margin: 0 auto;
  width: 96%;
  height: 25px;
  padding: 10px;
  background: #fc0;
}
.ander input {
  width: 16px;
  height: 16px;
}
.input {
  /* width: 30%; */
  float: left;
}
.ander-text {
  width: 90%;
  float: left;
  font-size: 12px;
  color: #000;
}
.ander-text p {
  margin-left: 10px;
  width: 61px;
  float: left;
}
.ander-text span {
  float: right;
  color: red;
}
.cmmdty-layout {
  padding-bottom: 0.72rem;
  padding-right: 0.48rem;
  padding-top: 0px;
  width: 100%;
  height: auto;
}
.am-swipe {
  width: 100%;
  /* height: 168px; */
  overflow: hidden;
  position: relative;
}
.am-swipe-actions {
  width: 100%;
  /* height: 168px; */
  padding-bottom: 0.72rem;
  padding-right: 0.48rem;
}
.am-cpnter {
  width: 100%;
  height: 150px;
  position: relative;
  background-color: rgb(230, 213, 213);
}
.left-out {
  position: relative;
  width: 30px;
  float: left;
  height: 90px;
}
.left-out input {
  position: absolute;
  top: 40%;
  left: 28%;
}
.layoutWapper {
  position: relative;
}
.right-out {
  width: 309px;
  height: 150px;
  float: left;
}
.cnmdy {
  display: flex;

  padding-top: 0.12rem;
  padding-bottom: 0.4rem;
}
.cnmdy-img {
  width: 5.6rem;
  height: 5.6rem;
  -webkit-border-radius: 0.12rem;
  -moz-border-radius: 0.12rem;
  border-radius: 0.12rem;
  position: relative;
  /* z-index: 2; */
  overflow: hidden;
}
.cnmdy-img img {
  width: 100%;
  height: 100%;
}
.in-fo {
  width: 70%;
  height: 134px;
  flex: 1 1;
  padding-left: 0.4rem;
  justify-content: space-between;
}
.in-fo-top {
  /* height: 40px; */
  font-size: 0.48rem;
  font-weight: 700;
}
.in-fo-p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 12px;
  color: #000;
  overflow: hidden;
}
.info-middle {
  flex: 1 1;
  margin-bottom: 0.36rem;
}
.tybmol {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  white-space: nowrap;
  font-size: 0.48rem;
  margin-top: 0.24rem;
}
.tybmol p {
  color: #f42;
  font-size: 12px;
  font-family: Microsoft YaHei;
}

.services {
  font-size: 0.48rem;
  color: #333;
  display: flex;
  -webkit-box-align: center;
  justify-content: space-between;
  height: 0.64rem;
  margin-top: 0.16rem;
  align-items: center;
  -webkit-box-pack: justify;
}
.func-der {
  white-space: nowrap;
  line-height: normal;
  background: #fb0;
  border-radius: 20px;
  padding-left: 0.12rem;
  max-width: 5rem;
  margin-right: 0.2rem;
}
.info-bottom {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.48rem;
}
.price {
  color: #f42;
  -webkit-align-self: flex-end;
  align-self: flex-end;
  font-weight: 900;
}
.price-icon {
  display: inline-block;
  width: 0.44rem;
  font-size: 8px;
}
.f28 {
  font-size: 0.56rem;
}
.counter {
  position: relative;
  display: block;
  width: 72px;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f7f7f7;
  font-weight: 400;
}
.gray-reduce {
  position: relative;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.gray-push {
  position: relative;

  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.counter input {
  flex: 1 1;
  background-color: #fff;
  border: 0 none;
  width: 2rem;
  text-align: center;
  font-size: 0.48rem;
  color: #222;
  /* border: #999 solid 1px; */
  vertical-align: middle;
}
.m_action {
  margin: 10px 10px 0 0;
  height: 15px;
  color: #999;
  font-size: 0;
  text-align: right;
}
.m_action_item {
  position: relative;
  padding: 0 10px;
  line-height: 15px;
  font-size: 10px;
  padding-right: 0;
}
.settlement {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 14px;
  position: fixed;
  z-index: 120;
  bottom: 50px;

  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 40px;
}
.t_detail {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 50px;
  text-align: right;
  position: relative;
}
.t_main {
  font-weight: 700;
  font-size: 16px;
  line-height: 1em;
  height: 1em;
  overflow: hidden;
  position: absolute;
  top: 15px;
  left: 20%;
}
.heji {
  color: #f2270c;
}
.buy-right {
  top: 0px;
  right: 0;
  position: absolute;
  display: block;
  width: 110px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  border-radius: 20px;
  background-color: #fb0;

  color: #fff;
  background-image: none;
}
.nuy-num {
  font-weight: 400;
  font-size: 12px;
  font-family: none;
}
.checktop {
  display: none;
}
.checkItem {
  display: none;
}
.label-span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: #fb0 solid 1px;
  background: #f7f7f7;
  border-radius: 20px;
}

.label {
  position: relative;
}
.label-poke {
  position: absolute;
  top: 50%;
  left: 4px;
}

.checkItem:checked + .label-span:after {
  content: "";
  position: absolute;
  top: -7%;
  left: 4%;
  width: 100%;
  height: 88%;
  border-radius: 50%;
  background-color: red;
}

.checktop:checked + .label-span:after {
  content: "";
  position: absolute;
  top: -7%;
  left: 4%;
  width: 100%;
  height: 88%;
  border-radius: 50%;
  background-color: red;
}

.content-empty {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  align-items: center;
  flex-direction: column;
  -webkit-box-align: center;
}
.empty-cart {
  width: 80px;
  height: 80px;
  margin: 26px auto 9px;
}
.empty-cart img {
  width: 100%;
  height: 100%;
}

.empty-cart-tip {
  font-size: 8px;
  color: #666;
  margin-bottom: 10px;

  text-align: center;
}
.lead {
  border: #999 solid 1px;
  border-radius: 20px;
}
.lead-click {
  color: #222;
  font-size: 12px;
  width: 46px;
  height: 18px;
  text-align: center;
}
</style>
