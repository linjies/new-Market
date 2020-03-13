<template>
  <div class="goods">
    <div class="sn-nav-back">
      <a href="javascript:;" @click="turnTop">
        <div class="ar-left">
          <img src="/static/images/zuo-left.png" alt />
        </div>
      </a>
    </div>

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="index in goods.index" :key="index" :goods="goods">
        <!-- <van-swipe-item v-for="(goods,thumb) in goods" :key="thumb"> -->
        <img :src="index" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="vip-mode">
          <div class="vip-info">
            <span class="vip-icon"></span>
            <div class="vip-info-con">SUPER会员预计返价值1.58元云钻</div>
          </div>
          <div class="vip-info-more">立即开通</div>
        </div>
        <div class="goods-ip">{{goods.ip}}</div>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">￥{{ (goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">{{goods.id}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>
    <div class="actionbar">
      <ul class="action-other">
        <li class="item-ser">
          <div class="before">
            <img src="/static/images/dian_wp.png" alt />
            <p class="item-p">客服</p>
          </div>
        </li>
        <li class="item-ser">
          <div class="before">
            <img src="/static/images/dainpu_wps.png" alt />
            <p class="item-p">店铺</p>
          </div>
        </li>
        <li class="item-ser">
          <router-link to="/guwuche">
            <div class="before">
              <img src="/static/images/che_wps.png" alt />
              <p class="item-p">购物车</p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="buyNow" v-for="(title , index) in skuData" :key="index">
        <van-cell @click="showPopup">加入购物车</van-cell>

        <van-popup
          v-model="show"
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '60%' }"
        >
          <header class="cover-head">
            <div class="img-lzabox">
              <img :src="goods.IMG" alt />
            </div>

            <div class="product">
              <div class="price">
                <p class="choosePrice">
                  <span>￥</span>
                  {{title.price}}
                </p>
              </div>
              <div class="kcinfo">
                商品编码:
                <span>{{goods.goods_id}}</span>
              </div>
              <div class="produchu">
                <p>{{title.vpre}}</p>
              </div>
            </div>
          </header>

          <div class="cover-body">
            <div class="slider">
              <ul class="select-list">
                <li class="cluster">
                  <h2 class="h-inline">{{goods.k}}</h2>

                  <div class="colorItemList">
                    <span class="checked1" @click="strong">{{title.id6}}</span>
                    <span class="checked1" @click="strong">{{title.id2}}</span>
                    <span class="checked1" @click="strong">{{title.id3}}</span>
                    <span class="checked1" @click="strong">{{title.id4}}</span>
                    <span class="checked1" @click="strong">{{title.id4}}</span>
                    <span class="checked1" @click="strong">{{title.id5}}</span>
                  </div>
                </li>

                <li>
                  <h2 class="h-inline">{{title.k_v}}</h2>

                  <div class="colorItemList">
                    <span class="checked" @click="pake">{{title.iv}}</span>
                    <span class="checked" @click="pake">{{title.iv2}}</span>
                    <span class="checked" @click="pake">{{title.iv3}}</span>
                    <!-- <span class="checked" @click="pake">{{goods.iv4}}</span> -->
                  </div>
                </li>
              </ul>
            </div>
            <div class="items">
              <span class="gray-reduce" @click="changeNum(goods,-1)">-</span>
              <input type="text" readonly="readonly" v-model="goods.proNum" />
              <span class="gray-push" @click="changeNum(goods,+1)">+</span>
            </div>
          </div>

          <div class="cover-action">
            <div class="fourth">
              <p>马上抢</p>
            </div>

            <div class="fouter">
              <p @click="buygo">加入购物车</p>
            </div>
          </div>
        </van-popup>
      </div>

      <div class="buybow">
        <p class="buy-pu">马上抢</p>
      </div>
    </div>

    <div class="lazyimg">
      <div class="la-img">
        <img :src="goods.url" alt />
      </div>
      <div class="la-img">
        <img :src="goods.url1" alt />
      </div>
      <div class="la-img">
        <img :src="goods.url2" alt />
      </div>
      <div class="la-img">
        <img :src="goods.url3" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { LIMIT_TYPE } from "../../couter/constants";
import yes from "../../couter/yes.json";
import axios from "axios";

