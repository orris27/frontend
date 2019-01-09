<template>
  <div class="container">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="All" name="all">
        <Table></Table>
      </el-tab-pane>
      <el-tab-pane label="New" name="new">No data</el-tab-pane>
      <el-tab-pane label="Repairing" name="repairing">No data</el-tab-pane>
      <el-tab-pane label="to be commented" name="comment">No data</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Table from '@/views/repair/myrepair/table' // Secondary package based on el-pagination
  export default {
    components: { Table },
    data() {
      return {
        activeName: 'all'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang='scss'>
.container{
  padding: 30px,
}

</style>
