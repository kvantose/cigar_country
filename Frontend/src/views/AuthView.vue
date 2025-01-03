<template>
  <div
    class="flex items-center justify-center bg-[linear-gradient(-225deg,var(--p-primary-50),var(--p-primary-100)_48%,var(--p-primary-200))] px-6 py-20 md:px-12 lg:px-20 dark:bg-[linear-gradient(-225deg,var(--p-primary-800),var(--p-primary-900)_48%,var(--p-primary-950))]"
  >
    <div
      class="rounded-xl bg-[rgba(255,255,255,0.1)] p-12 text-center shadow backdrop-blur-md lg:w-[30rem]"
    >
      <div class="mb-12 text-4xl font-medium">Добро пожаловать</div>
      <FloatLabel variant="in">
        <InputText
          type="text"
          class="!mb-6 !w-full !bg-white/10 !p-4 !text-xl"
          id="auth_email"
          v-model="login"
        />

        <label for="auth_email" class="!text-white/90">Электронная почта</label>
      </FloatLabel>
      <FloatLabel variant="in">
        <Password
          v-model="plainPassword"
          toggleMask
          fluid
          promptLabel="Введите пароль"
          class="!mb-6 !w-full !bg-white/10 !text-xl"
          id="auth_password"
          :feedback="false"
        />
        <label for="auth_password" class="!text-white/90">Пароль</label>
      </FloatLabel>
      <button
        type="button"
        class="text-primary-contrast/80 mb-6 w-full max-w-40 cursor-pointer appearance-none rounded-full border-0 bg-white/30 p-4 text-xl font-medium outline-0 transition-colors duration-150 hover:bg-white/40 active:bg-white/20"
      >
        Войти
      </button>
      <a class="text-primary-contrast block cursor-pointer text-center font-medium"
        >Забыли пароль?</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { storeToRefs } from 'pinia';
import InputText from 'primevue/inputtext';

const accountStore = useAccountStore();
const { login, plainPassword, getEncryptedPassword } = storeToRefs(accountStore);
</script>
<style lang="postcss">
#auth_password {
  input {
    @apply !bg-white/10;
  }
}
</style>
