<template>
  <div>
    <h1>Account</h1>
    <Card>
      <FloatLabel>
        <InputText :value="'nickname'" id="account_nickname" />
        <label for="account_nickname">Никнейм</label>
      </FloatLabel>
      <FloatLabel>
        <InputText :value="'fname'" id="account_fname" />
        <label for="account_fname">Имя</label>
      </FloatLabel>
      <FloatLabel>
        <InputText :value="'lname'" id="account_lname" />
        <label for="account_lname">Фамилия</label>
      </FloatLabel>
      <FloatLabel>
        <InputText :value="'city'" id="account_city" />
        <label for="account_city">Город</label>
      </FloatLabel>
      <!-- <FloatLabel >
          <InputText :value="'name'"/>
        </FloatLabel>
        <FloatLabel >
            <InputText :value="'name'"/>
          </FloatLabel> -->
    </Card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
