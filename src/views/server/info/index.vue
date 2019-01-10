<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name: ">
        company 1
      </el-form-item>



      <el-form-item label="Address: ">
        88 Zheda Road, Hangzhou
      </el-form-item>

      <el-form-item label="Corporate: ">
        Jinbo
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">Modify</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      form: {
        name: '',
        contact: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('hello')
    },
    onBack() {
      this.$message('back')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
