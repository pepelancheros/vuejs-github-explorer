<script setup lang="ts">
import Results from '../components/Results/Results.vue'
</script>

<template>
  <main>
	<div class="explorer">
		<h2 class="explorer__title">GitHub Explorer</h2>
		<v-text-field class="explorer__search-field" label="search for a repository name" prepend-icon="mdi-magnify"></v-text-field>
		<Results class="explorer__results"></Results>
	</div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/index.scss';
	.explorer {
		max-width: 1000px;
		margin: 80px auto;

		&__title {
			text-align: center;
			margin-bottom: 24px;
			font-size: 48px;
		}

		&__search-field {
			margin-bottom: 40px;
		}
	}
</style>
