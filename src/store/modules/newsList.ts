// defineStore
import { defineStore } from "pinia";
import axios from 'axios'

// 类型别名
type newsList={
  art_id:string
  aut_id:string
  aut_name:string
  title:string
  pubdate:string
  comm_count:number
  is_top:number
  cover:{
    type:number
    images:string[]
  }

}[]
type newsRes={
  data:{
    pre_timestamp:string,
    results:{
      art_id:string
      aut_id:string
      aut_name:string
      title:string
      pubdate:string
      comm_count:number
      is_top:number
      cover:{
        type:number
        images:string[]
      }

    }[]
  },
  message:string
}


const useNewListStore=defineStore('newsList',{
  state(){
    return {
      // 类型断言
      list:[] as newsList ,
 
    }
  },
  actions:{
    // 定义请求方法
    async getNewsList(id:number){
     const res=await axios.get<newsRes>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)
     console.log(res.data.data.results);
     this.list=res.data.data.results
     
    },
   
  },
  getters:{}
})
// 默认导出
export default useNewListStore