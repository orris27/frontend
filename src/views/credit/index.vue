<template>
  <div id="" class="app-container">
    <el-row :gutter="20" style="margin-top:50px;">
       <el-col :span="12">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Credit</span>
           </div>
           <div style="height:100px;">
             100
           </div>
         </el-card>
       </el-col>
       <el-col :span="12">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Star</span>
           </div>
           <div style="height:100px;">
             100
           </div>
         </el-card>
       </el-col>

     </el-row>



     <el-tag style="margin-top: 100px">Credit History</el-tag>


     <el-table
      :data="tableData"
      border
      :row-class-name="tableRowClassName"
      style="width: 100%; margin-top: 50px">

      <el-table-column
        prop="category"
        label="Category"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Amount"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mode"
        label="Mode"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="Date">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Credit",
  data () {
    return {
      tableData: [{
        category: 'expense',
        amount: '999',
        mode: 'loan',
        date: '2018.8.8'
      }, {
        category: 'expense',
        amount: '999',
        mode: 'loan',
        date: '2018.8.8'
      }, {
        category: 'expense',
        amount: '999',
        mode: 'loan',
        date: '2018.8.8'
      }, {
        category: 'expense',
        amount: '999',
        mode: 'loan',
        date: '2018.8.8'
      }]
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
  }

}
</script>
<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
</style>
