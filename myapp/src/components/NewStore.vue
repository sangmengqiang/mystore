<template>
    <table class="table text-center">
    <thead class="thead-dark">
      <h1>仓库</h1>  
        <tr>
        <th scope="col">编号</th>
        <th scope="col">名称</th>
        <th scope="col">销毁</th>
        </tr>
    </thead>
    <tbody v-for="(item,index) in items" :key="index">
        <tr>
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
            <button class="btn btn-danger" @click="delItem(item)">Delete</button>
        </td>
        </tr>
    </tbody>
    </table>
</template>
<script>
import axios from 'axios';
export default {
    name:'NewStore',
    data(){
        return{
            // items:[]
        }
    },
    mounted(){
        var that = this
        axios.get('./menu-smq.json')
        .then(res=>{
            console.log(res.data)

            var menus = []
            for(var key in res.data){
                console.log(key)
                var item = res.data[key]
                item.id=key
                // that.items.push(item)
                // 用当前的menu来实现数据的管理
                menus.push(res.data[key])
            }
            console.log(menus)

            that.$store.commit('setMenuItems',menus)
            
            
        })
    },
    methods:{
        delItem(item){
            axios.delete('./menu-smq/'+item.id+'.json')
            .then(res=>{
                console.log('删除成功')
                // this.$router.push('/menu')
                this.$store.commit('deleteMenuItems',item)
            })
        }
    },
    computed:{
        items(){
            return this.$store.getters.getMenuItems
        }
    }
}
</script>
<style>


</style>


