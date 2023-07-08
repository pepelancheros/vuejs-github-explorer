<script setup lang="ts">
import Results from '../components/Results/Results.vue'
</script>

<template>
  <main>
	<div class="explorer">
		<h2 class="explorer__title">GitHub Explorer</h2>
		<v-form
			v-model="form"
			@submit.prevent="onSubmit"
			class="explorer__form"
		>
			<v-text-field class="explorer__search-field" variant="underlined" v-model="searchQuery" label="search for a repository" prepend-icon="mdi-magnify"></v-text-field>
			<v-btn @click="onSubmit" class="explorer__search-button" size="x-large">Search</v-btn>

		</v-form>
		<Results class="explorer__results" :search-query="searchQuerySubmitted"></Results>
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
			color: $text-color-secondary;
		}

		&__form {
			display: flex;
		}

		&__search-field {
			margin-bottom: 40px;
			margin-right: 40px;
			color: $text-color-secondary;
		}

		&__search-button {
			background-color: $btn-background-color-primary;
			border-radius: 50px;
		}
	}
</style>

<script lang="ts">
  export default {
    data: () => ({
		form: false,
		searchQuery: '',
		searchQuerySubmitted: ''
    }),
	methods: {
		onSubmit () {
			this.searchQuerySubmitted = this.searchQuery
			if (!this.form) return
		},
	}
  }
</script>