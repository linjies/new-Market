<template>
  <div>
    <div class="sou">
      <div class="spx">
        <a href="javascript:">
          <router-link to="/shangping">
            <div class="apps">
              <van-icon name="apps-o" /><p class="JON">分类</p> </div></router-link> </a>
      </div>
      <van-search placeholder="请输入搜索关键词" v-model="value" :key="Math.random()" />
      <div class="sup">
        <a href="javascript:;">
          <div class="apps" @click="login">
            <van-icon name="friends-o" />
            <p class="jso" v-if="props">登录</p>
            <p class="jso" v-else>{{psmi}}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- 轮播 -->

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image width="100%" height="100%" src="/static/images/lunbo1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="100%" src="/static/images/lunbo2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="100%" src="/static/images/lunbo3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="100%" src="/static/images/lunbo4.png" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" height="100%" src="/static/images/lunbo4.png" />
      </van-swipe-item>
    </van-swipe>

    <!-- 特惠 -->
    <div class="enter-wrapper">
      <ul class="flxx">
        <li>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/1.png" />
            </div>
            <div class="flor">限时抢购</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/2.png" alt />
            </div>
            <div class="flor">天宇超市</div>
          </a>

          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/3.png" alt />
            </div>
            <div class="flor">天宇拼购</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/4.png" alt />
            </div>
            <div class="flor">爆款手机</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/5.png" alt />
            </div>
            <div class="flor">天宇家电</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/6.png" alt />
            </div>
            <div class="flor">免费好物</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/7.png" alt />
            </div>
            <div class="flor">赚钱</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/8.png" alt />
            </div>
            <div class="flor">签到有礼</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/9.png" alt />
            </div>
            <div class="flor">领券中心</div>
          </a>
          <a href="javascript:;">
            <div class="li_img">
              <img src="/static/images/10.png" alt />
            </div>
            <div class="flor">更多频道</div>
          </a>
        </li>
      </ul>
    </div>

    <!-- <div class="hor-view">
      <van-image
        width="33.33333%"
        height="100"
        src="https://image1.suning.cn/uimg/cms/img/157294031183773165.png?from=mobile"
      />
      <van-image
        width="33.3333%"
        height="100"
        src="https://image2.suning.cn/uimg/cms/img/157294038147114063.png?from=mobile"
      />
      <van-image
        width="33.333%"
        height="100"
        src="https://image1.suning.cn/uimg/cms/img/157294046616212064.png?from=mobile"
      />
      <van-image
        width="33.333%"
        height="100"
        src="https://image1.suning.cn/uimg/cms/img/157300485644404617.gif"
      />
      <van-image
        width="33.333%"
        height="100"
        src="https://image2.suning.cn/uimg/cms/img/157300486214715426.gif"
      />
      <van-image
        width="33.333%"
        height="100"
        src="https://image1.suning.cn/uimg/cms/img/157300486896337360.gif"
      />
    </div> -->

    <div class="new-img">
      <a href="javascript:;">
        <div class="new-left">
          <img src="/static/images/new-img01.png" alt />
        </div>
      </a>
      <a href="javascript:;">
        <div class="new-right">
          <img src="/static/images/new-img02.gif" alt />
        </div>
      </a>
      <a href="javascript:;">
        <div class="new-right">
          <img src="/static/images/new-img03.gif" alt />
        </div>
      </a>
    </div>

    <!-- 特惠专区 -->

    <div class="kw-radio">
      <div class="zsq-area" style="margin-left:10px;">
        <a href="javascript:;">
          <div class="tleple">
            限时抢购
            <van-count-down :time="time" />
          </div>
          <p class="diste">潮流好物限时抢</p>

          <ul>
            <li class="zsq-area-left">
              <div class="props">
                <img src="/static/images/tehui1.jpg" alt />
                <p class="tag-pras">￥79</p>
              </div>
            </li>

            <li class="zsq-area-left">
              <div class="props">
                <img src="/static/images/tehui2.jpg" alt />
                <p class="tag-pras">￥11.2</p>
              </div>
            </li>
          </ul>
        </a>
      </div>

      <div class="bing-pos">
        <a href="javascript:;">
          <div class="tleple">
            天宇国际
            <!-- <van-count-down :time="time" /> -->
          </div>
          <p class="diste">精选全球好物</p>
        </a>
        <a href="javascript:;" class="trop">
          <div class="space">
            <img src="/static/images/tehui3.png" alt />
          </div>
          <p>假一赔十</p>
        </a>

        <a href="javascript:;" class="trop-right">
          <div class="space">
            <img src="/static/images/tehui4.jpg" alt />
          </div>
          <p>每日抽奖</p>
        </a>
        <div></div>
      </div>
    </div>
    <div class="kw-radio">
      <div class="bing-pos" style="margin-left:10px;">
        <a href="javascript:;">
          <div class="tleple">
            天宇拼购
            <!-- <van-count-down :time="time" /> -->
          </div>
          <p class="diste">2个人拼更优惠 全场包邮</p>
        </a>
        <a href="javascript:;" class="trop">
          <div class="space">
            <img src="/static/images/tehui5.jpg" alt />
          </div>
          <p>2人拼188</p>
        </a>

        <a href="javascript:;" class="trop-right">
          <div class="space">
            <img src="/static/images/tehui6.jpg" alt />
          </div>
          <p>2人拼158</p>
        </a>
        <div></div>
      </div>

      <div class="bing-pos">
        <a href="javascript:;">
          <div class="tleple">
            大聚惠
            <!-- <van-count-down :time="time" /> -->
          </div>
          <p class="diste">好货一元秒</p>
        </a>
        <a href="javascript:;" class="trop">
          <div class="space">
            <img src="/static/images/tehui7.jpg" />
          </div>
          <p>清风</p>
        </a>

        <a href="javascript:;" class="trop-right">
          <div class="space">
            <img src="/static/images/tehui8.jpg" alt />
          </div>
          <p>小米</p>
        </a>
        <div></div>
      </div>
    </div>

    <!-- 天宇头条 -->
    <div class="per_content">
      <!-- 天宇头条-->
      <div class="home-box">
        <div style="background: #fdfbde">
          <div class="marquee">
            <div class="marquee_box">
              <h2>天宇头条</h2>
              <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in announcementArr" :key="index">
                  <i>热门</i>
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--领劵  -->
    <div class="Ty-laimg">
      <img src="/static/images/lingjuan1.gif" alt />
      <div class="awko">
        <img src="/static/images/lingjuan3.jpg" alt />
      </div>
    </div>
    <div class="hor-view">
      <van-image width="33%" height="100" src="/static/images/lingjuan2.gif" />
      <van-image width="33%" height="100" src="/static/images/lingjuan4.gif" />
      <van-image width="33%" height="100" src="/static/images/lingjuan5.gif" />
    </div>

    <!-- 五折 爆款抢购 -->
    <div class="new-dack">
      <div class="fp-index1">
        <a href="javascript:;" class="click-are">
          <img src="https://image1.suning.cn/uimg/cms/img/157336844713203377.png?from=mobile" alt />
          <p class="title">冰箱洗衣机</p>
          <p class="desc">爆款5折抢</p>
        </a>
        <a href="javascript:;" class="lopk">
          <img src="/static/images/qianggou1.png" alt />
        </a>
      </div>
      <div class="fp-index2">
        <a href="javascript:;">
          <img
            class="fpximg"
            src="https://image2.suning.cn/uimg/cms/img/157336849601513942.png?from=mobile"
            alt
          />
          <p class="title">休闲零食</p>
          <p class="desc">满69打五折</p>
        </a>
        <a href="javascript:;" class="hocmg">
          <img src="/static/images/qianggou2.png" alt />
        </a>
      </div>
      <div class="fp-index2">
        <a href="javascript:;">
          <img
            class="fpximg"
            src="https://image2.suning.cn/uimg/cms/img/157336849601513942.png?from=mobile"
            alt
          />
          <p class="title">家纺鞋包</p>
          <p class="desc">限时一元抢</p>
        </a>
        <a href="javascript:;" class="hocmg">
          <img src="/static/images/qianggou3.png" alt />
        </a>
      </div>
      <div class="fp-index1">
        <a href="javascript:;" class="click-are">
          <img src="https://image3.suning.cn/uimg/cms/img/157336858649219356.png?from=mobile" alt />
          <p class="title">品质美酒</p>
          <p class="desc">满399减100</p>
        </a>
        <a href="javascript:;" class="lopk2">
          <img src="/static/images/qianggou4.png" alt />
        </a>
      </div>

      <div class="fp-index1">
        <a href="javascript:;" class="click-are">
          <img src="https://image1.suning.cn/uimg/cms/img/157336844713203377.png?from=mobile" alt />
          <p class="title">天宇生鲜</p>
          <p class="desc">每299减150</p>
        </a>
        <a href="javascript:;" class="lopk">
          <img src="/static/images/qianggou5.png" alt />
        </a>
      </div>
      <div class="fp-index2">
        <a href="javascript:;">
          <img
            class="fpximg"
            src="https://image2.suning.cn/uimg/cms/img/157336849601513942.png?from=mobile"
            alt
          />
          <p class="title">天宇国际</p>
          <p class="desc">满</p>
        </a>
        <a href="javascript:;" class="hocmg">
          <img src="/static/images/qianggou6.png" alt />
        </a>
      </div>
      <div class="fp-index2">
        <a href="javascript:;">
          <img
            class="fpximg"
            src="https://image2.suning.cn/uimg/cms/img/157336849601513942.png?from=mobile"
            alt
          />
          <p class="title">智能家居日</p>
          <p class="desc">2件75折</p>
        </a>
        <a href="javascript:;" class="hocmg">
          <img src="/static/images/qianggou7.png" alt />
        </a>
      </div>
      <div class="fp-index1">
        <a href="javascript:;" class="click-are">
          <img src="https://image3.suning.cn/uimg/cms/img/157336858649219356.png?from=mobile" alt />
          <p class="title">时尚服饰</p>
          <p class="desc">满399减200</p>
        </a>
        <a href="javascript:;" class="lopk2">
          <img src="/static/images/qianggou8.png" alt />
        </a>
      </div>
    </div>

    <!-- 推荐榜单 -->
    <div class="new-bd">
      <h2>推荐榜单</h2>

      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="/static/images/tuijian01.png" />

          <p class="item_p">
            人气智能电视榜
            <br />本周趋势上升92%
          </p>
        </van-grid-item>
        <van-grid-item>
          <van-image src="/static/images/tuijian02.png" />
          <p class="item_p">
            人气智能电视榜
            <br />本周趋势上升92%
          </p>
        </van-grid-item>
        <van-grid-item>
          <van-image src="/static/images/tuijian03.png" />
          <p class="item_p">
            人气智能电视榜
            <br />本周趋势上升92%
          </p>
        </van-grid-item>
      </van-grid>

      <van-grid :border="false" :column-num="2">
        <van-grid-item class="new-bd-item">
          <div class="first-text">
            <span class="line-clamp1">学习娱乐乐器榜</span>
            <span class="two-name">人气榜</span>
            <br />
          </div>
          <p class="fTitle">今日热销爆款</p>
          <a href="javascript:;" class="img-wrapper">
            <img src="/static/images/tuijian04.png" alt />
          </a>
          <a href="javascript:;" class="right-wrapper">
            <img src="/static/images/tuijian05.png" alt />
          </a>
        </van-grid-item>

        <van-grid-item class="new-bd-item">
          <div class="first-text">
            <span class="line-clamp1">人气智能电视榜</span>
            <span class="two-name">人气榜</span>
            <br />
          </div>
          <p class="fTitle">卖爆22.9万件</p>
          <a href="javascript:;" class="img-wrapper">
            <img src="/static/images/tuijian06.png" alt />
          </a>

          <a href="javascript:;" class="right-wrapper">
            <img src="/static/images/tuijian07.png" alt />
          </a>
        </van-grid-item>

        <van-grid-item class="new-bd-item">
          <div class="first-text">
            <span class="line-clamp1">畅销家用空调榜</span>
            <span class="two-name">人气榜</span>
            <br />
          </div>
          <p class="fTitle">卖爆23.4万件</p>
          <a href="javascript:;" class="img-wrapper">
            <img src="/static/images/tuijian08.png" alt />
          </a>
          <a href="javascript:;" class="right-wrapper">
            <img src="/static/images/tuijian09.png" alt />
          </a>
        </van-grid-item>

        <van-grid-item class="new-bd-item">
          <div class="first-text">
            <span class="line-clamp1">爽身松花粉榜</span>
            <span class="two-name">人气榜</span>
            <br />
          </div>
          <p class="fTitle">卖爆1292件</p>
          <a href="javascript:;" class="img-wrapper">
            <img src="/static/images/tuijian10.png" alt />
          </a>
          <a href="javascript:;" class="right-wrapper">
            <img src="/static/images/tuijian11.png" alt />
          </a>
        </van-grid-item>
      </van-grid>
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
            <div v-for="(item,index) in mad" :key="index" class="normal-pro wloop">
              <router-link :to="'/detailed/' + item.ig">
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
              </router-link>
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

            <!-- <div v-for="(u,i) in mad3" :key="i" class="normal-pro wloop">
              <a href="javascript:;">
                <div class="pro_image">
                  <img :src="u.url" alt />
                </div>
              </a>
              <p class="line-clamp-2">{{u.p}}</p>
              <p class="cuxiao-tag">
                <span class="guess_zyicon">{{u.span}}</span>
                <span class="cx-text">{{u.span2}}</span>
              </p>
              <div class="pro_price">
                <div class="real_price">
                  <span class="flg">￥{in}}</span>
                  <span class="pre_price">{{u.span3}}</span>
                  <span class="price_comments">{{u.span4}}</span>
                </div>
              </div>
            </div>-->
          </ul>

          <!-- 右边数据 -->
          <ul class="left_list">
            <!-- <div class="normal-pro wloop">
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
            </div>-->

            <div v-for="(item,index) in mad2" :key="index" class="normal-pro wloop">
              <router-link :to="'/detailed/' + item.ig">
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
              </router-link>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <van-image v-if="btnFlag" @click="backTop" class="go-top" src="/static/images/timg.jpg" />

    <van-image
      width="100%"
      height="100%"
      style="margin-bottom: 45px;"
      fit="contain"
      src="https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/snlogo.png?from=mobile"
    />
  </div>
