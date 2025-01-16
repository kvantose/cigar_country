<template>
  <InputText :v-model="model" :placeholder="placeholder" class="input__text" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

const props = defineProps({
  model: String,
  placeholder: String,
});

const value = ref<null | string>(null);
</script>

<style scoped>
.input__text {
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
}

.input__text:focus	 {
  box-shadow: 0 0 10px 0 rgba(44, 238, 5, 0.5) !important;
  outline: var(--background-link-hover) !important;
}

</style>
