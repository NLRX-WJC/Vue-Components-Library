# 介绍

这是一个可以快速回到页面顶部的组件，当用户浏览到页面底部的时候，通过点击按钮，可快速回到页面顶部。

# 使用方法

由于该组件是基于`element-UI`进行二次封装的，所以在使用该组件时请务必安装`element-UI`（[安装方式猛戳这里](http://element-cn.eleme.io/#/zh-CN/component/installation)），安装好`element-UI`后，只需将该组件文件夹`BackToTop`导入到现有项目中即可使用。

# 使用示例

```html
<template>
  <div id="app">
    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
  </div>
</template>

<script>
import  BackToTop from './BackToTop'
export default {
  name: 'app',
  components: { BackToTop},
  data() {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  }
}
</script>

```

# 选项

|       属性       |                       描述                        |  类型  | 是否必须 | 默认值 |
| :--------------: | :-----------------------------------------------: | :----: | :------: | :----: |
| visibilityHeight |          当页面卷曲到多少高度时显示按钮           | Number |    否    |  400   |
|   backPosition   |           点击按钮后回到页面顶部的高度            | Number |    否    |   0    |
|   customStyle    |                  自定义按钮样式                   | Object |    否    |        |
|  transitionName  | 回到顶部时的动画效果，具体参考elementUI的动画效果 | String |    否    |  fade  |



# 效果图

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181219112930327-135484373.gif)


# 组件代码

完整代码请戳☞[Vue-Components-Library/BackToTop](https://github.com/wangjiachen199366/Vue-Components-Library/tree/master/BackToTop)

（完）