</template>

<script >
import mad from "../data/index.json";
import mad2 from "../data/index2.json";
import mad3 from "../data/index3.json";

export default {
  data() {
    return {
      value: "",
      lop: false,
      pop: false,
      mad,
      mad2,
      mad3,
      show: false,
      active: 0,
      time: 2 * 60 * 60 * 1000,
      isLoading: false,
      swiperOption: {
        direction: "vertical"
      },
      announcementArr: [],
      animate: false,
      btnFlag: false,
      iq: "",
      props: true
    };
  },

  created() {
    if (window.localStorage.phoname) {
      let use = "我的";
      this.props = false;
      this.psmi = use;
    } else if (window.localStorage.phone) {
      let use = "我的";
      this.props = false;
      this.psmi = use;
    }

    // this.login()
  },

  mounted() {
    // this.login();
    this.addAnnouncement();
    setInterval(this.showMarquee, 2000);
    window.addEventListener("scroll", this.scrollToTop);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    showPopup() {
      this.show = true;
    },

    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    addAnnouncement: function() {
      this.announcementArr = [
        "买冰箱可别光顾看性能！这个标识需看好",
        "怎么挑选合适的冰箱？教你三步巧挑冰箱",
        "冰箱有异味别烦恼，几个小妙招用起来",
        "一次性的小物品，简单省事让日子变得舒心起来"
      ];
    },
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.announcementArr.push(this.announcementArr[0]);
        this.announcementArr.shift();
        this.animate = false;
      }, 1000);
    },
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 80) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    login() {
      if (window.localStorage.phoname) {
        let use = "我的";
        this.props = false;
        this.psmi = use;
      } else if (window.localStorage.phone) {
        let use = "我的";
        this.props = false;
        this.psmi = use;
      } else {
        this.props = false;
        this.$router.push({ name: "logo" });
      }
    }
  }
};
</script>

