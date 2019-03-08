<template>
  <div class="menu container row">
    <div class="col-7">
      <!-- 左 -->
      <h3>武器清单:</h3>
      <table class="table table-dark text-center">
        <thead>
          <tr>
            <th scope="col">规格</th>
            <th scope="col">价格</th>
            <th scope="col">装备</th>
          </tr>
        </thead>
        <tbody  v-for="(item,index) in items" :key="index">
          <tr>            
            <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="3">{{item.description}}</td>
          </tr>
          <tr v-for="(item1,index1) in item.options" :key="index1">
            <td>{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td>
              <!-- 点击在右侧购物车出现商品 -->
              <button class="btn btn-info" @click="addTo(item,item1)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 右 -->
    <div class="col-5">
      <h3>装甲车:</h3>
      <table class="table table-dark text-center">
        <thead>
          <tr>
            <th scope="col">数量</th>
            <th scope="col">规格</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <template v-if="newItems.length>0">
        <tbody v-for="(item,index) in newItems" :key="index">
          <tr>
            <td>
              <button class="btn btn-primary" @click="reduce(item,index)">-</button>
              <input class="input" type="number" v-model.number="item.sum">
              <button class="btn btn-primary" @click="add(item)">+</button>
            </td>
            <td>{{item.name}}-{{item.size}}</td>
            <td>{{item.price*item.sum}}</td>
          </tr>
        </tbody>
        <!-- 计算总价和总件数 -->
        <tr>
          <td></td>
          <td colspan="2" class="text-info text-center">
            商品总件数:<span>{{totalNum}}</span>
            总价:<span>{{totalPrice}}</span>
            </td>
        </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3"><h3 class="text-danger ">此购物车空空如也~</h3></td>
          </tr>
        </template>      
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Menu',
  data () {
    return {
      
        // 0:{
        //   name:'战神',
        //   description:'功能强悍,战场利器.',
        //   options:[
        //     {
        //       size:'060',
        //       price:'75'
        //     },
        //     {
        //       size:'077',
        //       price:'99'
        //     },
        //   ]
        // },
        // 1:{
        //   name:'宙斯S',
        //   description:'风靡北非的一款护甲神器',
        //   options:[
        //     {
        //       size:'010',
        //       price:'300'
        //     },
        //     {
        //       size:'020',
        //       price:'899'
        //     },
        //   ]
        // }
    
    //   item:{
    //     0:{
    //       name:'战神X7',
    //       norms:304,
    //       price:'$75W'
    //     },
    //     1:{
    //       name:'奇迹01',
    //       norms:179,
    //       price:'$99W'
    //     }
    //   },
    //   // 表示当我在左边菜单栏添加数据，newItems才有值。
      newItems:[] 
    }
  },
  mounted(){
    axios.get('./menu-smq.json')
    .then(res=>{
      // this.items=res.data
      this.$store.commit('setMenuItems',res.data)
    })
  },
  methods:{
    addTo(item,options){
      var result = this.newItems.filter((item1)=>{
        return item.name==item1.name && options.size==item1.size
      })  
      if(result!=null && result.length>0){
        if(result[0].sum>=10){
          result[0].sum=10
        }else{
          result[0].sum++
        }
      }else{
        this.newItems.push({
          name:item.name,
          size:options.size,
          sum:1,
          price:options.price
        })
      }
    },
    reduce(item,index){
      if(item.sum>1){
        item.sum--
      }else{
        this.newItems.splice(index,1)
      }
    },
    add(item){
      if(item.sum>=10){
        item.sum=10
      }else{
        item.sum++
      }
    }
  },
  computed:{
    totalNum(){
      return this.newItems.length
    },
    totalPrice(){
      return this.newItems.reduce((sum1,cur)=>{
        return sum1+cur.sum*cur.price
      },0)
    },
    items(){
      return this.$store.getters.getMenuItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input{width: 50px;text-align: center;}
</style>