<template>
  <footer>
    <div id="footer" class="flex justify-between items-center p-4 w-full">
      <HomeButton />
      <div id="footer__links" class="flex gap-5">
        <a href="/" class="footer__link">Лента</a>
        <a href="/" class="footer__link">Каталог</a>
        <a href="/" class="footer__link">Админка</a>
      </div>
      <div id="footer__copyright">
        <p>Copyright &copy; {{ date }}</p>
        <p>Все права защищены</p>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
import HomeButton from './HomeButton.vue';
const date = new Date().getFullYear();
</script>

<style>
#footer {
  background-color: var(--color-background-mute);
}

.footer__link {
  padding: 10px 20px;
  color: var(--color-text);
}

.footer__link:hover {
  background-color: var(--background-link-hover);
  color: var(---color-background-mute);
  transition: all 0.3s ease-in-out;
}

.footer__link:active {
  scale: 0.9;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 950px) {
  #footer {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  #footer__links {
    flex-direction: column;
    align-items: start;
    gap: 0px;
  }

  #footer__copyright {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}
</style>
