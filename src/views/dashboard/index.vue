<template>
  <div class="dashboard-container">
    <el-row>
      <!-- <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0"> -->
      <el-col :span="24" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <!-- <img src="/static/images/housing.jpg" class="image"> -->
          <el-carousel :interval="4000" type="card" height="470px">
            <el-carousel-item :key="item">
              <img src="/static/images/house1.jpg" class="image">
            </el-carousel-item>
            <el-carousel-item :key="item">
              <img src="/static/images/house2.jpg" class="image">
            </el-carousel-item>
            <el-carousel-item :key="item">
              <img src="/static/images/house3.jpg" class="image">
            </el-carousel-item>
          </el-carousel>
        </el-card>
          <div style="padding: 14px;float: right;margin-top: 200px  ">
            <!-- <span>Yummy hamburger</span> -->
            <div class="bottom clearfix">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button type="text" class="button">About us</el-button>
              <el-button type="text" class="button">Contact us</el-button>
              <el-button type="text" class="button">Law Information</el-button>
              <el-button type="text" class="button">Related Link</el-button>
            </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  data () {
    return {
       currentDate: new Date()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  // float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
