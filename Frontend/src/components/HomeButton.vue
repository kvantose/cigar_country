<template>
  <Button text class="text-xl" @click="homeClick"
        ><span class="font-bold text-white">Cigar</span
        ><span class="font-normal text-white">Country</span></Button
      >
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const homeClick = () => {

router.push({ name: 'home' });
};
</script>


<style lang="postcss" scoped>

</style>
