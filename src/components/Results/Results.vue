<script setup lang="ts">
import RepoInfo from './RepoInfo.vue';
	const resultsMocked = [
		{
			name: 'repo 1',
			author: 'author 1',
			description: 'description 1',
			stars : 3,
			forks: '12'
		},
		{
			name: 'repo 2',
			author: 'author 2',
			description: 'description 2',
			stars : 4,
			forks: '123'
		},
		{
			name: 'repo 3',
			author: 'author 3',
			description: 'description 3',
			stars : 2,
			forks: '10'
		}
	]
</script>

<template>
	<div class="results">
		<div  v-for="(result, index) in resultsMocked" :key="index" >
			<RepoInfo :repository="result"></RepoInfo>
			<hr v-if="index !== resultsMocked.length - 1">
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/index.scss';
	.results {
		width: 100%;
		border-radius: 50px;
		background-color: $background-color-secondary;
		padding: 10px 30px;
	}
</style>
