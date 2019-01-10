<template>
  <div class="components-container">
    <el-container>
      <el-col :span="7" offset="2" class="text-center">
        <el-card class="box-card">
          <count-to
            ref="example"
            :start-val="_startVal"
            :end-val="_endVal_wallet"
            :duration="_duration"
            :decimals="_decimals"
            :separator="_separator"
            :prefix="_prefix_wallet"
            :suffix="_suffix"
            :autoplay="true"
            class="example"/>
            <div style="margin:0 auto;width:100px;">
              <el-button type="info" round>Recharge</el-button>
            </div>
        </el-card>
      </el-col>

      <el-col :span="7" offset="3" class="text-center">
        <el-card class="box-card">
          <count-to
            ref="example"
            :start-val="_startVal"
            :end-val="_endVal_loan"
            :duration="_duration"
            :decimals="_decimals"
            :separator="_separator"
            :prefix="_prefix_loan"
            :suffix="_suffix"
            :autoplay="true"
            class="example"/>
            <div style="margin:0 auto;width:100px;">
              <el-button type="info" round>Recharge</el-button>
            </div>
        </el-card>
      </el-col>
    </el-container>
    
      <Table :dataList="dataList"></Table>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import { getList } from '@/api/table'
import Table from '@/views/repair/myrepair/table'

export default {
  name: 'CountToDemo',
  components: { countTo, Table},
  data() {
    return {
      setStartVal: 0,
      setEndVal: 300,
      setDuration: 2000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: '',
      setPrefix: '',
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
      }],
      dataList: [
        {
          house: 'house 111',
          address: '31 Zheda Road',
          type: 'electricity',
          status: 'waiting'

        },
        {
          house: 'house 2',
          address: '32 Zheda Road',
          type: 'ants',
          status: 'payed'
        }

      ]
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
    _endVal_wallet() {
      return 300;
    },
    _endVal_loan() {
      return 100;
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
      return this.setSufffix
    },
    _prefix_wallet() {
      return "Wallet $"
    },
    _prefix_loan() {
      return "Loan $"
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
