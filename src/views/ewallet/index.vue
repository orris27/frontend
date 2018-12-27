<template>
  <div class="components-container">
    <count-to
      ref="example"
      :start-val="_startVal"
      :end-val="_endVal"
      :duration="_duration"
      :decimals="_decimals"
      :separator="_separator"
      :prefix="_prefix"
      :suffix="_suffix"
      :autoplay="true"
      class="example"/>
      <el-table
       :data="tableData"
       style="width: 100%">
       <el-table-column
         label="Card Number"
         width="180">
         <template slot-scope="scope">
           <!-- <i class="el-icon-time"></i> -->
           <span style="margin-left: 10px">{{ scope.row.cardNum}}</span>
         </template>
       </el-table-column>
       <el-table-column
         label="Bank Name"
         width="180">
         <template slot-scope="scope">
           <!-- <i class="el-icon-time"></i> -->
           <span style="margin-left: 10px">{{ scope.row.bankName}}</span>
         </template>
       </el-table-column>
       <el-table-column
         label="Operations">
         <template slot-scope="scope">
           <el-button
             size="mini"
             @click="handleRecharge(scope.$index, scope.row)">recharge</el-button>
           <el-button
             size="mini"
             type="danger"
             @click="handleWithdraw(scope.$index, scope.row)">withdraw</el-button>
         </template>
       </el-table-column>
     </el-table>
     <el-button type="primary">Add a new card</el-button>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import { getList } from '@/api/table'

export default {
  name: 'CountToDemo',
  components: { countTo },
  data() {
    return {
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: ' ',
      setPrefix: '$ ',
      list: null,
      tableData: [{
        cardNum: 'card01',
        bankName: 'bank01',
      }, {
        cardNum: 'card01',
        bankName: 'bank01',
      }, {
        cardNum: 'card01',
        bankName: 'bank01',
      }, {
        cardNum: 'card01',
        bankName: 'bank01',
      }]
    }
  },
  computed: {
    handleRecharge(index, row) {
      console.log(index, row);
    },
    handleWithdraw(index, row) {
      console.log(index, row);
    },
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal
      } else {
        return 0
      }
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal
      } else {
        return 0
      }
    },
    _duration() {
      if (this.setDuration) {
        return this.setDuration
      } else {
        return 100
      }
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert('digits argument must be between 0 and 20')
          return 0
        }
        return this.setDecimals
      } else {
        return 0
      }
    },
    _separator() {
      return this.setSeparator
    },
    _suffix() {
      return this.setSuffix
    },
    _prefix() {
      return this.setPrefix
    }
  },
  methods: {
    start() {
      this.$refs.example.start()
    },
    pauseResume() {
      this.$refs.example.pauseResume()
    },
  },
}
</script>

<style scoped>
.example {
  font-size: 50px;
  color: #F6416C;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
}


</style>
