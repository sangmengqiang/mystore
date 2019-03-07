<template>
  <div class="admin container row">
    <!-- 左上新 -->
    <div class="col-8">
      <NewUpdate></NewUpdate>
    </div>
    <!-- 右仓库 -->
    <div class="col-4">
      <NewStore></NewStore>
    </div>
  </div>
</template>

<script>
import NewUpdate from '@/components/NewUpdate';
import NewStore from '@/components/NewStore';
export default {
  name: 'Admin',
  data () {
    return {
     
    }
  },
  components:{
    'NewUpdate':NewUpdate,
    NewStore
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>