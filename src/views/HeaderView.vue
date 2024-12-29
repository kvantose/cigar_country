<template>
  <header>
    <Menubar
      v-if="!loading"
      exact
      id="header"
      :model="menuItems"
      breakpoint="950px"
      style="background-color: var(--surface-900)"
      class="text-gray-400 p-1 border-none border-noround-bottom"
    >
      <template #start>
        <Button class="text-xl p-0" @click="homeClick">
          <template #default>
            <span class="font-bold text-white">Cigar</span
            ><span class="font-normal text-white">Country</span>
          </template>
        </Button>
      </template>

      <template #item="{ item, props, hasSubmenu }">
        <RouterLink
          v-if="item.route"
          v-slot="{ navigate, isActive, isExactActive }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            :class="[
              'p-menuitem-link',
              'text-lg p-2',
              { 'router-link-active': isActive },
              isExactActive && 'router-link-exact-active',
            ]"
            tabindex="-1"
            data-pc-section="action"
            @click="navigate"
            @click.middle="openNewTab(item)"
            @contextmenu="openContextMenu($event, item)"
          >
            <span v-if="item.icon" :class="item.icon" />
            <span class="p-menuitem-text" data-pc-section="label">{{ item.label }}</span>
          </a>
        </RouterLink>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
          :class="['text-lg p-2']"
        >
          <span :class="item.icon" />
          <span class="ml-2 p-menuitem-text" data-pc-section="label">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <Button
          rounded
          @click="toggleAccountMenu"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        ></Button>
      </template>
    </Menubar>

    <div
      v-else
      class="flex items-center gap-3"
      style="background-color: var(--surface-900)"
      id="header"
    >
      <Button text class="text-xl" @click="homeClick"
        ><span class="font-bold text-white">Cigar</span
        ><span class="font-normal text-white">Country</span></Button
      >
      <div class="flex items-center justify-between w-full">
        <Skeleton class="w-full flex-grow-1" height="2rem"></Skeleton>
        <Skeleton class="flex-grow-0" height="2rem" width="40px"></Skeleton>
      </div>
    </div>
    <ContextMenu ref="menu" :model="contextMenuItems" />
    <Menu ref="account_menu" :model="accountMenuItems" :popup="true" id="overlay_menu"></Menu>
  </header>
</template>

<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';

import Menubar from 'primevue/menubar';

const router = useRouter();

const menuItems = computed<MenuItem[]>(() => {
  return [
    {
      label: 'Home',
      url: '/',
      icon: 'pi pi-home',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
  ];
});

const homeClick = () => {
  router.push({ name: 'home' });
};

const openNewTab = (menuItem: MenuItem) => {
  const routeData = router.resolve(menuItem.route);
  window.open(routeData.href, '_blank');
};

const openContextMenu = (event: MouseEvent, item: MenuItem) => {
  selectedMenuItem.value = item;
  menu.value!.show(event);
};

const menu = useTemplateRef('menu'),
  selectedMenuItem = ref<MenuItem | null>(null),
  contextMenuItems = ref<MenuItem[]>([
    {
      label: 'Открыть в новой вкладке',
      icon: 'pi pi-external-link',
      command: () => openNewTab(selectedMenuItem.value!),
    },
  ]),
  loading = ref(true);

const accountMenu = useTemplateRef('account_menu'),
  accountMenuItems = ref<MenuItem[]>([
    {
      label: 'Профиль',
      icon: 'pi pi-user',
      command: () => {
        router.push({ name: 'account' });
      },
    },
    {
      label: 'Мой хьюмидор',
      icon: 'pi pi-cog',
      command: () => {
        //TODO добавить айдишник пользователя
        router.push({ name: 'account', params: {} });
      },
    },
    {
      label: 'Выход',
      icon: 'pi pi-sign-out',
      command: () => {
        router.push({ name: 'login' });
      },
    },
  ]),
  toggleAccountMenu = (event: MouseEvent) => {
    accountMenu.value?.toggle(event);
  };

onMounted(() => {
  // setTimeout(() => {
  //   loading.value = false;
  // }, 5000);
});
</script>

<style scoped>
#header {
  max-height: 60px !important;
  min-height: 60px !important;
  height: 60px !important;
}

/* .p-menubar :deep(*) {
  color: var(--gray-400);
  background: var(--surface-900);
}

.p-menubar :deep(.p-menubar-root-list) {
  padding: 0 1.5rem;
  margin: 0;
}

:deep(.p-menubar-root-list) {
  justify-self: start;
}

:deep(.p-menubar-end) {
  margin-left: auto;
}

:deep(.router-link-active) {
  font-weight: 900;
  text-decoration: underline;
}

.p-menuitem-link {
  padding: 0.5rem;
}

:deep(.p-submenu-list) {
  z-index: 2;
}

@media screen and (min-width: 950px) {
  :deep(.p-menubar-root-list) {
    justify-content: space-between;
  }
} */
</style>
