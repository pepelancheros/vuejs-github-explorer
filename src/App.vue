<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="test">
  <header>
    <div class="wrapper">
      <nav class="wrapper__nav-desktop">
		<RouterLink to="/"><img alt="Proper logo" class="logo" src="@/assets/images/proper-logo.svg" /></RouterLink>
		<div class="wrapper__nav-links">
			<RouterLink class="wrapper__nav-element" to="/">Explorer</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/debugging">Networking / Debugging</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/typing">Typing challenge</RouterLink>
			<RouterLink class="wrapper__nav-element" to="/about">About</RouterLink>
		</div>
      </nav>
	  <v-app app class="wrapper__nav-mobile">
			<v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex wrapper__nav-icon"></v-app-bar-nav-icon>
			<RouterLink to="/" class="wrapper__logo-mobile"><img alt="Proper logo" src="@/assets/images/proper-logo.svg" /></RouterLink>
			<v-navigation-drawer v-model="drawer" absolute temporary class="wrapper__nav-links-mobile">
				<RouterLink class="wrapper__nav-element wrapper__nav-element--mobile" to="/">Explorer</RouterLink>
				<RouterLink class="wrapper__nav-element wrapper__nav-element--mobile" to="/debugging">Networking / Debugging</RouterLink>
				<RouterLink class="wrapper__nav-element wrapper__nav-element--mobile" to="/typing">Typing challenge</RouterLink>
				<RouterLink class="wrapper__nav-element wrapper__nav-element--mobile" to="/about">About</RouterLink>
			</v-navigation-drawer>
		</v-app>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
	export default {
		name: 'app',
		data() {
			return {
				drawer: false,
				tab: null,
			}
		},
	}
</script>

<style lang="scss">
@import './assets/index.scss';
body {
	background-color: $background-color;
	color: $text-color-primary;
}

.wrapper__nav-mobile .v-application__wrap {
	display: flex;
    flex-direction: row;
}

.v-navigation-drawer__content {
	display: flex;
	flex-direction: column;
}
</style>

<style lang="scss" scoped>
@import './assets/index.scss';
.wrapper {
	max-width: 1000px;
	margin: 20px auto;
	padding: 0 40px;

	&__nav-desktop {
		display: none;
	}

	&__nav-links {
		height: 56px;
		display: flex;
		align-items: center;
	}

	&__nav-element {
		color: $text-color-secondary;
		font-size: 16px;
		margin: 0 16px;
		text-decoration: none;

		&--mobile {
			margin: 20px;
		}
	}

	&__logo-mobile {
		height: min-content;
		width: 100%;
		text-align: center;
		margin: 0 -40px;
	}

	&__nav-mobile {
		height: 50px;
		background-color: $background-color;
	}

	&__nav-icon {
		color: $text-color-secondary;
	}

	&__nav-links-mobile {
		background-color: $background-color;
		color: $text-color-primary;
	}
}

// styles for tablet size (768px) and higher
@media all and (min-width: 48em) {
	.wrapper {
		&__nav-desktop {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__nav-mobile {
			display: none;
		}
	}
}
</style>
