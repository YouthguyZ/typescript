// defineStore
import { defineStore } from "pinia";
import axios from 'axios'
// 按需导入声明类型
import { channelList, channels } from "../../types";

// type 类型别名
// type channelList={
//   id:number
//   name:string
// }[]

// type channels={
//   data:{
//     channels:channelList
//   },
//   message:string
// }
const useChannelStore=defineStore('channel',{
  state(){
    return {
      // 类型断言
      list:[] as channelList,
      active:-1
    }
  },
  actions:{
    // 定义请求方法
    async getChannel(){
     const res=await axios.get<channels>('http://geek.itheima.net/v1_0/channels')
     console.log(res.data.data.channels);
     this.list=res.data.data.channels
     this.active=res.data?.data?.channels?.[0]?.id
    },
    changeActive(active:number){
      this.active=active

    }
  },
  getters:{}
})
// 默认导出
export default useChannelStore