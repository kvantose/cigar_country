<template>
  <div class="home">
    <div id="news_feed" v-for="item in newsFeed" :key="item.id"
      v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-scaleout' }">
      <div id="news_feed__item" class="flex flex-col justify-between gap-5 animate-duration-1000 animate-ease-in-out">
        <p id="news_feed__title" class="font-bold text-3xl">{{ item.title }}</p>
        <p id="news_feed__date" class="italic text-lg">{{ item.date }}</p>
        <div id="news_feed__content__container" class="flex flex-col gap-9 p-5">
          <p id="new__feed__content" class="text-2xl">{{ item.content }}</p>
          <img id="news_feed__img" :src="item.img" alt="news image">
        </div>
        <div class="flex gap-5">
          <i @click=handleLike(item.id) id="news_feed__icon" class="pi pi-heart"
            :class="{ 'bg-red-500': likedItems[item.id] }">{{ item.likes }}</i>
          <i @click="handleOpenComments(item.id)" id="news_feed__icon" class="pi pi-comment">{{ item.comment }}</i>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="commentsOpen" class="dialog__comments" :style="{ width: '90%', height: '100vh' }">
    <div class="flex flex-col gap-5 h-full position-relative">
      <i @click="commentsOpen = false" class="pi pi-times absolute right-0 top-0 p-3 text-2xl cursor-pointer"></i>
      <div class="flex flex-col">
        <p class="font-bold text-2xl">{{ currentItem?.title }}</p>
        <p id="new__feed__content" class="p-3 text-lg font-light">{{ currentItem?.content.match(/.{1,150}/)?.[0] }}...</p>
      </div>
      <div class="flex gap-3 flex-col">
        <InputText v-model="inputComment" placeholder="Write your comment" />
        <ButtonDefault label="Send comment" />
      </div>
      <div class="flex p-10 flex-col h-full gap-3 items-center bg-gray-800">
        <p>Комментариев пока нет...</p>
      </div>
    </div>
  </Dialog>
  <Footer />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Footer from '@/components/FooterDefault.vue';
import { newsFeed } from '@/mock/news-feed';
import 'primeicons/primeicons.css'
import Dialog from 'primevue/dialog';
import InputText from '@/components/InputText.vue';
import ButtonDefault from '@/components/ButtonDefault.vue';


const inputComment = ref<null | string>(null);
const likedItems = ref<Record<number, boolean>>({});
const commentsOpen = ref(false);
const currentId = ref<number | null>(null);
const currentItem = computed(() => {
  return newsFeed.find(item => item.id === currentId.value)
});
const handleLike = (id: number) => {
  const item = newsFeed.find(item => item.id === id);
  if (!item) return;

  if (likedItems.value[id]) {
    item.likes -= 1;
    likedItems.value[id] = false;
  } else {
    item.likes += 1;
    likedItems.value[id] = true;
  }
};

const handleOpenComments = (id: number) => {
  if (commentsOpen.value) {
    commentsOpen.value = false;
    currentId.value = null
  } else {
    commentsOpen.value = true;
    currentId.value = id
  }
}


</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px var(--section-gap);
  overflow-y: hidden;
}


#news_feed__item {
  height: 100%;
  transition: all 0.2s ease;
}

#news_feed {
  background-color: var(--color-background-mute);
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.5s ease;

}

#news_feed__img {
  max-height: 400px;
  object-fit: cover;
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

@media screen and (max-width: 950px) {
  .home {
    padding: 20px;
  }

  #news_feed {
    flex-direction: column;
    gap: 10px;
  }

  /* #news_feed__item {
    gap: 5px;
  } */

  #news_feed__title {
    font-size: 1rem;
    line-height: 25px;
  }

  #news_feed__date {
    font-size: 0.6rem;
    line-height: 0px;
  }

  #new__feed__content {
    font-size: 0.8rem;
    line-height: 25px;
  }

  #news_feed__content__container {
    padding: 0;
  }

  /* #news_feed__img {
    height: 50px;
  } */

}
</style>
