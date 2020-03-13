import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import guwuche from '../components/guwuche'
import shangping from '../components/shangping'

// import Hello from '../components/HelloWorld'
import classification from '../components/tabbar/classification'
import detailed from '../components/tabbar/detailed'
import si from '../components/04'
import logo from '../components/logo/logo'
import register from '../components/logo/register'
import Cancellation from '../components/logo/Cancellation'
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
            path: '/guwuche',
            component: guwuche
        },
        {
            path: '/mainContent/:id',
            component: classification
        }, {
            path: '/detailed/:ig',
            component: detailed
        }, {
            path: '/si',
            name: 'si',
            component: si
        },
        {
            path: '/register',
            component: register
        },

        {
            path: '/logo',
            name: 'logo',
            component: logo
        },
        {
         path:'/Cancellation',
         component:Cancellation
        }
    ]
})