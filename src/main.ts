import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';

import Material from '@primevue/themes/material';
import ComfirmationSerivce from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
const currentEnv = import.meta.env.VITE_NODE_ENV;

async function main() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);
  app.use(PrimeVue, {
    theme: {
      preset: Material,
    },
  });
  app.use(ToastService);
  app.use(ComfirmationSerivce);
  app.directive('tooltip', Tooltip);
  app.directive('ripple', Ripple);

  app.mount('#app');

  console.debug('Environment: ', currentEnv);
}

await main();
