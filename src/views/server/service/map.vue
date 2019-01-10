<template>
  <div id="" class="app-container">
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
    </baidu-map>

    <el-button style="margin: 40px" class="filter-item" type="primary" @click="handleBack">Back</el-button>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 120.12607
      this.center.lat = 30.26126
      this.zoom = 15
    },
    handleBack () {
      this.$router.push("/server/service")
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 600px;
}
</style>
