<template>
  <div id="" class='container'>
    <el-row :gutter="20" style="margin-top:50px;">
       <el-col :span="8">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Interest Rate</span>
           </div>
           <div style="height:100px;">
              20.1%
           </div>
         </el-card>
       </el-col>
       <el-col :span="8">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Debt</span>
           </div>
           <div style="height:100px;">
             $ 2800

           </div>
         </el-card>
       </el-col>
       <el-col :span="8">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Credit</span>
           </div>
           <div style="height:100px;">
             100

           </div>
         </el-card>
       </el-col>

     </el-row>

     <el-tag style="margin-top: 100px">Appliance</el-tag>


     <el-collapse style="margin-top: 50px" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="If you are unable to repay the loan" name="1">
        <div>
          We can provide assistance including assisting you in applying for assistance from non-profit organizaitions or apply for government subsidies.
        </div>
        <el-button style="margin-top:20px">Apply</el-button>
      </el-collapse-item>
      <el-collapse-item title="If you are elderly families" name="2">
        <div>
          Faced with the problems of elderly families, our platform adopts assistance to help elderly families.
        </div>
        <el-button style="margin-top:20px">Apply</el-button>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>
<script>
export default {
  name: "",
  data (){
    return {
      activeNames: []
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 30px;
  min-height: calc(100vh - 84px);
}
</style>
