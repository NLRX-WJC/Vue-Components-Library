# 介绍

这是一个可以将页面中的表格数据导出为`Excel`文件的功能组件，该组件一般与表格一起使用，将表格数据传给组件，然后通过点击组件按钮可将表格中的数据导出成`Excel`文件。

# 使用方法

由于封装该组件内部引用了`xlsx.js`，`file-saver.js`和`elementUI`，因此在使用该组件时，请先安装如下依赖：

```shell
npm install xlsx file-saver element-ui --save
```

安装好依赖后，只需将该组件文件夹`ExportExcel`导入到现有项目中即可使用。


# 使用示例

```html
<template>
  <div id="app">
    <export-excel v-if="list !== null" :list="list" :tHeader="tHeader" :tValue="tValue"></export-excel>
  </div>
</template>

<script>
import  ExportExcel from './ExportExcel'
export default {
  name: 'app',
  components: { ExportExcel},
  data() {
    return {
      list:null,
      tHeader:['Id', '告警类型', '告警内容', '告警时间（段）', '告警次数'],
	  tValue:['id', 'type', 'content', 'time', 'count'],
    }
  }
}
</script>

```

# 选项

|   属性   |         描述         | 类型  | 是否必须 |
| :------: | :------------------: | :---: | :------: |
| list | 由后端返回的表格数据 | Array |    是    |
| tHeader | 导出的Excel文件表头标题 | Array |    是    |
| tValue | 要将表格数据中的哪些字段作为数据导出至Excel，与表头一一对应 | Array |    是    |
| filename | 导出的Excel文件名，默认为“导出数据.xlsx” | String |    否    |

# 选项说明

**关于选项中的`tHeader`和`tValue`说明如下：**

例如将如下表格数据导出成Exlcel：

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181218212516268-1558904696.png)

其中表头数据为：

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181218212526743-2067406424.png)

所以`tHeader`为：

```javascript
tHeader:['Id', '告警类型', '告警内容', '告警时间（段）', '告警次数']
```

后端返回的表格数据`list`为：

```json
[
    {
        "id":1,
        "type":"",
        "content":"",
        "time":"",
        "count":"",
    },
    {
        "id":2,
        "type":"",
        "content":"",
        "time":"",
        "count":"",
    },
    //....
]
```

其中：

- list中的id------->表头的ID

- list中的type------->表头的'告警类型'

- list中的content------->表头的'告警内容'

- list中的time------->表头的'告警时间（段）'

- list中的count------->表头的'告警次数'

所有`tValue`为：

```javascript
tValue:['id', 'type', 'content', 'time', 'count']
```



# 效果图

![](https://img2018.cnblogs.com/blog/1460995/201812/1460995-20181218212547911-1667391952.gif)


# 组件代码

完整代码请戳☞[Vue-Components-Library/ExportExcel](https://github.com/wangjiachen199366/Vue-Components-Library/tree/master/ExportExcel)

（完）