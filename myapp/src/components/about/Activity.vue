<template>
  <div class="activity">
  <div class="card col-12" v-for="(item,index) in items" :key="index">
    <img class="card-img-top" src="../../assets/jun2.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.text}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      items:[
         {title:'热门活动1',text:'军比可抽将，沙漠之鹰'},
         {title:'热门活动2',text:'恭喜Jack荣获坦克一辆...'},
         {title:'热门活动3',text:'充值一千即纪念子弹吊坠...'},
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
