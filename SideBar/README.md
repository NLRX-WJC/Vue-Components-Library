# 介绍

这是一个是基于`element-UI`的导航菜单组件基础上，进行了二次封装的菜单组件，该组件以组件递归的方式，实现了可根据从后端接收到的`json`菜单数据，动态渲染多级菜单的功能。

# 使用方法

由于该组件是基于`element-UI`进行二次封装的，所以在使用该组件时请务必安装`element-UI`（[安装方式猛戳这里](http://element-cn.eleme.io/#/zh-CN/component/installation)），安装好`element-UI`后，只需将该组件文件夹`SideBar`导入到现有项目中即可使用。

# 工作流程

组件封装好之后，由父组件调用该组件，父组件先向后端发送请求获取菜单数据，然后将菜单数据传递给封装好的菜单组件，菜单组件通过解析数据，完成菜单渲染。

# 使用示例



```html
<template>
  <div id="app">
    <Sidebar :menuList="menuList"/>
  </div>
</template>

<script>
import  Sidebar from './SideBar/SideBar.vue'
export default {
  name: 'app',
  components: { Sidebar},
  data() {
    return {
      menuList,
    }
  }
}
</script>

<style>

</style>

```

# 选项

|   属性   |         描述         | 类型  | 是否必须 |
| :------: | :------------------: | :---: | :------: |
| menuList | 由后端返回的菜单数据 | Array |    是    |

# 菜单数据格式示例

```json
{
    "menus" : [
          {
            "path": "/func1",     //菜单项所对应的路由路径
            "title": "功能1",     //菜单项名称
            "children":[]        //是否有子菜单，若没有，则为[]
          },
          {
            "path": "/func2",
            "title": "功能2",
            "children":[]
          },
          {
            "path": "/func3",
            "title": "功能3",
            "children": [
              {
                "path": "/func31",
                "title": "功能3-1",
                "children":[]
              },
              {
                "path": "/func32",
                "title": "功能3-2",
                "children":[]
              },
              {
                "path": "/func33",
                "title": "功能3-3",
                "children":[]
              },
            ]
          }
    ]
}
```



# 效果图

![](https://raw.githubusercontent.com/wangjiachen199366/Vue-Components-Library/master/SideBar/%E6%95%88%E6%9E%9C%E5%9B%BE.gif)

# 源代码

完整代码请戳☞[Vue-Components-Library/SideBar](https://github.com/wangjiachen199366/Vue-Components-Library/tree/master/SideBar)

