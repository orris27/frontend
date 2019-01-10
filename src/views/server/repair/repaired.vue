<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="form.title" v-model="listQuery.title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.importance" :placeholder="form.importance" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.type" :placeholder="form.type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key"/>
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">search</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="dataList"
      border
      fit
      highlight-current-row
      style="width: 100%; margin-top: 20px"
      @sort-change="sortChange">
      <el-table-column :label="attr.house" prop="house" sortable="custom" align="center" width="100">
      </el-table-column>
      <el-table-column :label="attr.address" prop="address" width="150px" align="center">
      </el-table-column>
      <el-table-column :label="attr.type" prop="type" min-width="150px">
      </el-table-column>
     <el-table-column
      prop="status"
      label="Tag"
      width="100"
      :filters="[{ text: 'Home', value: 'waiting' }, { text: 'Office', value: 'payed' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status | statusFilter"
            disable-transitions>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="attr.actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status!='repairing'" size="mini" @click="handleModifyStatus(scope.row,'draft')">see more
          </el-button>



          <el-button v-if="scope.row.status!='repairing'" size="mini" @click="handlePay(scope.row,'payed')">pay
          </el-button>
        <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Payment" @dragDialog="handleDrag">
          <!-- <el-select ref="select" v-model="value" placeholder="select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select> -->
          <el-row style="margin-top: 20px">
            <el-col :span="8" :offset="2">
              <el-table border :data="gridData" style="width: 100%">
                <!-- <el-table-column property="type" label="Type" width="150"/> -->
                <el-table-column property="type" label="Type"/>
                <!-- <el-table-column property="value" label="Value" width="200"/> -->
                <el-table-column property="value" label="Value"/>
              </el-table>
            </el-col>

            <el-col :span="8" :offset="4">

  <el-table
    border
    ref="multipleTable"
    :data="tableData3"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
      label="Method">
      <template slot-scope="scope">{{ scope.row.method }}</template>
    </el-table-column>
  </el-table>
  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">select</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div> -->
            </el-col>
          </el-row>

          <el-form ref="form" :model="form" label-width="120px" style="margin-top: 50px">
            <el-form-item label="Description: ">
              <el-input v-model="form.desc" type="textarea"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Submit</el-button>
            </el-form-item>


          </el-form>

        </el-dialog>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />


  </div>
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog'
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // Waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'Repaired',
  components: { Pagination },
  directives: { waves, elDragDialog },
  filters: {
    statusFilter(status) {
      const statusMap = {
        waiting: 'success',
        repairing: 'info',
        finished: 'danger',
        payed: 'danger'
      }
      return statusMap[status]
    } ,
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      row: '',
      tableData3: [{
          method: 'Visa',
        }, {
          method: 'Alipay',
        }, {
          method: 'Wallet',
        }, {
          method: 'Loan',
        }],
        multipleSelectnon: [],



      form: {
        desc: '',
      },
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],

      dialogTableVisible: false,
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' }
      ],
      value: '',
      gridData: [{
        type: 'force',
        value: '$ 100',
      }, {
        type: 'materid',
        value: '$ 200',
      }, {
        type: 'tex',
        value: '$ 10',
      }, {
        type: 'sum',
        value: '$ 310'
      }],
      dataList: [
        {
          house: 'house 1',
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

      ],
      row: {
        address: '123',

      },

      // ],
      form: {
        title: 'Title',
        importance: 'Imp',
        type: 'type',
      },

      attr: {
        house: 'House',
        address: 'Address',
        type: 'Type',
        author: 'Author',
        importance: 'Imp',
        readings: 'Readings',
        status: 'Status',
        actions: 'actions'

      },
      tableKey: 0,
      list: null,
      total: 1,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    onSubmit() {
      this.$message({
        message: 'submit!',
        type: 'success'
      })

      setTimeout(() =>{
        this.dialogTableVisible = false
        this.row.status = 'payed'

      },1.5 * 1000)

    },
    handleDrag() {
      this.$refs.select.blur()
    },

    getList() {
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //
      //   // Just to simulate the time of the request
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: 'ok',
        type: 'success'
      })
      row.status = status
    },
    handlePay(row,status) {
        this.dialogTableVisible = true
        this.row = row

    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
