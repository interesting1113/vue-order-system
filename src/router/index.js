import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Menu from '../components/menu/Menu.vue'
import Admin from '../components/admin/Admin.vue'
import About from '../components/about/About.vue'
import Login from '../components/login/Login.vue'
import Register from '../components/register/Register.vue'

//二级路由
import Contact from '../components/about/sub/Contact.vue'
import Delivery from '../components/about/sub/Delivery.vue'
import History from '../components/about/sub/History.vue'
import Guide from '../components/about/sub/Guide.vue'


//三级路由
import Phone from '../components/about/contact/Phone.vue'
import PersonName from '../components/about/contact/PersonName.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect:'/home'},
    { path: '/home', name: 'Home', components: {
      default: Home,
      'guide': Guide,
      'delivery': Delivery,
      'history': History
    }  },
    { path: '/menu', name: 'Menu', component: Menu },
    { path: '/admin', name: 'Admin', component: Admin},
    { path: '/about', name: 'About', redirect: '/contact', component: About, 
      children: [
        {path: '/contact', name: 'Contact',redirect: '/name', component: Contact,
          children: [
            {path: '/phone', name: 'PhoneNumber', component: Phone},
            {path: '/name', name: 'PersonName', component: PersonName},
          ]
        },
        {path: '/history', name: 'History',component: History},
        {path: '/guide', name: 'Guide',component: Guide},
        {path: '/delivery', name: 'Delivery',component: Delivery}
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '*', redirect:'/home' }

  ],
  scrollBehavior(to, from, savedPosition) {
    //return { x: 0, y: 100 };
    //return { selector: '.btn'}
    if(savedPosition) {
      return savedPosition;
    }else  {
      return { x: 0, y: 0};
    }
  }
})
//全局
// router.beforeEach((to, from, next) => {
//   // alert('还没有登陆，请先登录');
//   // next();
//   //判断store。getters.isLogin === false
//   if(to.path === '/login' || to.path === '/register') {
//     next();
//   }else {
//     alert('还没有登陆，请先登录');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to, from) => {
//   alert('after each');
// })

export default router
