<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Information</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-form ref="form" :model="form" label-width="120px">
            <el-row :gutter="20">
                <el-col :span="16">
                  <el-form-item label="Address: ">
                      <!-- <el-input v-model="form.name"/> -->
                      31 zheda road Xihu, Hangzhou Zhejiang
                  </el-form-item>
                  <el-form-item label="Type: ">
                    Apartment
                  </el-form-item>
                  <el-form-item label="Area: ">
                    120 m<sup>2</sup>
                  </el-form-item>

                  <el-form-item label="Room: ">
                    3 Bedrooms, <br>
                    1 Kitchen, <br>
                    2 Bathrooms
                  </el-form-item>


                  <el-form-item label="Parking: ">
                    1
                  </el-form-item>
                  <el-form-item label="State: ">
                    Rented by you till 12.2.2019
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <!-- <img src="/static/images/house1.jpeg" width="150" height="auto" alt=""> -->
                  <img src="/static/images/myhouse.jpg" class="image">
                </el-col>
            </el-row>






            <!-- <el-form-item label="Description">
              <el-input v-model="form.desc" type="textarea"/>
            </el-form-item> -->

            <!-- <el-form-item label="Photo">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">Click to upload</el-button>
                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
              </el-upload>
            </el-form-item> -->

            <el-form-item>
              <el-button type="primary" @click="onSubmit">Apply</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
          </el-form>
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
      }],
      form: {
        name: '31 zheda road Xihu, Hangzhou Zhejiang',
        contact: '',
        type: '',
        address: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

      }

    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel (){
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
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
