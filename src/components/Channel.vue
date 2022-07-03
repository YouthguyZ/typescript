<script lang="ts" setup>
// 导入 pinia
import useStore from '../store/index'
const {channel}=useStore()
// 使用方法
channel.getChannel()
 
</script>

<template>
  <ul class="catagtory">
    <li class="select" v-for="item in channel.list" :key="item.id">{{item.name}}</li>
    
  </ul>
</template>

<style scoed lang="less"></style>
