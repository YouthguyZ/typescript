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

import { ref } from 'vue';

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
//-----------------------------------------------------------
// 类型推断
const msg=ref('你的世界')
const msg1=ref<string>()
// 设置一个引用数据类型的数据
// type TodoList = {
//   id: number,
//   name: string,
//   done: boolean
// }[]
// const list = ref<TodoList>([
//   { id: 1, name: '吃饭', done: false },
//   { id: 2, name: '睡觉', done: true },
//   { id: 3, name: '打刘狄威', done: false }
// ])
// 设置一个引用数据类型的数据
type Todo = {
  id: number,
  name: string,
  done: boolean
}
const list = ref<Todo[]>([
  { id: 1, name: '吃饭', done: false },
  { id: 2, name: '睡觉', done: true },
  { id: 3, name: '打刘狄威', done: false }
])

let obj: Todo = list.value[0]

// list.value[0].id

// list.value = []
// 开发中更建议使用 ref 来定义变量
// 如果使用 reactive 更新数据时需要注意丢失响应式的问题

// 计算属性 => 在绝大部分场景下都不需要手动指定类型, 会类型推导
// const leftCount = computed<number>(() => {
//   return list.value.filter(item => !item.done).length
// })

// console.log(leftCount.value)

// 事件类型
const hClick = (e: MouseEvent) => {
  // console.log(e) // 查看事件对象的类型
  console.log(e.pageX, e.pageY)
}

// DOM 中的 ref
const img = document.createElement('img')
const automan = ref<HTMLImageElement | null>(null)
const hGetAutoman = () => {
  // 获取图片没问题
  // console.log(automan.value)
  // 新增需求: 点击后修改图片地址
  if (automan.value) {
    automan.value.src = ''
  }
}
</script>

<style scoped>

</style>