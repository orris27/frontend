<template>
  <div id="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span> {{cardName}} </span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
      </div>
      <div v-for="item in items" :key="item" class="text item">
        {{ item }}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: [ 'cardName', 'items' ],
  data() {
    return {
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

/* .box-card {
  width: 480px;
} 会影响到其他card的样式*/
</style>
