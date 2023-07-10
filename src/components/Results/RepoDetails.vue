<script setup lang="ts">
import { computed } from 'vue'
	const props = defineProps({
		repository: {
			type: Object,
			required: true
		}
	})

	const updatedDate = computed(() => {
		const date = new Date(props.repository.updated_at)
		return date.toDateString()
	})
</script>

<template>
	<div class="details">
		<v-btn @click="$emit('close')" class="details__close-button" variant="text" icon="mdi-close" size="medium"></v-btn>
		<div class="details__main-info">
			<p class="details__name">Repository: <a target="_blank" rel="noopener" :href="repository.html_url">{{ repository.name }}</a></p>
			<p>Owner: <a target="_blank" rel="noopener" :href="repository.owner.html_url">{{ repository.owner.login }}</a></p>
		</div>
		<p class="details__date">Last Updated on: {{ updatedDate }}</p>
		<div class="details__contributors">
			<p class="details__contributors-title">contributors:</p>
			<v-container>
      			<v-row no-gutters>
        			<v-col :cols="contributorsCols" v-for="(contributor, index) in contributors" :key="index">
						<p> {{contributor.login }}</p>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</div>
</template>


<script lang="ts">
	export default {
		name: 'RepoDetails',
		data() {
			return {
				contributors: [],
				contributorsCols: 4,
			}
		},   
		methods: {
			async getContributors() {
				try {
						const response = await fetch(this.repository.contributors_url)
						if (response.status === 404) {
							throw new Error('Page not found')
						} else if (response.status === 500) {
							throw new Error('Server error')
						} else if (!response.ok) {
							throw new Error(`HTTP error. Status: ${response.status}`)
						}
						const responseJSON = await response.json();
						this.contributors = responseJSON
				} catch (error) {
					console.error(error);
				}
			},
			onResize() {
				this.contributorsCols = window.innerWidth >= 765 ? 4 : 6
			}
		},
		created() {
			this.getContributors();
		},
		mounted() {
			this.onResize()
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize);
			})
		},
	}
</script>

<style lang="scss" scoped>
@import '../../assets/index.scss';
	.details {
		padding: 30px 0;
		position: relative;

		&__close-button {
			position: absolute;
			top: 10px;
			right: 0;
		}
		
		&__name {
			font-size: 24px;
		}

		&__date {
    		margin-bottom: 20px;
			font-size: 12px;
		}

		&__contributors-title {
			font-size: 20px;
		}

		a {
			color: $text-color-links;
			text-decoration: none;
		}
	}

	// styles for tablet size (768px) and higher
	@media all and (min-width: 48em) {
		.details {
			&__main-info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
			}

			&__date {
				text-align: end;
				font-size: 16px;
			}
		}
	}
</style>