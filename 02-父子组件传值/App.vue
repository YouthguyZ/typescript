<template>
  <div>
    <h1>我是 App 组件</h1>
  </div>
  <Son :house="house" @giveGift="giveGift"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son from './components/Son.vue';

const house=ref('大别墅')
const giveGift=(gift:string)=>{
  console.log('父亲收到了礼物:'+gift);
  
}
</script>

<style scoped>

</style>