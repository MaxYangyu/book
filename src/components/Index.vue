<template>
  <div class="index">
    <Catalog></Catalog>
    <Select-info></Select-info>
    <Recommend></Recommend>
    <List></List>
  </div>
</template>

<script>
  import '../assets/css/base.css'
  import '../assets/js/rem.js'
  import Catalog from './catalog.vue'
  import SelectInfo from './select.vue'
  import Recommend from './recommend.vue'
  import List from './recommend-list.vue'

  export default {
    data() {
      return {}
    },
    components: {
      Catalog,
      SelectInfo,
      Recommend,
      List,
    }
  }
</script>


<style scoped>

  img {
    width: 100%;
  }
</style>
