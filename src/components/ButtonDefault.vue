<template>
  <Button :label="label" class="def__button"/>
</template>


<script setup lang="ts">
import Button from 'primevue/button';

const props = defineProps({
  label: String,
});

</script>

<style scoped>
.def__button {
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--background-link-hover);
  box-shadow: 0 0 10px 0 rgba(44, 238, 5, 0.5);
  outline: var(--background-link-hover) !important;
}

</style>
