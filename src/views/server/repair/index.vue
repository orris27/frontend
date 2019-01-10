<template>
  <div class="container">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="All" name="all">
        <Table></Table>
      </el-tab-pane>
      <el-tab-pane label="Waiting" name="waiting">
        <Waiting></Waiting>
      </el-tab-pane>
      <el-tab-pane label="Repairing" name="repairing">
        <Repairing></Repairing>
      </el-tab-pane>
      <!-- <el-tab-pane label="Repairing" name="repairing">No data</el-tab-pane> -->
      <el-tab-pane label="Repaired" name="repaired">
        <Repaired></Repaired>
      </el-tab-pane>
      <el-tab-pane label="Commented" name="commented">
        <Commented></Commented>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Table from '@/views/repair/myrepair/table' // Secondary package based on el-pagination
import Waiting from '@/views/repair/myrepair/waiting' // Secondary package based on el-pagination
import Repairing from '@/views/repair/myrepair/repairing' // Secondary package based on el-pagination
import Repaired from '@/views/repair/myrepair/repaired' // Secondary package based on el-pagination
import Commented from '@/views/repair/myrepair/commented' // Secondary package based on el-pagination
  export default {
    components: { Table, Repairing, Repaired, Waiting, Commented },
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
