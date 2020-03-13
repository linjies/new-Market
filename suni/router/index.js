import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'
import guwuche from '../components/guwuche'
import shangping from '../components/shangping'
import geren from '../components/geren'
import shouban from '../components/shouban'
// import Hello from '../components/HelloWorld'
import classification from '../components/tabbar/classification'
import detailed from '../components/tabbar/detailed'
import si from '../components/04'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/shangping',
            component: shangping
        },
        {
            path: '/geren',
            component: geren
        },
        {
            path: '/guwuche',
            component: guwuche
        },
        {
            path: '/shouban',
            components: shouban
        }, {
            path: '/mainContent/:id',
            component: classification
        }, {
            path: '/detailed/:ig',
            component: detailed
        }, {
            path: '/si',
            component: si
        }
    ]
})