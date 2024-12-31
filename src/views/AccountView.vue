<template>
  <div class="flex h-full flex-col justify-between">
    <Card class="h-full p-3">
      <template #header>
        <span class="text-xl font-semibold">Профиль</span>
      </template>
      <template #content>
        <div
          class="flex h-4/6 flex-row place-items-stretch gap-y-4 md:mx-auto md:w-1/2 md:columns-2"
        >
          <!-- <FloatLabel variant="over"> -->
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_nickname">Никнейм</label>
            <InputText :value="user.nickname" id="account_nickname" />
          </div>
          <!-- </FloatLabel> -->
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_fname">Имя</label>
            <InputText :value="user.firstName" id="account_fname" />
          </div>
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_lname">Фамилия</label>
            <InputText :value="user.lastName" id="account_lname" />
          </div>
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_city">Город</label>
            <InputText :value="user.city" id="account_city" />
          </div>
          <div class="flex w-full items-start justify-between gap-x-3">
            <label for="account_photo">Аватар</label>
            <div class="">
              <FileUpload
                mode="basic"
                accept="image/*"
                @upload=""
                :auto="false"
                id="account_photo"
                class=""
              />
            </div>
          </div>
          <div class="mt-3 flex flex-shrink items-start justify-end">
            <Button severity="success"
              ><Icon
                icon="heroicons-outline:check-circle"
                width="24"
                height="24"
                class="text-slate-700"
              />Сохранить</Button
            >
          </div>
          <!-- <FloatLabel >
          <InputText :value="'name'"/>
        </FloatLabel>
        <FloatLabel >
            <InputText :value="'name'"/>
          </FloatLabel> -->
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';

const accountStore = useAccountStore();
const { user } = storeToRefs(accountStore);
user.value = {
  city: 'test city',
  firstName: 'test first name',
  lastName: 'test last name',
  login: 'test login',
  nickname: 'test nickname',
};
</script>
<style scoped></style>
