# 介绍

这是一个是基于`element-UI`的文件上传组件基础上，进行了二次封装，该组件除了可以正常的进行文件上传，还增加了显示文件上传的进度条。

# 使用方法

由于该组件是基于`element-UI`的分页组件进行二次封装，所以在使用该组件时请务必安装`element-UI`（[安装方式猛戳这里](http://element-cn.eleme.io/#/zh-CN/component/installation)），另外，该组件进行文件上传的操作采用了`axios`，所以也必须先安装好`axios`，安装好上述两个库后，只需将该组件文件夹`UploadFile`导入到现有项目中即可使用。

# 使用示例

```html
<template>
  <div id="app">
    <upload-file :url="/test/"/>
  </div>
</template>

<script>
import  UploadFile from './UploadFile'
export default {
  name: 'app',
  components: { Sidebar},
  data() {
    return {
      url,     //文件上传到的目的url
    }
  }
}
</script>
```

# 选项

| 属性 |  描述    | 类型     |  是否必须 |
| :----------: | :--: | :--: | :----------: |
| url | 件上传到的目的url | String | 是 |

# 效果图
![](https://raw.githubusercontent.com/wangjiachen199366/Vue-Components-Library/master/UploadFile/%E6%95%88%E6%9E%9C%E5%9B%BE.gif)
