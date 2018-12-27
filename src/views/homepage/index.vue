<template>
  <!-- <div id="" class="app-container"> -->
  <div>
    <!-- <Card v-bind:cardName='name' v-bind:items='items'/> -->
    <Card cardName='name' v-bind:items='items'/>
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
