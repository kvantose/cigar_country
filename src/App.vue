<script setup lang="ts">
import HeaderView from '@/views/HeaderView.vue';
import { ConfirmDialog, Toast } from 'primevue';
import { RouterView } from 'vue-router';
import AlertAdult from '@/components/AlertAdult.vue';
import "./assets/base.css"
</script>

<template>

  <AlertAdult />
  <HeaderView />
  <div class="container-fluid">
    <div id="mainSize" class="flex flex-row">
      <div class="col h-full w-full">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
  <Toast />
  <ConfirmDialog class="xl:w-6 lg:w-8 md:w-full sm:w-full" />
</template>

<style scoped>
#mainSize {
  /*header + footer + border*/
  max-height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
}
</style>
