<script setup lang="ts">
import RepoInfo from './RepoInfo.vue';
	const props = defineProps({
		searchQuery: String,
		sortElement: String,
		sortOrder: String
	})
</script>

<template>
	<div class="results">
		<div v-if="repositories.length">
			<div  v-for="(result, index) in repositories.slice(page -1, page + 3)" :key="index" >
				<RepoInfo :repository="result"></RepoInfo>
				<hr>
			</div>
			<v-pagination
				v-model="page"
				:length="4"
				rounded="circle"
			></v-pagination>
		</div>
		<div v-else class="results__empty-search">
			<p>Type a keyword of the repository you want to find in the above search bar</p>
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

		&__empty-search {
			margin: 100px 0;
			text-align: center;
		}
	}
</style>

<script lang="ts">
	export default {
		name: 'explorerView',
		data() {
			return {
				repositories: [],
				page: 1
			}
		},   
		methods: {
			async getSearchResult() {
				try {
					if (this.searchQuery) {
						let endpoint = "https://api.github.com/search/repositories"
						let sortQueries = ''
						if (this.sortOrder) {
							sortQueries = '&sort=' + this.sortElement + '&order=' + this.sortOrder
						}
						let endpointWithQueries = endpoint + "?q=" + this.searchQuery + sortQueries
						console.log('endpointWithqueries: ', endpointWithQueries)
						let response = await fetch(endpointWithQueries)
						let responseJSON = await response.json();
						this.repositories = responseJSON.items
						console.log('repositories: ', this.repositories[0].name)
					}
				} catch (error) {
					console.log(error);
				}
			}
		},

		watch: {
			searchQuery: function () {
				this.getSearchResult()
			},
			sortOrder: function() {
				this.getSearchResult()
			}
		},

		created() {
			this.getSearchResult();
		}
	}
</script>