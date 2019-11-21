# 1.前言

在平常浏览网页时，我们会注意到在有的网站中，当点击页面中的链接进行路由跳转时，页面顶部会有一个进度条，用来标示页面跳转的进度（如下图所示）。虽然实际用处不大，但是对用户来说，有个进度条会大大减轻用户的等待压力，提升用户体验。本篇文章就来教你如何在Vue项目中实现这样的进度条。

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181223015601960-1288993685.gif)

# 2.安装Nprogress

虽然我们也可以自己手动实现这样的功能，但是，`nprogress.js`已经帮我们把进度条的样式呀，功能呀都已经封装的很好了，既然有现成的轮子，我们就直接使用轮子就好啦！

```shell
npm install nprogress -S
```

# 3.在router.js中引入Nprogress

由于我们需要将`Nprogress`绑定在路由钩子上，所以我们直接在路由文件`router.js`中引入`Nprogress`。

```javascript
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'// nprogress样式文件
```

# 4.绑定路由钩子

我们想要的效果是：当路由开始跳转时加载进度条，当路由跳转完毕时进度条加载完毕。幸运的是，在Vue中刚好为我们提供了路由开始跳转和结束跳转的钩子，我们只需在引入`Nprogress`之后，将其绑定在路由钩子上即可。代码如下：

```javascript
//当路由开始跳转时
router.beforeEach((to, from , next) => {
    // 开启进度条
    NProgress.start();
    // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
    next();
});
//当路由跳转结束后
router.afterEach(() => {  
    // 关闭进度条
    NProgress.done()
})
```

# 5.效果图

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181223015548366-1236648717.gif)

# 6.个性化配置

当然如果你对默认的进度条外观样式不满意，`Nprogress`还提供了个性化配置外观。

```javascript
NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
```

