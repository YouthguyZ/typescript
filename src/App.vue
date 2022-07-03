<template>
  <div>
    <h1>我是 App 组件</h1>
  </div>
  <Son :house="house"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son from './components/Son.vue';

const house=ref('大别墅')
</script>

<style scoped>

</style>