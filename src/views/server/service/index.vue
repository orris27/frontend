<template>
  <div class="app-container">
    <!-- <code>drag-list base on
      <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
    </code> -->
    <div class="editor-container">
      <dnd-list :list1="list1" :list2="list2" list1-title="Do" list2-title="Not"/>
    </div>

    <Area></Area>
  </div>
</template>

<script>
import DndList from '@/components/DndList'
import { fetchList } from '@/api/article'
import Area from '@/views/server/service/area'

export default {
  name: 'DndListDemo',
  components: { DndList, Area },
  data() {
    return {
      list1: [
        {
          id: 2,
          type: 'Electricity',
        },
        {
          id: 3,
          type: 'Roof',
        },
        {
          id: 4,
          type: 'Water',
        }
      ],
      list2: [
        {
          id: 1,
          type: 'Ants',
        },
        {
          id: 2,
          type: 'Electricity',
        },
        {
          id: 3,
          type: 'Roof',
        },
        {
          id: 4,
          type: 'Water',
        },
        {
          id: 5,
          type: 'Hoor',
        },
        {
          id: 6,
          type: 'Metal',
        },
        {
          id: 7,
          type: 'Structure',
        }
      ]
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    getData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list1 = response.data.items.splice(0, 5)
        this.list2 = response.data.items
      })
    }
  }
}
</script>