import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import { log } from "util";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      color: "",
      chen: "",
      goods_id: "",
      IMG: "",
      title: "",
      proNum: "",
      gowuchen: "",
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      flag: false,
      goods: {},
      Edition: "",
      price: "",
      closeOnClickOverlay: true,
      skuData: [],
      initialSku: {},
      show: false
    };
  },
  created() {
    this.goods = yes[this.$route.params.ig].goods;
    setTimeout(() => {
      console.log(this.skuData);
    }, 1000);
    this.getData();
  },

  methods: {
    changeNum(goods, tag) {
      if (tag > 0) {
        goods.proNum++;
      } else {
        goods.proNum--;
        if (goods.proNum < 0) {
          goods.proNum = 0;
        }
      }
    },

    strong(e) {
      let color = document.querySelectorAll(".checked1");
      for (let i = 0; i < color.length; i++) {
        color[i].classList.remove("off");
      }
      event.target.classList.add("off");
      this.color = e.target.innerHTML;
      // window.console.log(this.color);
    },

    pake(e) {
      let chen = document.querySelectorAll(".checked");
      for (let i = 0; i < chen.length; i++) {
        chen[i].classList.remove("off");
      }
      event.target.classList.add("off");
      this.chen = e.target.innerHTML;
      // window.console.log(this.chen);
    },
    buygo() {
      this.goods_id = this.goods.goods_id;
      this.price = this.goods.price;
      this.IMG = this.goods.IMG;
      this.proNum = this.goods.proNum;
      this.title = this.goods.title;
      let arr = [];
      const { price, IMG, title, proNum, goods_id } = this;
      let poos = this.color;
      let onwo = this.chen;
      if (poos == "") {
        this.$notify("请选择颜色");
      } else if (onwo == "") {
        this.$notify("请选择版本");
      } else {
        this.$notify("加入购物车成功");
        let obj = {
          poos: poos,
          onwo: onwo,
          price,
          IMG,
          title,
          proNum,
          goods_id,
          checked: false
        };
        if (localStorage.getItem("json")) {
          arr = JSON.parse(localStorage.getItem("json"));
          for (let i = 0; i < arr.length; i++) {
            if (JSON.stringify(obj) === JSON.stringify(arr[i])) {
              this.$notify("该商品已经添加过购物车了，不要重复添加了");
              return;
            }
          }
        }
        arr.push(obj);
        localStorage.setItem("json", JSON.stringify(arr));

        //  console.log(arr)

        //  window.console.log(JSON.stringify(arr));
      }
    },

    turnTop() {
      this.$router.go(-1);
    },
    getData() {
      let url = "/static/router/" + this.$route.params.ig + ".json";
      // console.log(url)
      axios.get(url).then(res => {
        this.skuData.push(res.data);
      });
    },
    onAddCartClicked(data) {
      // this.$toast('add cart:' + JSON.stringify(data));
      window.console.log(data);
    },
    onPointClicked() {
      this.$toast("积分兑换");
    },

    // formatPrice() {
    //   return "¥" + (this.goods.price / 100).toFixed(2);
    // },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script >

<style lang="less" scoped>
@import "../../couter/var";

.sku-container {
  width: 150px;
}
.van-button--primary {
  background: linear-gradient(to right, #ffd01e, #ff8917);
  border: #ff8917;
  border-radius: 20px;
}
.sku-container {
  position: absolute;
  top: 10px;
}
.van-button--block {
  width: 66%;
}

ol,
ul {
  list-style: none;
}

.goods-price {
  color: red;
  font-size: 20px;
  font-weight: bolder;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action {
  z-index: 9999;
}
.vip-mode {
  height: 30px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 5px 12px;
  margin: 0 0 0.1rem;
  width: 100%;
  background: #f6f6f6;
}
.vip-info {
  width: 60%;
  margin: 0;
  float: left;
  padding: 0.08rem 0.08rem 0.05rem 0;
}
.vip-icon {
  display: block;
  width: 40px;
  height: 20px;
  float: left;
  position: relative;
  top: -0.02rem;
  background: url("../../../static/images/vip-icon.gif");
  background-size: contain;
  margin-right: 10px;
}
.vip-info-con {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.vip-info-more {
  float: left;
  width: 20%;
  padding: 0 0 0 12px;
  font-size: 13px;
  color: #222;
  background: none;
  position: relative;
  margin-left: 20px;
  color: red;
  font-weight: bold;
}
.goods-ip {
  color: #ffffff;
  border-radius: 10px;
  width: 34px;
  float: left;
  text-align: center;
  background: #fb0f;
  margin-right: 10px;
}
.actionbar {
  position: fixed;
  left: 0;
  transform-origin: 0px 0px;
  bottom: 0;
  height: 60px;
  width: 100%;
  z-index: 10;
  background: #fff;
}
.action-other {
  width: 48%;
  height: 59px;
  line-height: 59px;
  float: left;
}
.item-ser {
  float: left;
  line-height: normal;
  display: block;
  height: 100%;
  padding: 6px 0 0;
  box-sizing: border-box;
  width: 33%;
}
.before {
  width: 50px;
  height: 100%;
  padding: 6px 0 0;
  box-sizing: border-box;
}
.before img {
  width: 28px;
  height: 28px;
  /* margin: 0 auto; */
  margin-left: 11px;
}
.item-p {
  color: #222;
  width: 100%;
  height: 10px;
  font-size: 8px;
  margin: 0px;
  text-align: center;
}
.buyNow {
  width: 28%;
  float: right;
  height: 100%;
}
.buyNow .van-cell {
  align-content: space-around;
  border-radius: 20px;
  background: #fc0;
  margin: 0 3px 0 0;
  margin-top: 12px;
  height: 41px;

  text-align: center;
}
.buyNow .van-cell__value {
  color: #000;
  font-size: 8px;
  margin-left: 15%;
  // padding: 10px;
  line-height: 21px;
  font-weight: bold;
}
.buybow {
  width: 23%;
  margin-top: 20px;
  height: 51px;
  float: right;
  align-content: space-around;
  border-radius: 20px;
  background: #fc0;
  margin: 0 3px 0 0;
  margin-top: 12px;
  height: 41px;
  text-align: center;
}
.buy-pu {
  color: #000;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-top: 12px;
}
.cover-head {
  position: fixed;
  min-height: 70px;
  height: auto;
  padding: 10px 14px 0;
}
.img-lzabox {
  position: absolute;
  width: 114px;
  height: 114px;
  top: 0px;
  left: 15px;
  margin: 0;
}
.img-lzabox img {
  width: 100%;
  height: 100%;
}
.product {
  margin: 0 0 0 120px;
  min-height: 104px;
  padding: 0 0 20px;
}
.price {
  display: inline-block;
  font-size: 12px;
  color: #f42;
  margin-top: 5px;
}
.choosePrice {
  box-sizing: border-box;
}
.kcinfo {
  margin: 2px 0;
  font-size: 10px;
  color: #999;
}
.produchu {
  color: #000;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.produchu p {
  margin: 0px;
}
.cover-body {
  margin-bottom: 46px;
  top: 20px;
  position: absolute;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  top: 130px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
}
.slider {
  word-break: break-word;
  color: #222;
}
.select-list {
  width: 100%;
}
.cluster {
  padding: 12px 10px;
  position: relative;
}
.h-inline {
  color: #000;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.colorItemList {
  overflow: hidden;
  margin-bottom: 3px;
  margin-left: 10px;
}
.checked1,
.checked {
  color: #222;
  // border: 1px solid #fc0;
  background: #ffeda2;
  border-radius: 20px;
  font-size: 10px;
  background: #f6f6f6;
  display: inline-block;
  margin: 0.12rem 0.12rem 0 0;
  padding: 0 1em;
  height: 28px;
  margin-bottom: 8px;
  line-height: 28px;
}
.goods-title {
  font-weight: bold;
}
.number {
  width: 60%;
  float: left;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  -webkit-box-align: center;
  padding: 0.12rem 10px;
}
#num_tip {
  font-size: 12px;
  color: #999;
}
.items {
  border: 1px solid #ddd;
  border-radius: 12px;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  font-size: 0;
  height: 20px;
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 28%;
  // position: relative;
  // background: red ;
}
.gray-reduce {
  // position: relative;
  float: left;
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #000;
}
.gray-push {
  float: right;
  font-size: 12px;

  color: #000;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.off {
  color: #222;
  border: 1px solid #fc0;
  background: #ffeda2;
}
.items input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  background-color: #fff;
  border: 0 none;
  width: 2rem;
  text-align: center;
  font-size: 0.48rem;
  color: #222;
  margin-top: 2px;
  /* border: #999 solid 1px; */
  vertical-align: middle;
}
.cover-action {
  position: fixed;
  bottom: 0px;
  flex-wrap: wrap;
  height: 45px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
}
.fourth {
  border-radius: 9px 2px 2px 9px;
  margin: 0 3px 0 0;
  background: #fc0;
  color: #222;
  height: 40px;
  width: 48%;
  float: left;
  border-radius: 20px;
}
.fourth p {
  text-align: center;
  // padding-top: 9px;
  font-size: 14px;
  font-weight: bold;
}
.fouter {
  background: #f60;
  border-radius: 9px 2px 2px 9px;
  margin: 0 3px 0 0;
  color: #222;
  height: 40px;
  width: 48%;
  float: left;
  border-radius: 20px;
}
.fouter p {
  text-align: center;
  // padding-top: 9px;
  font-size: 14px;
  font-weight: bold;
}

.sn-nav-back {
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

.lazyimg {
  padding: 10px;
  background: #f2f2f2;
  overflow-x: hidden;
  word-break: break-all;
  width: 94%;
  // height: 189px;
}
.la-img {
  width: 100%;
  float: left;
  // height: 189px;
}
.la-img img {
  width: 100%;
  height: 100%;
}
.cueer {
  background: #fc0;
}
</style>