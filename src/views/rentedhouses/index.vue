<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Information</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-col :span="4" class="text-center">

            <img src="/static/images/house1.jpeg" width="150" height="auto" alt="">
          </el-col>
          <el-col :span="15" class="text-center">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="attribute"
              label="Attribute"
              >
            </el-table-column>
            <el-table-column
              prop="value"
              label="Value"
              >
            </el-table-column>
          </el-table>
          </el-col>
          <el-col :span="5" class="text-center">
            <ul>
              <li><el-button>pay for rent</el-button></li>
              <li><el-button>request for repair</el-button></li>
            </ul>
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
        attribute: 'Location',
        value: '',
      }, {
        attribute: 'Type',
        value: '',
      }, {
        attribute: 'Area',
        value: '',
      }, {
        attribute: 'Bid',
        value: '',
      }, {
        attribute: 'Number of Bedrooms',
        value: '',
      }, {
        attribute: 'Parking Space',
        value: '',
      }, {
        attribute: 'Utilities',
        value: '',
      }, {
        attribute: 'Inspection Report',
        value: '',
      }, {
        attribute: 'Status',
        value: 'Rented by Tom',
      }]
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
