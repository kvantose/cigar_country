import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';

import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/Aura';
import ComfirmationSerivce from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
const currentEnv = import.meta.env.VITE_NODE_ENV;

const myPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
});

async function main() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);
  app.use(PrimeVue, {
    theme: {
      preset: myPreset,
    },
    ripple: true,
  });
  app.use(ToastService);
  app.use(ComfirmationSerivce);
  app.directive('tooltip', Tooltip);

  app.mount('#app');

  console.debug('Environment: ', currentEnv);
}

await main();
