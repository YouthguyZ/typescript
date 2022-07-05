<script lang="ts" setup>
import { watch } from 'vue';
import useStore from '../store'
const {channel,newsList} =useStore()
// newsList.getNewsList(channel.active)
watch(()=>channel.active,()=>{
newsList.getNewsList(channel.active)

})
</script>

<template>
  <div className="list">
    <div className="article_item" v-for="item in newsList.list" :key="item.art_id">
      <h3 className="van-ellipsis">{{item.title}}</h3>
      <div className="img_box">
        <img
          :src="item.cover?.images?.[0] || 'http://geek.itheima.net/resources/images/11.jpg'"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
