import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
// export var store = new Vuex.Store({
//     state:{//状态库/数据源
//       // 表示当前的菜品数组
//       menuItems:[],
//       // 当前的用户名
//       currentUser:null,
//       // 当前的登陆状态
//       isLogin:false
//     },
//     getters:{//派生状态的数据源
//       // 最好不要直接去操作state里的值
//       getMenuItems:state=>state.menuItems,
//       currentUser:state=>state.currentUser,
//       // isLogin:function(state){return state.isLogin}
//       isLogin:state=>state.isLogin
//     }, 
//     mutations:{//更改Vuex中store的状态值state
      
//       //通过set方法实现get请求数据后的更新
//       setMenuItems(state,data){//state当前状态值，data表示从组件传递的参数
//         state.menuItems=data
//       },
//       //通过push方法实现newPizza页面的post数据让当前数据发生更新
//       pushMenuItems(state,data){
//          state.menuItems.push(data)
//       },
//       //通过delete方法实现newMenu页面的删除数据功能
//       deleteMenuItems(state,data){
//         state.menuItems.forEach((item,index)=>{
//           if(item==data){
//              state.menuItems.splice(index,1) 
//           }  
//         })
//       },
//       UserStatus(state,data){
//         if(data){
//           state.currentUser=data
//           state.isLogin=true
//         }else{
//           state.currentUser=null
//           state.isLogin=false
//         }
//       }   
//     },
//     actions:{//触发多个state的操作，使用mutations会触发时更好维护，
//       // 但如果mutations过多就需要用actions来触发了
//       // 必须要通过dispatch进行分发
//       setUser({commit},user){
//         commit('UserStatus',user)
//       } 
//     }
//   })
  