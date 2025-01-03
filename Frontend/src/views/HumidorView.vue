<template>
  <Card class="h-full">
    <template #header>
      <span class="text-2xl">Мой хьюмидор</span>
    </template>
    <template #content> </template>
  </Card>
</template>
<script lang="ts" setup>
import { useHumidorStore } from '@/stores/humidor';

const humidorStore = useHumidorStore();
</script>
<style lang="postcss" scoped></style>
