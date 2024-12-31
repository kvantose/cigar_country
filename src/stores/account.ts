import bcrypt from 'bcryptjs';
import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', {
  state: () => ({
    user: {} as User,
    login: '',
    plainPassword: '',
    encryptedPassword: '',
  }),
  getters: {
    getEncryptedPassword: (state) => {
      if (!state.plainPassword) {
        return '';
      }

      const hash = bcrypt.hashSync(state.plainPassword, 10);
      return hash;
    },
  },
  actions: {
    encrypt(pass: string) {
      if (!pass) {
        return '';
      }
      const hash = bcrypt.hashSync(pass, 10);
      return hash;
    },
  },
});

type User = {
  login: string;
  nickname: string;
  firstName: string;
  lastName: string;
  city: string;
  avatar?: string;
};
