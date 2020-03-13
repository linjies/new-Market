<template>
  <div class="gr-ty">
    <!-- 我的天宇购 -->
    <div class="myTianyu-container">
      <div class="ty-banner">
        <div class="nax-box">
          <div class="nax-text">我的天宇购</div>
          <div class="nax-rught">
            <a href="javascript:;">
              <router-link to="/Cancellation">
                <van-icon name="setting-o" />
              </router-link>
            </a>
          </div>
        </div>

        <div class="user-info">
          <div class="user-detail">
            <a href="javascript:;">
              <div class="fk-sa">
                <img src="/static/images/login-01.jpg" alt />
              </div>
            </a>
            <a href="javascript:;" class="ty-quren">完善信息</a>
          </div>

          <div class="user-logo">
            <div class="user-name" @click="login">
              <span v-if="gologin">登录</span>
              <span v-else>{{usename}}</span>
            </div>

            <div class="user-content">
              <p class="user-lever">生态值</p>
            </div>
          </div>

          <div class="user-qrcode">
            <a href="javascript:;">
              <div class="fk-vip">
                <img src="https://res.suning.cn/project/msinode/wap/home/image/qr-icon.png" alt />
              </div>
            </a>
          </div>
        </div>
        <!-- 天宇钱包 -->
        <div class="ty-money">
          <div class="money-list">
            <a href="javascript:;" class="btn">
              <b>0</b>
              <span>优惠卷</span>
            </a>

            <a href="javascript:;" class="btn">
              <b>0</b>
              <span>关注店铺</span>
            </a>

            <a href="javascript:;" class="btn">
              <b>0</b>
              <span>足迹</span>
            </a>

            <a href="javascript:;" class="btn">
              <b>0</b>
              <span>红包卡劵</span>
            </a>
          </div>
          <div class="ty-vip-box">
            <a href="javascript:;" class="vip-btn">
              <div class="vip-img">
                <img src="https://oss.suning.com/vss/activity/wximg/my/vip.png" alt />
              </div>
              <div class="vip-text">你有一份Super Family盲盒待领取！</div>
              <div class="vip-go">
                <p>限量预售</p>
              </div>
            </a>
            <div></div>
          </div>
        </div>
      </div>
      <!-- 我的订单 -->
    </div>
    <!-- 我的定单 -->
    <div class="new-module-box">
      <div class="module-title">
        <p>我的订单</p>

        <a href="javascript:;">
          查看全部
          <i>
            <van-icon name="arrow" />
          </i>
        </a>
      </div>
      <div class="order-left">
        <van-grid :column-num="5">
          <van-grid-item icon="peer-pay" text="待支付" />
          <van-grid-item icon="logistics" text="待收货" />
          <van-grid-item icon="smile-comment-o" text="评价有礼" />
          <van-grid-item icon="thumb-circle-o" text="退换售后" />
          <van-grid-item icon="notes-o" text="常购清单" />
        </van-grid>
      </div>
    </div>
    <!-- 必备工具 -->

    <div class="new-module-box">
      <div class="module-title">
        <p>必备工具</p>
      </div>

      <div class="order-left">
        <van-grid :column-num="4">
          <van-grid-item icon="bill-o" text="红包" />
          <van-grid-item icon="shop-collect-o" text="店铺关注" />
          <van-grid-item icon="gem-o" text="足迹" />
          <van-grid-item icon="service-o" text="客户服务" />
        </van-grid>
        <van-grid :column-num="4">
          <van-grid-item icon="newspaper-o" text="必抢清单" />
          <van-grid-item icon="vip-card-o" text="校园vip" />
          <van-grid-item icon="smile-o" text="拼购" />
          <van-grid-item icon="gift-card-o" text="我的试用" />
        </van-grid>
      </div>
    </div>

    <!-- 好货推荐  -->
    <div class="guessUlike">
      <a href="javascript:;" class="vititle">
        <h2>..好货推荐..</h2>
      </a>
      <div class="prowrapper">
        <div class="pro_list">
          <!-- 左边数据 -->
          <ul class="left_list">
            <div v-for="(list,i) in pad" :key="i" class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img :src="list.url" alt />
                </div>
              </a>
              <p class="line-clamp-2">{{list.p}}</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">{{list.span}}</span>
                <span class="cx-text">{{list.span2}}</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">{{list.span3}}</span>
                  <span class="price_comments">{{list.span4}}</span>
                </div>
              </div>
            </div>
            <div class="normal-pro welok">
              <a href="javascript:;">
                <div class="pro_image">
                  <img
                    src="//imgservice.suning.cn/uimg1/b2c/image/x7sgPkq-000VVTDbDkNfCA.jpg?format=_is_300w_300h_4e.webp"
                    alt
                  />
                </div>
              </a>
              <p class="line-clamp-2">怡宝 纯净饮用水 4.5L*4 整箱装</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">自营</span>
                <span class="cx-text">大聚惠</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">30.9</span>
                  <span class="price_comments">10万+评价</span>
                </div>
              </div>
              <div class="line"></div>
              <div class="pad-tern">
                <a href="javascript:;">
                  <div class="pd-logo">
                    <img
                      src="//image2.suning.cn/uimg/cms/img/154483872954570243.png?from=mobile"
                      alt
                    />
                  </div>
                  <p class="pd-name">苏宁超市</p>
                </a>
              </div>
            </div>
          </ul>

          <!-- 右边数据 -->
          <ul class="left_list">
            <div v-for="(list,i) in pad2" :key="i" class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img :src="list.url" alt />
                </div>
              </a>
              <p class="line-clamp-2">{{list.p}}</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">{{list.span}}</span>
                <span class="cx-text">{{list.span2}}</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥</span>
                  <span class="pre_price">{{list.span3}}</span>
                  <span class="price_comments">{{list.span4}}</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pad from "../data/index2.json";
