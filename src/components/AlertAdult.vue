<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <div class="flex justify-center flex-col gap-5">
      <div id="alert__age" class="text-center font-bold text-3xl">18+</div>
      <p class="p-3 text-center">Сайт содержит изображение табачной продукции.
        Для доступа на сайт вы должны подтвердить свой возраст.
        Сайт содержит информацию только для совершеннолетних.</p>
      <p class="p-3 text-center font-bold text-3xl">Вам есть 18 лет?</p>
      <div class="w-full flex justify-center gap-9">
        <Button id="alert__btn" label="Да" class="p-button-success" @click="visible = false" />
        <Button id="alert__btn" label="Нет" class="p-button-danger" @click="navToGoogle" />
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Dialog from 'primevue/dialog';

const visible = ref(false);

onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, 3000);
})

const navToGoogle = () => {
  window.location.href = "https://www.google.com";
}
</script>

<style>
.p-dialog-header-actions {
  display: none !important;
}
#alert__age {
  color: red;
}

#alert__btn {
  padding: 10px 30px;
}

#alert__btn:hover {
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.5);
}
</style>
