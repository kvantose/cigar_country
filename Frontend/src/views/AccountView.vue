<template>
  <div class="h-full">
    <Card class="h-full p-3">
      <template #header>
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold">Профиль</span>
          <Button v-if="!isEditMode" label="Редактировать" @click="editProfile"
            ><Icon icon="heroicons-outline:pencil"
          /></Button>
          <Button v-else @click="cancelEditProfile">
            <Icon icon="heroicons-outline:arrow-uturn-left" />
          </Button>
        </div>
      </template>
      <template #content>
        <div
          class="flex h-4/6 flex-col place-items-stretch gap-y-4 md:mx-auto md:w-1/2 md:columns-2"
        >
          <!-- <FloatLabel variant="over"> -->
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_nickname">Никнейм</label>
            <InputText :disabled="!isEditMode" :value="user.nickname" id="account_nickname" />
          </div>
          <!-- </FloatLabel> -->
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_fname">Имя</label>
            <InputText :disabled="!isEditMode" :value="user.firstName" id="account_fname" />
          </div>
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_lname">Фамилия</label>
            <InputText :disabled="!isEditMode" :value="user.lastName" id="account_lname" />
          </div>
          <div class="flex w-full items-center justify-between gap-x-3">
            <label for="account_city">Город</label>
            <InputText :disabled="!isEditMode" :value="user.city" id="account_city" />
          </div>
          <div class="flex w-full items-start justify-between gap-x-3">
            <label for="account_photo">Аватар</label>
            <div class="">
              <FileUpload
                :disabled="isEditMode"
                mode="basic"
                accept="image/*"
                :auto="false"
                id="account_photo"
                class=""
              />
            </div>
          </div>
          <div class="mt-3 flex flex-shrink items-start justify-end">
            <Button v-if="isEditMode" severity="success" @click="saveProfile"
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
import type { CigarUser } from '@/stores/account';
import { useAccountStore } from '@/stores/account';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { useToast } from 'primevue';
import { ref } from 'vue';

const toast = useToast();

const accountStore = useAccountStore();
const { user } = storeToRefs(accountStore);
user.value = {
  city: 'test city',
  firstName: 'test first name',
  lastName: 'test last name',
  login: 'test login',
  nickname: 'test nickname',
};

let userBeforeEdit: CigarUser;

const isEditMode = ref(false);

const saveProfile = async () => {
  await accountStore.saveProfile();
  isEditMode.value = false;

  toast.add({
    closable: true,
    detail: 'Сохранение профиля завершено',
    severity: 'success',
    summary: 'Успешно',
    life: 3000,
  });
};

const editProfile = () => {
  userBeforeEdit = user.value;
  isEditMode.value = true;
};

const cancelEditProfile = () => {
  isEditMode.value = false;
  user.value = userBeforeEdit;
};
</script>
<style scoped></style>
