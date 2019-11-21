<template>
  <div id="app">
    <el-table
      :data="data"
      border 
      fit 
      stripe
      :span-method="cellMerge"
      highlight-current-row 
      size="small"
      style="width: 100%;">
      <el-table-column prop="ruleId_1" label="指标编码" align="center" width="100"></el-table-column>
      <el-table-column prop="checkRange" label="检查范围" align="center" width="100"></el-table-column>
      <el-table-column prop="ruleId_2" label="指标编码" align="center" width="100"></el-table-column>
      <el-table-column prop="checkContent" label="检查内容" align="center" width="100"></el-table-column>
      <el-table-column prop="ruleId_3" label="指标编码" align="center" width="120"></el-table-column>
      <el-table-column prop="checkItem" label="检查项" align="center" width="300"></el-table-column>
      <el-table-column prop="ruleId_4" label="指标编码" align="center" width="200"></el-table-column>
      <el-table-column prop="checkPoint" label="检查要点" align="left"  header-align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import data from './data'

Vue.use(Element)
export default {
  name: 'app',
  data () {
    return {
      data:data,
      spanArr: [],//二维数组，用于存放单元格合并规则
      position: 0,//用于存储相同项的开始index
    }
  },
  created() {
    this.rowspan(0,'ruleId_1');
    this.rowspan(1,'checkRange');
    this.rowspan(2,'ruleId_2');
    this.rowspan(3,'checkContent');
    this.rowspan(4,'ruleId_3');
    this.rowspan(5,'checkItem');
    this.rowspan(6,'ruleId_4');
    this.rowspan(7,'checkPoint');
  },
  methods:{
    rowspan(idx, prop) {
      this.spanArr[idx] = [];
      this.position = 0; 
      this.data.forEach((item,index) => {
        if( index === 0){
          this.spanArr[idx].push(1);
          this.position = 0;
        }else{
          if(this.data[index][prop] === this.data[index-1][prop] ){
            this.spanArr[idx][this.position] += 1;//有相同项
            this.spanArr[idx].push(0); // 名称相同后往数组里面加一项0
          }else{
            this.spanArr[idx].push(1);//同列的前后两行单元格不相同
            this.position = index;
          }
        }
      })
    },
    //表格单元格合并
    cellMerge({ row, column, rowIndex, columnIndex }) {
      for(let i = 0; i<this.spanArr.length; i++) {
        if(columnIndex === i){
          const _row = this.spanArr[i][rowIndex];
          const _col = _row>0 ? 1 : 0;
          // console.log('第'+rowIndex+'行','第'+i+'列','rowspan:'+_row,'colspan:'+_col)
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    }
  }
}
</script>

