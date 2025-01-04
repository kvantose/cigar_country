<template>
  <header id="header">
    <Menubar
      v-if="!loading"
      exact
      :model="menuItems"
      breakpoint="950px"
      style="background-color: var(--surface-900)"
      class="!rounded-none !border-b-white p-1 text-gray-400"
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
            <Icon v-if="item.icon" :icon="item.icon" />
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
          <Icon v-if="item.icon" :icon="item.icon" />
          <span class="p-menuitem-text ml-2" data-pc-section="label">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <!-- <Button
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
        > -->
        <Avatar
          image="/my_avatar.JPEG"
          shape="circle"
          size="large"
          @click="toggleAccountMenu"
          @click.right="
            (event:MouseEvent) => {
              event.preventDefault();
              toggleAccountMenu(event);
            }
          "
        ></Avatar>
        <!-- </Button> -->
      </template>
    </Menubar>

    <div v-else class="flex items-center gap-3 p-4 pt-2">
      <HomeButton />
      <div class="flex w-full items-center justify-between">
        <Skeleton class="flex-grow-1 w-full" height="2rem"></Skeleton>
      </div>
    </div>
    <ContextMenu ref="menu" :model="contextMenuItems" />
    <Menu ref="account_menu" :model="accountMenuItems" popup id="overlay_menu">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <Icon v-if="item.icon" :icon="item.icon" />
          <span>{{ item.label }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="border-surface bg-emphasis text-muted-color ml-auto rounded border p-1 text-xs"
            >{{ item.shortcut }}</span
          >
        </a>
      </template>
    </Menu>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
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
      icon: 'fluent:news-16-regular',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
    {
      label: 'Каталог',
      url: '/',
      icon: 'tdesign:catalog',
      visible: true,
      command: () => {
        router.push({ name: '/' });
      },
    },
    {
      label: 'Админка',
      url: '/',
      icon: 'eos-icons:admin-outlined',
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
      icon: 'heroicons-outline:user-circle',
      command: () => {
        router.push({ name: 'account' });
      },
    },
    {
      label: 'Мой хьюмидор',
      icon: 'heroicons-outline:archive-box',
      command: () => {
        //TODO добавить айдишник пользователя
        router.push({ name: 'humidor', params: {} });
      },
    },
    {
      label: 'Выход',
      icon: 'material-symbols:logout-rounded',
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

<style scoped lang="postcss">
#header {
  height: 60px !important;
  min-height: 60px !important;
  /*max-height: 60px !important;*/
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
