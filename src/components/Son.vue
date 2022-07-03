<template>
  <div>
    <h2>子组件</h2>
  </div>
  <div>父亲的礼物：{{house}}{{car}}</div>
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



</script>

<style scoped>

</style>