import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
export var store = new Vuex.Store({
    state:{//状态库/数据源
      menuItems:[]
    },
    getters:{//派生状态的数据源
      getMenuItems:state=>state.menuItems
    }, 
    mutations:{
      setMenuItems(state,data){
        state.menuItems=data
      },
      pushMenuItems(state,data){
         state.menuItems.push(data)
      },
      //通过delete方法实现newMenu页面的删除数据功能
      deleteMenuItems(state,data){
        state.menuItems.forEach((item,index)=>{
          if(item==data){
             state.menuItems.splice(index,1) 
          }  
        })
      }  
    },
    actions:{
      
    }
  })
  