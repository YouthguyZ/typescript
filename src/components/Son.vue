<template>
  <div>
    <h2>子组件</h2>
  </div>
  <div>父亲的礼物：{{house}}{{car}}</div>
  <button @click="change">回增礼物</button>
</template>

<script setup lang="ts">
// 非 ts 语法 接受父组件传参
// defineProps({
//   house:{
//     type:String,
//     required:true
//   }
// })

// ts 写法
// 使用ts的泛型指令props类型
defineProps<{house:string,car?:string}>()
//----------------------------------------------------------
// const emit=defineEmits(['giveGift'])
// const change=()=>{
//   emit('giveGift','儿媳妇')
// }

// ts defineEmits
const emit=defineEmits<{(e:'giveGift',gift:string):void}>()
const change=()=>{
  emit('giveGift','一个儿媳妇')
}

</script>

<style scoped>

</style>