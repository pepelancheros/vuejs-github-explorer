<script setup lang="ts">
	const props = defineProps({
		repository: {
			type: Object,
			required: true
		}
	})
</script>

<template>
	<div class="repository-information">
		<div>
			<div class="repository-information__main-info">
				<p class="repository-information__name">{{ repository.name }} - by {{ repository.owner.login }}</p>
				<div class="repository-information__rating">
					<div class="repository-information__rating-info">
						<p class="repository-information__stars">{{ repository.stargazers_count }} <v-icon icon="mdi-star"></v-icon></p>
					</div>
					<p class="repository-information__rating-info">{{ repository.forks }} forks</p>
				</div>
			</div>
			<p class="repository-information__description">{{ repository.description }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/index.scss';
	.repository-information {
		padding: 40px 0;

		&__main-info {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;
		}

		&__name {
			font-size: 24px;
		}

		&__rating {
			display: flex;
		}
		
		&__rating-info {
			font-size: 20px;
		}

		&__stars {
			display: flex;
   			align-items: center;
			margin-right: 20px;
		}

		&__description {
			font-size: 16px;
		}
	}
</style>
