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
				<p class="repository-information__name">{{ repository.name }} - by {{ repository.author }}</p>
				<div class="repository-information__rating">
					<div class="repository-information__stars">
						<v-icon v-for="(star, index) in repository.stars" :key="index" icon="mdi-star"></v-icon>
					</div>
					<p class="repository-information__forks">{{ repository.forks }} forks</p>
				</div>
			</div>
			<p class="repository-information__description">{{ repository.description }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/index.scss';
	.repository-information {
		color: $text-color-secondary;
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

		&__stars {
			margin-right: 20px;
		}

		&__forks {
			font-size: 20px;
		}

		&__description {
			font-size: 16px;
		}
	}
</style>
