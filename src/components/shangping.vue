  <template>
  <div id="hello">
    <div class="sou">
      <div class="spx">
        <a href="javascript:;">
          <div class="apps">
            <van-icon name="apps-o" />
            <p class="JON">分类</p>
          </div>
        </a>
      </div>
      <van-search placeholder="请输入搜索关键词" v-model="value" style="background: rebeccapurple" />

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

    <van-tree-select height="auto" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <!-- 热门推荐 -->
        <div v-if="activeIndex === 0">
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>热门推荐</p>
              </hgroup>
              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg2" :key="index">
                    <a href="javascript:;">
                      <!-- <router-view></router-view> -->
                      <router-link :to="'/mainContent/' + item.id">
                        <div class="wapfly">
                          <img :src="item.url" alt />
                        </div>
                        <p>{{item.p}}</p>
                      </router-link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 手机数码 -->
        <div v-if="activeIndex === 1">
          <!-- 热门大牌 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>热门大牌</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg3" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 手机通讯 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>手机通讯</p>
              </hgroup>
              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg4" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 运营商 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>运营商</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>
        <!-- 大家电 -->
        <div v-if="activeIndex === 2">
          <!-- 空调热销榜 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>空调热销榜</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg5" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 电视热销榜 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电视热销榜</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg6" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 洗衣机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>洗衣机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg7" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- s视听影音 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>视听影音</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg8" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- 电脑办公 -->
        <div v-if="activeIndex === 3">
          <!-- 电脑整机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电脑整机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg9" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 平板电脑 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>平板电脑</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg10" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 特色服务 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>特色服务</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg11" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- s视听影音 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>视听影音</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg8" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>

        <div v-if="activeIndex === 4">
          <!-- 油烟机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电脑整机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg12" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 热门推荐 -->
        <div v-if="activeIndex === 5">
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>热门推荐</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg2" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 手机数码 -->
        <div v-if="activeIndex === 6">
          <!-- 热门大牌 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>热门大牌</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg3" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 手机通讯 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>手机通讯</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg4" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 运营商 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>运营商</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- 大家电 -->
        <div v-if="activeIndex === 7">
          <!-- 空调热销榜 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>空调热销榜</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg5" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 电视热销榜 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电视热销榜</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg6" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 洗衣机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>洗衣机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg7" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- s视听影音 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>视听影音</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg8" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- 电脑办公 -->
        <div v-if="activeIndex === 8">
          <!-- 电脑整机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电脑整机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg9" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 平板电脑 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>平板电脑</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg10" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 特色服务 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>特色服务</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg11" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- s视听影音 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>视听影音</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg8" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;">
              <div class="posl">
                <van-image
                  width="96%"
                  height="100%"
                  fit="contain"
                  src="//image.suning.cn/uimg/asbs/ad/1497258282550_app_wap_search.jpg"
                />
              </div>
            </a>
          </div>
        </div>

        <div v-if="activeIndex === 9">
          <!-- 油烟机 -->
          <div class="list-ion">
            <div class="con_box">
              <hgroup class="module_title" showtype="1">
                <p>电脑整机</p>
              </hgroup>

              <div class="household_recommend">
                <ul>
                  <li v-for="(item,index) in msg12" :key="index">
                    <a href="javascript:;">
                      <div class="wapfly">
                        <img :src="item.url" alt />
                      </div>
                      <p>{{item.p}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

  <script scoped>
import all from "../data/all.json";

const { msg5, msg6, msg7, msg8 } = all.dajiadian;
const { msg, msg3, msg4 } = all.shoujishuma;
const { msg9, msg10, msg11 } = all.diannaobangong;
const { msg2 } = all.rementuijian;
const { msg12 } = all.chuweidadian;

export default {
  data() {
    return {
      activeIndex: 0,
      value: "",
      items: [
        { text: "热门推荐" },
        { text: "手机数码" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "厨卫大电" },
        { text: "热门推荐" },
        { text: "手机数码" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "厨卫大电" },
        { text: "电脑办公" },
        { text: "厨卫大电" },
        { text: "热门推荐" },
        { text: "手机数码" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "厨卫大电" }
      ],
      msg2,
      msg3,
      msg,
      msg4,
      msg5,
      msg6,
      msg7,
      msg8,
      msg9,
      msg10,
      msg11,
      msg12,

      activeKey: 0,

      list: [],
      loading: false,
      finished: false,
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
    // return false
    // this.login()
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 25) {
          this.finished = true;
        }
      }, 500);
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

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.a {
  color: #353d44;
  text-decoration: none;
}
#hello {
  width: 100%;
  background: #fff;
  height: 100%;

  /* margin-top: 1.76rem; */
}
.van-notice-bar {
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
}
.van-sidebar {
  /* width: 27%; */
  float: left;
  position: fixed;
  /* position: absolute; */
  height: 84%;
  overflow-y: scroll;
  z-index: 999;
  top: 54px;
}
.van-tree-select__content {
  box-sizing: border-box;
  /* margin: 0 0 0 3.44rem; */
  /* padding: 0.4rem; */
  /* overflow: hidden; */
  /* width: 70%; */
  height: 760px;
  float: right;
}
.list-ion {
  width: 70%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* overflow: auto; */
  float: right;
  position: relative;

  top: 58px;
}
.con_box {
  width: 100%;
}
.module_title {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 1.2rem auto 0.8rem auto;
}
.module_title p {
  background: #fff;
  padding: 0 0.2rem 0 0;
  display: inline-block;
  position: relative;
  height: 12px;
  line-height: 12px;
  color: red;
  font-size: 12px;
  vertical-align: middle;
}
.household_recommend {
  width: 100%;
  overflow: hidden;
}
.household_recommend ul {
  width: 100%;
  overflow: hidden;
  margin-top: -0.6rem;
}
.household_recommend ul li {
  float: left;
  width: 33%;
  /* height: 95px; */
  margin: 0.6rem 0 0 0;
}
.wapfly {
  width: 70px;
  height: 70px;
  margin: 0 auto;
}

.wapfly img {
  width: 100%;
  height: 100%;
  /* margin: 0 0.6rem 0.2rem 0.6rem; */
  position: relative;
  margin: 0px;
}
.household_recommend ul li a p {
  display: block;
  width: 100%;
  white-space: nowrap;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  margin: 0px;
  font-weight: normal;
}
.posl {
  margin-bottom: 50px;
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
  color: #000;
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
  top: 4px;
  position: absolute;
  right: -4px;
  width: 10%;
  float: left;
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
  top: 25px;
  right: 10px;
  font-size: 10px;
  color: black;
  margin: 0px;
}
</style>