import pad2 from "../data/index.json";
export default {
  data() {
    return {
      pad,
      pad2,
      user: "",
      gologin: true,
      name: false,
      usename: ""
    };
  },

  mounted() {
    this.login();
  },
  methods: {
    login() {
      if (window.localStorage.phoname) {
        let use = JSON.parse(window.localStorage.phoname);
        this.gologin = false;
        this.usename = use;
      } else if (window.localStorage.phone) {
        let jsp = JSON.parse(window.localStorage.phone);
        this.gologin = false;
        this.usename = jsp;
      } else {
        this.gologin = true;

        this.$router.push({ name: "logo" });
      }
      // this.$router.push({ name: "logo" });
    }
  }
};
</script>
<style lang="">
.gr-ty {
  width: 100%;
  padding-bottom: 2.5rem;
  background: #f7f7f7;
}

.myTianyu-container {
  width: 100%;
  height: 11.24rem;
  background: #ffdb47;
  position: relative;
}
.nax-box {
  height: 1.28rem;
  padding-top: 0.36rem;
  text-align: center;
  position: relative;
}
.nax-text {
  font-size: 0.72rem;
  font-weight: bold;
  font-size: 20px;
}
.nax-rught {
  width: 1.84rem;
  height: 1.84rem;
  position: absolute;
  right: 0.6rem;
  top: 0.4rem;
  font-size: 20px;
}
.user-info {
  display: flex;
  padding: 1.06rem 0.84rem 0;
  position: relative;
  clear: both;
}
.user-detail {
  position: relative;
  margin: 0;
  padding: 0;
  /* width: 100%; */
  height: auto;
}
.fk-sa {
  display: block;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 1.3rem;
}
.fk-sa img {
  width: 100%;
  height: 100%;
  border: 0.1rem solid #fff;
  border-radius: 25px;
}
.ty-quren {
  width: 3.84rem;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  background-color: #ffeca3;
  position: absolute;
  bottom: -3px;
  left: -0.12rem;
  z-index: 10;
  border-radius: 0.4rem;
  font-size: 0.4rem;
  color: #222;
}
.user-logo {
  /* float: left; */
  display: flex;
  justify-content: center;
  margin-left: 1.6rem;
  align-items: flex-start;
  flex-direction: column;
}
.user-name {
  /* width: 20px; */
  align-items: center;
  margin-bottom: 0.24rem;
  display: flex;
  -webkit-box-align: center;
}
.user-name span {
  display: block;
  font-size: 12px;
  margin-left: 10px;
  /* color: red; */
  max-width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
}
.user-content {
  width: 100%;
  align-items: center;
  /* display: flex; */
  position: relative;
}
.user-lever {
  /* position: absolute; */
  /* left: 17px; */
  height: 1.2rem;
  background: #e1bb23;
  color: #fff;
  font-size: 0.4rem;
  border-radius: 0.3rem;
  padding: 0 0.24rem;
  /* display: -webkit-box;
    display: -ms-flexbox; */
  display: flex;
  margin: 0px;
  justify-content: center;
  align-items: center;
}
.user-qrcode {
  position: absolute;
  top: 1.06rem;
  right: 0.84rem;
}
.fk-vip {
  background: url("https://res.suning.cn/project/msinode/wap/home/image/qr-icon.png");
  width: 3.4rem;
  height: 3.4rem;
  background-size: contain;
}
.fk-vip img {
  width: 100%;
  height: 100%;
}
.ty-money {
  width: 100%;
  height: 3.5rem;
  /* display: flex; */
}
.money-list {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.btn {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn b {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  color: #222;
  font-weight: bold;
}
.btn span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.52rem;
  color: #222;
}
.ty-vip-box {
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 2.2rem;
  padding: 0.28rem 0.48rem 0.28rem 0.4rem;
  background: #fff;
  border-radius: 0.24rem;
  margin-top: -0.2rem;
  margin-left: 31px;
}
.vip-btn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
}
.vip-img {
  display: inline-block;
  width: 2.8rem;
  height: 2.2rem;
}
.vip-img img {
  width: 100%;
  height: 100%;
}
.vip-text {
  display: inline-block;
  width: 8.6rem;
  height: 2rem;
  bottom: -8px;
  font-size: 0.48rem;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  left: 25%;
}
.vip-go {
  position: absolute;
  right: 10px;
  float: right;
  align-items: center;
}
.vip-go p {
  font-size: 0.48rem;
  color: #444;
}
.new-module-box {
  border: #ffeca3 solid 1px;
  margin-bottom: 0.4rem;
  margin-top: 1.68rem;
  width: 80%;
  border-radius: 20px;
  background: #fff;
  margin: 31px auto;
  padding: 0.48rem;
  margin-bottom: 0.4rem;
}
.module-title {
  position: relative;
  width: 100%;
  height: 2.6rem;
}
.van-grid {
  margin-bottom: 10px;
}
.module-title p {
  margin-left: 20px;
  width: 20%;
  font-size: 10px;
  font-weight: bold;
}
.module-title a {
  position: absolute;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  right: 10px;
  bottom: 25px;
}
.order-left {
  width: 100%;
  align-items: center;
}
.van-grid-item {
  border: 0px;
}
.van-grid-item .van-grid-item__content--center {
  padding: 0px;
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
  color: #000;
  font-size: 1.18rem;
  padding: 0px;
  margin: 0px;
  background: white;
}
.prowrapper {
  width: 90%;
  margin: 0 auto;
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
  width: 100%;
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
  width: 100%;
  /* text-align: center; */
  display: -webkit-box;
  height: 2.66rem;
  font-size: 0.52rem;
  font-weight: 500;
  line-height: 0.88rem;
  color: #000;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-left: 5px;
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
  position: fixed;
  bottom: 6rem;
  right: 0.6rem;
  border-radius: 1.6rem;
  width: 3.6rem;
  height: 3.6rem;
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
</style>