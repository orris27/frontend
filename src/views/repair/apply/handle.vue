<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Select house: ">
        <el-select v-model="form.name" placeholder="Company name: ">
          <el-option label="company 1" value="1"></el-option>
          <el-option label="company 2" value="1"></el-option>
        </el-select>
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
}
</script>
<style lang="scss" scoped>
</style>
