<template>
    <form>
        <h1>上新</h1>
    <div class="form-group">
        <label for="input1">品种:</label>
        <input type="text" v-model="newUpdate.name" class="form-control" id="input1" placeholder="请输入商品名称...">
    </div>
    <div class="form-group">
        <label for="input2">商品描述:</label>
        <textarea class="form-control" v-model="newUpdate.sum" id="input2" rows="3"></textarea>
    </div>
    <div class="form-group">
    <label for="input3">规格:</label>
    <select class="form-control" v-model="newUpdate.size1" id="input3">
      <option>002</option>
      <option>102</option>
      <option>033</option>
      <option>875</option>
      <option>474</option>
    </select>
    <span class="spans">价格 :</span><input v-model="newUpdate.price1" type="text" class="form-control col-4" id="Input2" >
  </div>
   <button type="button" @click.prevent="addUpdate" class="btn btn-primary btn-lg btn-block mt-5">BLBL</button>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    name:'NewUpdate',
    data(){
        return{
            newUpdate:{}
        }
    },
    methods:{
        addUpdate(){
            var data={
                name:this.newUpdate.name,
                sum:this.newUpdate.sum,
                options:[
                    {
                        size:this.newUpdate.size1,
                        price:this.newUpdate.price1
                    }
                ]
            }
            axios.post('/menu-smq.json',data)
                .then(res=>{
                    console.log(res.data)
                    this.$router.push('/menu')
                })
        }
    }
}
</script>
<style>
    label{
        float: left;
    }
</style>
