// import bcrypt from 'bcryptjs';
import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', {
  state: () => ({
    user: {} as CigarUser,
    login: '',
    plainPassword: '',
    encryptedPassword: '',
  }),
  getters: {
    getEncryptedPassword: (state) => {
      if (!state.plainPassword) {
        return '';
      }

      // const hash = bcrypt.hashSync(state.plainPassword, 10);
      // return hash;
      return '';
    },
  },
  actions: {
    encrypt(pass: string) {
      if (!pass) {
        return '';
      }
      // const hash = bcrypt.hashSync(pass, 10);
      // return hash;

      return '';
    },
    async saveProfile() {
      return true;
    },
  },
});

type CigarUser = {
  login: string;
  nickname: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  avatar?: string;
};

export type { CigarUser };
