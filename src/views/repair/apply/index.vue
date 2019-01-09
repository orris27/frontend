<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Select house: ">
        <el-select v-model="form.house" placeholder="please select your house">
          <el-option label="House1: 31 Zheda Road" value="1"></el-option>
          <!-- <el-option label="Zone two" value="beijing"></el-option> -->
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="Name">
        <el-input v-model="form.name"/>
      </el-form-item> -->

      <el-form-item label="Type: ">
        <el-select v-model="form.type" placeholder="please select the type">
          <!-- <el-option label="Seating" value="seating"/>
          <el-option label="Sleeping or lying" value="sleeping"/>
          <el-option label="Entertainment" value="entertainment"/>
          <el-option label="Tables" value="tables"/>
          <el-option label="Storage" value="storage"/>
          <el-option label="Sets" value="sets"/>
          <el-option label="Others" value="others"/> -->
          <el-option label="structure" value="structure"/>
          <el-option label="insects" value="ants/other insect"/>
          <el-option label="electricity" value="electricity"/>
          <el-option label="water" value="water"/>
          <el-option label="others" value="others"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Repair date: ">
        <el-row>
          <el-col :span="4">
            <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-row>
      </el-form-item>



      <el-form-item label="Description: ">
        <el-col :span="9">
          <el-input v-model="form.desc" type="textarea"/>
        </el-col>
      </el-form-item>

      <el-form-item label="Photo: ">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.fileList">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">Apply</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        house: '',
        name: '',
        contact: '',
        type: '',
        address: '',
        region: '',
        date: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList: [],

      }
    }
  },
  methods: {
    onSubmit() {
      // this.$message('submit!')
      this.$router.push("/handle/apply")
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`confirm remove ${ file.name }？`);
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
