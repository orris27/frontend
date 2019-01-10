<template>
  <!-- <div id="" class="app-container"> -->
  <div class="app-container">
    <!-- <Card v-bind:cardName='name' v-bind:items='items'/> -->
    <!-- <Card cardName='name' v-bind:items='items'/> -->


    <el-form ref="form" :model="form" label-width="120px">

      <el-form-item label="Role: ">
        Landlord
      </el-form-item>

      <el-form-item label="Email: ">
        1101000@gmail.com
      </el-form-item>

      <el-form-item label="Tel: ">
        110-110-110
      </el-form-item>
      <el-form-item label="Description: ">
        I am a landlord 
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Modify</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  // import { mapGetters } from 'vuex'
  import Card from '@/components/Card/index'
  export default {
    name: "Homepage",
    components: {
      Card
    },
    // data: () => ({
    //   return {
    //     cardName: 'admin'
    //   }
    // }),
    // computed: {
    //   ...mapGetters([
    //     'name',
    //     'roles'
    //   ])
    // },
    data() {
      return {
        items: [
          "Role: landlord",
          "Email: xx@gmail.com",
          "Tel: xxxxx",
          "If any information is wrong, please contact us at 110."
        ]
      }
    },
    methods: {
      created() {
        console.log('created')
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
