# 介绍

这是一个是基于`element-UI`的分页组件基础上，进行了二次封装的分页组件，在展示数据时，该分页组件采用了每显示一页数据，只请求当前页面的数据的请求策略，从而避免了一次性将数据全部请求所造成的资源浪费。

# 使用方法

由于该组件是基于`element-UI`的分页组件进行二次封装，所以在使用该组件时请务必安装`element-UI`（[安装方式猛戳这里](http://element-cn.eleme.io/#/zh-CN/component/installation)），安装好`element-UI`后，只需将该组件文件夹`Pagination`导入到现有项目中即可使用。

# 示例

```html
<template>
  <pagination v-show="total>0" :total="total" :page.sync="page" :limit.sync="limit" @pagination="getList" />
</template>
<script>
  import Pagination from '@/components/Pagination';
  export default {
    components: { Pagination },
    data () {
      return {
        list:null,   //请求回来填充表格的数据   
        total:0,     //数据总条数 
        page: 1,    //默认显示第1页
        limit: 10   //默认一次显示10条数据
      }
    }，
    methods:{
      getlist(){
      var start = (this.page - 1) * this.limit;
      var end   = this.page * this.limit;
      this.$axios.get(url + '?start=' + start + '&end=' + end)
        .then(response => {
              this.list = response.data.items;
              this.total = response.data.total;
              resolve();
        }).catch(err => {
          reject(err);
        })
    }
  	}
  }
</script>
```

# 选项

| 属性 |  描述    | 类型     | 默认值     | 是否必须 |
| :----------: | :--: | :--: | :--: | :----------: |
| total | 数据总数 | Number | 0 | 是 |
| page | 当前页码 | Number | 1 | 是 |
| limit | 每页显示数据条目个数 | Number | 10 | 是 |
| pageSizes | 每页显示个数选择器的选项设置 | Array | [10,20,30] | 否 |
| layout | 组件布局 | String | 'total, sizes, prev, pager, next, jumper' | 否 |
| background | 是否为分页按钮添加背景色 | Boolean | true | 否 |

# 效果图
![](https://raw.githubusercontent.com/wangjiachen199366/Vue-Components-Library/master/Pagination/%E6%95%88%E6%9E%9C%E5%9B%BE.gif)