<style scoped>
.van-grid {
  width: 100%;
  height: auto;
  margin: auto;
}
#app {
  height: auto;
  /* background: rgb(110, 3, 230); */
}
.van-swipe-item {
  width: 100%;
}
.van-swipe__track {
  height: 200px;
}
.van-swipe img {
  width: 100%;
  height: 100%;
}
.nva {
  width: 100%;
  height: 200px;
}
.enter-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 150px;
  background-image: url("https://image3.suning.cn/uimg/cms/img/157335422589362874.jpg");
  background-size: 15rem 6.4rem;
}
.flxx {
  width: 100%;
  height: 5.6rem;
}
.flxx li {
  position: relative;
  float: left;
  width: 100%;
  height: 5.68rem;
}
.flxx li a {
  float: left;
  width: 20%;
  height: auto;
  text-align: center;
}
.li_img {
  width: 2.68rem;
  height: 2.68rem;
  margin: 0.48rem auto 0;
  background: 0;
}
.li_img img {
  width: 100%;
  height: 100%;
}
.flor {
  line-height: 18px;
  width: 3rem;
  height: 20px;
  overflow: hidden;
  font-size: 0.44rem;
  margin-top: 0.1rem;
  color: #000;
  margin: auto;
}
.hor-view {
  width: 100%;
  height: 6.5rem;
  margin: auto;
  background: red;
}
.new-img {
  display: flex;
  width: 100%;
  height: 6.38rem;
  background: red;
}
.new-img img {
  width: 100%;
  height: 100%;
}
.new-left {
  display: block;
  width: 100%;
  height: 5.68rem;
}
.new-right {
  display: block;
  width: 100%;
  height: 5.68rem;
}
.nva img {
  width: 100%;
  height: 100%;
}
.van-hairline--top {
  height: 100%;
  overflow: hidden;
  /* padding: 10px; */
  /* border:  5px solid red; */
  /* border-radius: 20px; */
  width: 100%;
}
.van-grid-item {
  height: 100%;
  width: 100%;
  padding: 9px;
}
.van-grid-item p {
  margin: 0px;
  font-size: 10px;
}
.van-dialog__content {
  width: 500px;
  height: 200px;
}
.van-dialog__content img {
  width: 100%;
  height: 100%;
}
.van-dialog__header {
  font-size: 12px;
}
.van-image {
  float: left;
}
.van-grid >>> .van-grid-item__content--center {
  padding: 0px;
}
.fix {
  float: left;
  width: 50%;
  height: 120px;
}

