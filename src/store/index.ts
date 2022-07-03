// 中转站 所有模块都导入这里
import useChannelStore from "./modules/channel";
// 再默认导出
export default function(){
  return {
    channel:useChannelStore()
  }
}