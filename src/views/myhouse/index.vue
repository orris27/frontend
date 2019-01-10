<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>House 1</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-col :span="6" offset="1" class="text-center">

            <img src="/static/images/house1.jpeg" width="100%" height="auto" alt="">
            <ul>
              <li><el-button type="info" size="medium" round>&nbsp;&nbsp;Modify Info&nbsp;&nbsp;</el-button></li><br>
              <li><el-button type="info" size="medium" round>Upload Photos</el-button></li><br>
              <input ref="excel-upload-input" class="excel-upload-input" type="file" style="display:none">
              <li><el-button type="info" size="medium" round @click="handleUpload" >Upload Report</el-button></li><br>
              <li><el-button type="info" size="medium" round @click="jump">Repair Remind</el-button></li><br>
            </ul>
          </el-col>

          <el-col :span="14" offset="2" class="text-center">
            <el-table
            :data="tableData"
            border
            show-header
            fit
            style="width: 100%">
            <el-table-column
              prop="attribute"
              width="100"
              >
            </el-table-column>
            <el-table-column
              prop="value"      
              >
            </el-table-column>
          </el-table>
          </el-col>
        </div>
      </el-card>

      </br>


      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>House 2</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-col :span="6" offset="1" class="text-center">

            <img src="/static/images/house1.jpeg" width="100%" height="auto" alt="">
            <ul>
              <li><el-button type="info" size="medium" round>&nbsp;&nbsp;Modify Info&nbsp;&nbsp;</el-button></li><br>
              <li><el-button type="info" size="medium" round>Upload Photos</el-button></li><br>
              <input ref="excel-upload-input" class="excel-upload-input" type="file" style="display:none">
              <li><el-button type="info" size="medium" round @click="handleUpload" >Upload Report</el-button></li><br>
              <li><el-button type="info" size="medium" round @click="jump">Repair Remind</el-button></li><br>
            </ul>
          </el-col>

          <el-col :span="14" offset="2" class="text-center">
            <el-table
            :data="tableData"
            border
            show-header
            fit
            style="width: 100%">
            <el-table-column
              prop="attribute"
              width="100"
              >
            </el-table-column>
            <el-table-column
              prop="value"      
              >
            </el-table-column>
          </el-table>
          </el-col>
        </div>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      tableData: [{
        attribute: 'Address',
        value: '31 Zheda road, Xihu, Hangzhou, Zhejiang',
      }, {
        attribute: 'Type',
        value: 'Apartment',
      }, {
        attribute: 'Area',
        value: '120m2',
      }, {
        attribute: 'Room',
        value: '3 Bedroom, 1 Kitchen, 2 Bathroom',
      }, {
        attribute: 'Parking',
        value: '1',
      }, {
        attribute: 'Status',
        value: 'Rented by Tom till 12.2.2019',
      }]
    }
  },
  methods: {
    jump(){
    this.$router.push("/dragKanban")
    //传递的参数用{{ $route.query.goodsId }}获取
    //this.$router.push({path: '/cart?goodsId=12'})
    //this.$router.go(-2)
    //后退两步
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    }
  }
}
</script>
<style>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
ul li{
  list-style: none;
}
</style>
