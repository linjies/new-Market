<template>
  <div class="lieshi">
    <div class="hello">
      <div class="ty-nav">
        <div class="ty-nav-back">
          <a href>
            <router-link to="/shangping">
              <div class="ar-left">
                <img src="/static/images/zuo-left.png" alt />
              </div>
            </router-link>
          </a>
        </div>
        <div class="ty-nax-wbox">
          <van-search placeholder="请输入搜索关键词" v-model="value" :key="Math.random()" />
        </div>
        <a href="javascript:;" class="ty-nav-search" :class="{on:showbegins}" @click="showbegins=true">
          <img src="/static/images/search-icon9.png" alt />
        </a>
      </div>
      <div class="ty-hot-pro">
        <img src="/static/images/guanggao.jpg" alt />
      </div>
    </div>
    <div class="TY-result">
      <ul class="productslist"  :class="{on:!showbegins}">
        <li class="advert" v-for="(ande,index) in poke" :key="index">
     
            <router-link :to="'/detailed/' + ande.ig">
              <div class="adev-img">
                <div class="img-occupied">
                  <img :src="ande.url" alt />
                </div>
              </div>

              <div class="adev-text">
                <p class="adev-name">
                  <span class="prost-lable">{{ande.ziying}}</span>
                  {{ande.P}}
                </p>
                <p class="info-label">
                  <span class="i-text">{{ande.ip}}</span>
                  <span class="i-text">{{ande.il}}</span>
                  <span class="i-text">{{ande.ul}}</span>
                </p>
                <div class="price-dev">
                  <p class="price-box">
                    <span class="price-txt">
                      <span class="price-num">
                        ￥
                        <strong>{{ande.num}}</strong>.00
                      </span>
                    </span>
                  </p>
                  <div class="product-label">
                    <p class="promottlit">{{ande.liju}}</p>
                    <p class="shop-num">
                      <span>{{ande.span}}</span>
                      <span>{{ande.span2}}</span>
                    </p>
                    <p class="shop-name">
                      <span>{{ande.span3}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
      
        </li>
      </ul>
    <ul class="productslist"  :class="{on:showbegins}">
        <li class="advertone" v-for="(ande,index) in poke" :key="index">
     
            <router-link :to="'/detailed/' + ande.ig">
              <div class="adev-imgpor">
                <div class="img-occupied">
                  <img :src="ande.url" alt />
                </div>
              </div>

              <div class="adev-textp">
                <p class="adev-name">
                  <span class="prost-lable">{{ande.ziying}}</span>
                  {{ande.P}}
                </p>
                <p class="info-label">
                  <span class="i-text">{{ande.ip}}</span>
                  <span class="i-text">{{ande.il}}</span>
                  <span class="i-text">{{ande.ul}}</span>
                </p>
                <div class="price-dev">
                  <p class="price-box">
                    <span class="price-txt">
                      <span class="price-num">
                        ￥
                        <strong>{{ande.num}}</strong>.00
                      </span>
                    </span>
                  </p>
                  <div class="product-label">
                    <p class="promottlit">{{ande.liju}}</p>
                    <p class="shop-num">
                      <span>{{ande.span}}</span>
                      <span>{{ande.span2}}</span>
                    </p>
                    <p class="shop-name">
                      <span>{{ande.span3}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
      
        </li>
      </ul>

    </div>
    <van-image
      width="100%"
      height="100%"
      style="margin-bottom: 45px;"
      fit="contain"
      src="https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/snlogo.png?from=mobile"
    />
  </div>
</template>

<script>
import all from "../../data/all.json";

// const { poke } = all.bijiben;

export default {
  data() {
    return {
      showbegins:false,
      poke: {},
      value: ""
    };
  },
  created() {
    this.poke = all[this.$route.params.id].poke;
    // console.log(this.poke)
  },
  methods: {
  },

  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>
<style scoped>
.lieshi{
  margin: 0px;
  padding:0px;
}
.hello {
  width: 100%;
  height: 200px;
  padding: 0px;
  margin: 0px;
  position: relative;
}
.ty-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 98;
  background: #fff;
  height: 2.76rem;
  font-size: 0.6rem;
  box-shadow: 0 1px 1px #dcdcdc;
}
.ty-nav-back {
  position: absolute;
  left: 0.1rem;
  top: 0;
  width: 2.48rem;
  height: 2.5rem;
  border: 0;
  transform: none;
}
.van-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.ty-nav-back a {
  position: absolute;
  top: 0;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
}
.ty-nax-wbox {
  position: absolute;
  top: 0.28rem;
  left: 2.6rem;
  width: 75%;
  height: auto;
  background: #eee;
  border-radius: 4px;
}
.van-search {
  float: left;
  width: 100%;
  padding: 0px;
}
.ty-nav-search {
  position: absolute;
  top: 0;
  right: 0;
  width: 13%;
  height: 2.76rem;
  /* background: red; */
}
.ty-nav-search img {
  height: 1.76rem;
  width: 1.76rem;
  position: absolute;
  top: 20%;
  left: 20%;
}
.ty-hot-pro {
  position: absolute;
  top: 45px;
  padding-bottom: 0.4rem;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.ty-hot-pro img {
  width: 100%;
  height: 100%;
}
.TY-result {
  /* position: absolute; */
  padding-bottom: 0.4rem;
  width: 96%;
  margin: 0 auto;
  overflow: hidden;
  /* background:red; */
}
ul,
ol,
li {
  list-style: none;
}
.productslist {
  overflow: hidden;
  display:none ;
  background-color: #fff;
} 
.lieshi .TY-result .productslist.on{
  display: block  ;
}

.advert {
  float: left;
  padding: 0.4rem;
  /* height: 110px; */
  width: 100%;
  background: #fff;
  overflow: hidden;
  margin-bottom: 1px;
  /* border: rgb(214, 209, 209) solid 0.5px; */
  position: relative;
}
.advertone{
      float: left;
    width: 50%;
    background: #fff;
    overflow: hidden;
    margin-bottom: 1px;
    position: relative;

}


a {
  color: #353d44;
  text-decoration: none;
}
.adev-img {
  position: relative;
  float: left;
  width: 6rem;
  height: 6rem;
  margin: 0 0.4rem 0 0;
}
.adev-imgpor {
    position: relative;
    float: left;
    width: 80%;
    height: auto;
}


.img-occupied {
   width: 100%;
  height: 100%;
  background: #ffffff;
  background-size: 90%;
}
.img-occupied img {
  width: 100%;
  height: 100%;
}
.adev-text {
  position: relative;
  width: auto;
  height: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}


.adev-textp{
    position: relative;
  width: 85%;
  height: 180px;
  padding-left:10px; 
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.adev-name {
  display: -webkit-box;
  overflow: hidden;
  height: 1.8rem;
  margin: -0.04rem 0 0.22rem;
  text-overflow: ellipsis;
  font-size: 0.52rem;
  line-height: 0.92rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.info-label {
  display: block;
  overflow: hidden;
  width: 100%;

  font-size: 12px;

  margin: -0.148rem 0 0.4rem;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price-dev {
  position: relative;
  padding-bottom: 0.4rem;
  padding-top: 0.08rem;
  overflow: hidden;
  min-height: 3.2rem;
}
.price-box {
  height: 15px;
  overflow: hidden;
  margin: 0px;
}
.price-txt {
  font-size: 12px;
  line-height: 0.84rem;
  color: #f60;
  overflow: hidden;
  height: auto;
  display: block;
}
.price-num {
  vertical-align: baseline;
  float: left;
  margin-right: 8px;
}

.product-label {
  height: auto;
  padding-bottom: 0.32rem;
  margin: 0.08rem 0 0 0;
  overflow: hidden;
}
.promottlit {
  background: #f60;
  display: inline-block;
  margin: 0 0.08rem 0 0;
  padding: 0 0.08rem;
  line-height: 0.78rem;
  height: 0.78rem;
  color: #ffffff;
  font-size: 0.36rem;
  /* overflow: hidden; */
  border-radius: 2px;
}
.shop-num {
  display: block;
  height: 0.87rem;
  line-height: 0.6rem;
  margin: 0.34rem 0 0 0;
}
.shop-num span {
  font-size: 12px;
  color: #999;
  margin: 0 0.48rem 0 0;
  font-weight: normal;
}
.shop-name {
  width:100%;
  color: #999;
  height: 1.56rem;
  line-height: 0.76rem;
  margin-top: 0.54rem;
  margin-bottom: 0px;
  overflow: hidden;
}
.shop-name span {
  width: 100%;
  font-weight: normal;
  max-width: 5.5rem;
  height: 1.56rem;
  line-height: 0.76rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 8px;
}
.prost-lable {
  display: inline-block;
  margin: 1px 0.1rem 0 0;
  padding: 1px 0.06rem 1px 0.06rem;
  font-size: 10px;
  line-height: 8px;
  border: 1px solid #f60;
  color: #f60;
  position: relative;
  top: 1px;
  border-radius: 2px;
}

.i-text {
  float: left;
  margin: 0px 5px 0px;
  /* padding: 0 0.06rem 0 0.12rem; */
  color: #999;
  font-size: 0.48rem;
  /* border-left: #999 solid 0.5px; */
}
.ar-left {
  width: 36px;
  height: 100%;
}
.ar-left img {
  position: absolute;
  top: 11px;
  width: 20px;
  height: 20px;
}
</style>
