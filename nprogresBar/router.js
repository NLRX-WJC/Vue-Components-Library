import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(Router)

// 个性化配置进度条外观
NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

const router = new Router({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/login', name: 'login', component: Login },
    ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path == "/login") {
        next();
        NProgress.done()
    } else {
        isLogin ? next() : next("/login");
        NProgress.done()
    }
})
router.afterEach(() => {
    NProgress.done()
})
export default router;