.zsq-area {
  position: relative;
  width: 47%;
  height: 98%;
  background: #fff;
  border: rgb(199, 195, 195) solid 1px;
  border-radius: 20px;
  float: left;
  /* margin-left: 7px; */
}
.tleple {
  display: flex;
  width: 95%;
  height: 1.16rem;
  overflow: hidden;
  justify-content: start;
  align-items: flex-end;
  color: #000;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
}
.zsq-area ul {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0.1rem 0 0 0;
  display: -webkit-flex;
  display: flex;
  margin-left: 0.56rem;
}
.zsq-area-left {
  margin-right: 1.1rem;
  width: 4.4rem;
}
.bing-pos {
  border: rgb(199, 195, 195) solid 1px;
  border-radius: 20px;
  position: relative;
  background: #fff;
  width: 47%;
  height: 98%;
  float: left;
  margin-left: 6px;
}
.van-count-down {
  float: left;
  margin-left: 10px;
  color: red;
}
.tag-pras {
  text-align: center;
  color: #f50;
  font-size: 0.44rem;
  line-height: 1.56rem;
  height: 1.56rem;
  margin: 0px;
}
.kw-radio {
  background: red;
  width: 100%;
  height: 10.16rem;
  /* margin-left: 10px;
  margin-right: 10px; */
  overflow: hidden;
}
.des {
  width: 60%;
  color: darkgray;
  float: left;
  font-size: 15px;
  margin: 0px;
}
.img-desc {
  margin: 0px;
  -ms-flex-line-pack: center;
  font-size: 12px;
  height: 20px;
  text-align: center;
  background-size: 3rem 1.08rem;
}
.meidia {
  width: 12.32rem;
  height: 1.32rem;
  font-size: 10px;
  overflow: hidden;
}
.for {
  width: 100%;
  height: 100%;
}
.app {
  /* width: 12.32rem; */
  height: 1.32rem;
  overflow: hidden;
}
.list-wrapper {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.per_content {
  width: 100%;
  /* height: 25px; */
  background: white;
  position: relative;
}

.per {
  height: 75px;
  position: absolute;
  top: 0;
  transition: all 2s;
}
.per li {
  font-size: 12px;
  height: 33px;
}
.per_content ul {
  overflow: hidden;
  width: 70%;
  /* float: right; */
  margin-left: 98px;
}
.per_content ul li {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.per_content h2 {
  width: 26%;
  float: left;
  margin: 0px;
  font-size: 20px;
}
.bg_opn1 {
  position: relative;
  height: 100%;
  width: 100%;
}
.images_poro {
  position: absolute;
  width: 60px;
  top: 1.85rem;
  left: 3.25rem;
  display: block;
  transition: all 0.8s linear;
  background: 0;
}
.dacu_hc {
  width: 100%;
  height: 100%;
  background: rebeccapurple;
}
.dacu_hc .van-grid {
  position: relative;
}

.dacu_hc .van-grid .van-grid-item {
  padding: 0px;
  display: block;
  width: 100%;
  height: 100%;
}
.done_cal {
  position: absolute;
  top: 0.48rem;
  width: 80%;
  height: 54%;
}
.done_cal .van-image {
  display: block;
  width: 100%;
  height: auto;
  background: 0;
}
.tetil {
  position: absolute;
  top: 94px;
  width: 4.28rem;
  height: 1.62rem;
  font-size: 0.52rem;
  color: #fff;
  line-height: 0.62rem;
  text-align: center;
}
.pose {
  position: absolute;
  top: 110px;
  width: 4.28rem;
  height: 0.54rem;
  /* font-size: 0.44rem; */
  color: #fff;
  line-height: 0.54rem;
  text-align: center;
}
.props {
  width: 4.4rem;
  height: 4.4rem;
}
.props img {
  width: 100%;
  height: 100%;
}
.web-list {
  margin: 0;
  padding: 0;
}
.title-text h2 {
  color: white;
  font-size: 20px;
  background: rebeccapurple;
  margin: 0px;
}
.title-text {
  width: 100%;
  height: 100%;
}
.web-list >>> .van-grid-item__content {
  position: relative;
}

.property {
  position: absolute;
  top: 148px;
  color: white;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}
.van-swipe-item {
  width: 100%;
  height: 100%;
}
.home-box {
  width: 100%;
  height: auto;
}
.marquee {
  width: 100%;
  height: 30px;
  align-items: center;
  color: #3a3a3a;
  background-color: #fdfbde;
  display: flex;
  box-sizing: border-box;
}
.diste {
  font-size: 0.48rem;
  color: #999;
  overflow: hidden;
  margin: 0.08rem 0 0 0.48rem;
  width: 6rem;
  height: 1.6rem;
  /* line-height: 1.6rem; */
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.08rem;
}
.marquee_box {
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.marquee_box h2 {
  width: 30%;
  float: left;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.marquee_top {
  transition: all 0.5s;
  margin-top: -30px;
}

.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  padding-left: 20px;
}
.marquee_list li i {
  background: #fc0;
  border-radius: 0.24rem;
  font-size: 0.36rem;
  line-height: 0.48rem;
  padding: 0 0.2rem;
  height: 0.48rem;
  color: #222;
  margin-right: 0.24rem;
  word-break: keep-all;
}
.marquee_list li span {
  padding: 0 2px;
  color: #f1543a;
}

.bd-one-item {
  position: relative;
  width: 100%;
  height: 200px;
}
.Ty-laimg {
  display: block;
  position: relative;
  width: 100%;
  background: red;
  height: 6.6rem;
  margin: 0 auto;
}
.Ty-laimg img {
  width: 100%;
  height: 100%;
}
.awko {
  position: absolute;
  width: 3.46rem;
  height: 3.46rem;
  top: 1.8rem;
  left: 2.58rem;
}

.hc-fix {
  width: 100%;
  margin: 0px;
  padding: 0;
  height: 321px;
  background: red;
}
.hc-index1 {
  position: relative;
  float: left;
  width: 104px;
  height: 160px;
  /* margin-right: 20px; */
}

.title {
  position: absolute;
  /* overflow: hidden; */
  top: 7.95rem;

  height: 0.82rem;
  font-size: 0.52rem;
  color: #fff;
  line-height: 0.62rem;
  text-align: center;
  width: 100%;
  /* left: 1.5rem; */
  margin: 0;
}
.desc {
  position: absolute;
  top: 8.85rem;
  width: 100%;
  overflow: hidden;
  height: 1.24rem;
  font-size: 0.44rem;
  color: #fff;
  /* line-height: 0.54rem; */
  text-align: center;
  margin: 0%;
}
.hocmg {
  position: absolute;
  top: 1.48rem;
  width: 70%;
  height: 44%;
  left: 0.68rem;
}
.hocmg img {
  width: 100%;
  height: 100%;
}
.hcimg {
  position: absolute;
  top: 1.48rem;
  width: 4.8rem;
  height: 4.8rem;
  left: 1.92rem;
}
.hcimg img {
  width: 100%;
  height: 100%;
}
.new-bd {
  /* padding-bottom: 0.26rem; */
}
.new-bd h2 {
  margin: 0;
  color: #333;
}
.item_p {
  background: url("https://image2.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile");
  width: 100%;
  height: 2.86rem;
  border: #cf8d11 solid 1px;
  border-radius: 00px 0px 10px 10px;
  text-align: center;
  color: white;
}
.first-text {
  width: 170px;
  /* padding: 0px; */
  position: absolute;
  top: 0;
  left: 7px;
  display: flex;
  height: 1.64rem;
}
.new-bd-item {
  position: relative;
  box-sizing: border-box;
  width: 7rem;
  height: 8.8rem;
  background: red;
  overflow: hidden;
  /* border-radius: 20px; */
  /* border: #999 solid 1px; */
  padding: 0.42rem 0.36rem 0.32rem;
}

.new-bd .new-bd-item >>> .van-grid-item__content--center {
  border-radius: 12px;
  /* background: #999; */
}
.line-clamp1 {
  top: 8px;
  position: absolute;
  font-size: 12px;
  line-height: 25px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.trop {
  position: absolute;
  width: 45%;
  height: 4.2rem;
  top: 2.96rem;
  left: 0.48rem;
  float: left;
}
.trop-right {
  left: 6.2rem;
  position: absolute;
  width: 40%;
  height: 4.2rem;
  top: 2.96rem;
}

.space {
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  background: 0;
}
.space img {
  width: 100%;
  height: 100%;
}
.trop p {
  text-align: center;
  width: 6rem;
  height: 1.08rem;
  position: absolute;
  bottom: -2.14rem;
  left: 0rem;
  color: #000;
  margin: 0 auto;
  padding: 0px;
  font-size: 0.4rem;
}
.trop-right p {
  text-align: center;
  width: 100%;
  height: 1.08rem;
  position: absolute;
  bottom: -2.14rem;
  left: 0rem;
  color: #000;
  margin: 0px auto;
  padding: 0px;
  font-size: 0.4rem;
}
.two-name {
  position: absolute;
  top: 7px;
  right: 32px;
  display: block;
  background: #f9f5ee;
  border-radius: 1.56rem;
  height: 1.56rem;
  line-height: 1.56rem;
  font-size: 0.44rem;
  color: #ab813a;
  margin-left: 0.24rem;
  padding: 0 0.24rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.img-wrapper {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 2.86rem;
  left: 0.48rem;
  overflow: hidden;
}
.img-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
  background: 0;
}
.right-wrapper {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 2.86rem;
  left: 5.72rem;
  overflow: hidden;
}
.right-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
  background: 0;
}
.fTitle {
  display: block;
  width: 6.4rem;
  height: 1.6rem;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  top: 27px;
  left: 10px;
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
  background: red;
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
  position: relative;
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
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
  /* width: 40px; */
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
  top: 5px;
  position: absolute;
  right: 31px;
  /* width: 20px; */
  float: right;

  font-size: 24px;
  color: #000;
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
  top: 28px;
  right: 11px;
  font-size: 10px;
  color: black;
  margin: 0px;
  width: 24px;
}
</style>
