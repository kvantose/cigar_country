import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', {
  state: () => ({
    user: {} as User,
  }),
  getters: {},
  actions: {},
});

type User = {
  login: string;
  nickname: string;
  firstName: string;
  lastName: string;
  city: string;
};
