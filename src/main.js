// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, Cell, CellGroup, RadioGroup, Sku, Radio, Tag, cell, Checkbox, CheckboxGroup, Notify, Popup, Swipe, SwipeItem, ActionSheet, NoticeBar, Rate, Card, Lazyload, Tabbar, TabbarItem, Toast, Dialog, Field, Grid, GridItem, TreeSelect, Sidebar, SidebarItem, AddressEdit, Area, NumberKeyboard, PasswordInput, List, Image, Search, PullRefresh, CountDown, Icon } from 'vant'

Vue.use(cell).use(Popup).use(Image).use(Search).use(PullRefresh).use(CountDown)
Vue.use(RadioGroup).use(Icon).use(Checkbox).use(CheckboxGroup).use(Notify)
Vue.use(Radio).use(Sku)
Vue.use(ActionSheet)
Vue.use(Button).use(Tag)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Cell).use(CellGroup)
Vue.use(Toast)
Vue.use(NoticeBar)
Vue.use(Rate)
Vue.use(PasswordInput).use(List)
Vue.use(Card).use(Area).use(NumberKeyboard)
Vue.use(Lazyload).use(SidebarItem).use(Sidebar).use(AddressEdit)
Vue.use(Dialog).use(Field).use(Grid).use(GridItem).use(TreeSelect)
Vue.use(Tabbar).use(TabbarItem)
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})