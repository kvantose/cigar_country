<template>
  <header id="header">
    <Menubar
      v-if="!loading"
      exact
      :model="menuItems"
      breakpoint="950px"
      style="background-color: var(--surface-900)"
      class="border-noround-bottom border-none p-1 text-gray-400"
    >
      <template #start>
        <HomeButton />
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
              'p-2 text-lg',
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
          :class="['p-2 text-lg']"
        >
          <span :class="item.icon" />
          <span class="p-menuitem-text ml-2" data-pc-section="label">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <Button
          rounded
          @click="toggleAccountMenu"
          @click.right="
            (event) => {
              event.preventDefault();
              toggleAccountMenu(event);
            }
          "
          aria-haspopup="true"
          aria-controls="overlay_menu"
        ></Button>
      </template>
    </Menubar>

    <div v-else class="flex items-center gap-3 p-4 pt-2">
      <HomeButton />
      <div class="flex w-full items-center justify-between">
        <Skeleton class="flex-grow-1 w-full" height="2rem"></Skeleton>
      </div>
    </div>
    <ContextMenu ref="menu" :model="contextMenuItems" />
    <Menu ref="account_menu" :model="accountMenuItems" popup id="overlay_menu"></Menu>
  </header>
</template>

<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';

import HomeButton from '@/components/HomeButton.vue';
import Menubar from 'primevue/menubar';

const router = useRouter();

const menuItems = computed<MenuItem[]>(() => {
  return [
    {
      label: 'Лента',
      url: '/',
      icon: 'pi pi-home',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
    {
      label: 'Каталог',
      url: '/',
      icon: 'pi pi-home',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
    {
      label: 'Админка',
      url: '/',
      icon: 'pi pi-home',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
  ];
});

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
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style scoped>
#header {
  height: 60px !important;
  min-height: 60px !important;
  max-height: 60px !important;
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
