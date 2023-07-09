<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="test">
  <header>
    <div class="wrapper">
      <nav class="wrapper__nav">
		<RouterLink to="/"><img alt="Proper logo" class="logo" src="@/assets/images/proper-logo.svg" /></RouterLink>
		<div class="wrapper__nav-links">
			<RouterLink class="wrapper__nav-element" to="/">Explorer</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/debugging">Networking / Debugging</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/typing">Typing challenge</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/about">About</RouterLink>
		</div>
      </nav>
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
.wrapper {
	max-width: 1000px;
	margin: 20px auto;
	padding: 0 40px;

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__nav-links {
		height: 56px;
		display: flex;
		align-items: center;
	}

	&__nav-element {
		color: $text-color-secondary;
		font-size: 18px;
		margin: 0 16px;
		text-decoration: none;
	}
}
</style>
