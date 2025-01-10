<template>
  <div class="home">
    <p class="text-4xl font-bold">Лента новостей</p>
    <div id="news_feed" class="flex justify-between items-center flex-row gap-5" v-for="item in newsFeed" :key="item.id">
      <div class="w-1/2 flex flex-col gap-3">
        <p class="font-bold text-2xl">{{ item.title }}</p>
        <p>{{ item.date }}</p>
        <p class="text-lg">{{ item.content }}</p>
        <div class="flex gap-3 flex-row items-center mt-3">
          <i @click="handleLike(item.id)" :style="liked ? 'background: red' : ''"  id="news_feed__icon"
            class="pi pi-heart">{{ item.likes }}</i>
          <i id="news_feed__icon" class="pi pi-comment">{{ item.comment }}</i>
        </div>
      </div>
      <div class="min-w-1/2">
        <img id="news_feed__img" class="w-full" :src="item.img" alt="news image">
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/components/FooterDefault.vue';
import { newsFeed } from '@/mock/news-feed';
import 'primeicons/primeicons.css'

const liked = ref(false);


const handleLike = (id: number) => {
  liked.value = !liked.value;
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
}

#news_feed {
  background-color: var(--color-background-mute);
  padding: 10px 20px;
  border-radius: 10px;
}

#news_feed__icon {
  cursor: pointer;
  font-size: 1.1rem;
  padding: 8px 15px;
  border-radius: 10px;
  display: flex;
  gap: 5px;
}

#news_feed__icon.pi-heart-fill {
  background-color: red;
}

@media screen and (max-width: 950px) {
  #news_feed {
    flex-direction: column;
  }
}
</style>
