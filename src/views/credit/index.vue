<template>
  <div id="" class="mixin-components-container">
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


    <code>Credit History </code>


     <el-table
      :data="tableData"
      border
      style="width: 100%">
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
