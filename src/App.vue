<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="test">
  <header>
    <img alt="Proper logo" class="logo" src="@/assets/images/proper-logo.svg" />

    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import './assets/index.scss';
body {
	background-color: $background-color;
	color: $text-color-primary;
}
</style>

<style lang="scss" scoped>
@import './assets/index.scss';
.logo {
	margin: 50px auto;
    display: block;
}
</style>
