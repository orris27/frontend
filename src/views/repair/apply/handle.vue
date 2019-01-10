<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Company: ">
        <el-select v-model="form.name" placeholder="Company name: ">
          <el-option label="company 1" value="1" default></el-option>
          <el-option label="company 2" value="2"></el-option>
        </el-select>
      </el-form-item>



      <el-form-item label="Fee: ">
        $10 / h
      </el-form-item>

      <el-form-item label="Tell: ">
        110 110 110
      </el-form-item>

      <el-form-item label="Rank: ">
        1
      </el-form-item>

      <el-form-item label="Credit: ">
        100
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Apply</el-button>
        <el-button @click="onBack">Back</el-button>
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
      this.$message({
        message: 'success!',
        type: 'success'

      })
    },
    onBack() {
      // this.$message('back')
      this.$router.push("/house/repair/apply")
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
