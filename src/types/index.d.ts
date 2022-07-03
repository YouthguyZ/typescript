// 类型声明
// 按需导出声明类型
export type channelList={
  id:number
  name:string
}[]

export type channels={
  data:{
    channels:channelList
  },
  message:string
}