<template>
	<div class="sort">
		<p class="sort__description-text">sort by:</p>
		<div class="sort__elements-container">
			<div class="sort__element">
				<p class="sort__element-text">stars</p>
				<v-btn @click="$emit('sort', {element: 'stars', order: 'desc'})" class="sort__button" density="compact" icon="mdi-chevron-up"></v-btn>
				<v-btn @click="$emit('sort', {element: 'stars', order: 'asc'})" class="sort__button" density="compact" icon="mdi-chevron-down"></v-btn>
			</div>
			<div class="sort__element">
				<p class="sort__element-text">forks</p>
				<v-btn @click="$emit('sort', {element: 'forks', order: 'desc'})" class="sort__button" density="compact" icon="mdi-chevron-up"></v-btn>
				<v-btn @click="$emit('sort', {element: 'forks', order: 'asc'})" class="sort__button" density="compact" icon="mdi-chevron-down"></v-btn>
			</div>
			<div class="sort__element">
				<p class="sort__element-text">updated</p>
				<v-btn @click="$emit('sort', {element: 'updated', order: 'desc'})" class="sort__button" density="compact" icon="mdi-chevron-up"></v-btn>
				<v-btn @click="$emit('sort', {element: 'updated', order: 'asc'})" class="sort__button" density="compact" icon="mdi-chevron-down"></v-btn>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/index.scss';
	.sort {
		color: $text-color-secondary;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;

		&__elements-container {
			display: flex;
		}

		&__description-text {
			font-size: 24px;
		}

		&__element {
			display: flex;
			margin-right: 30px;

			&:last-child {
				margin-right: 0;
			}
		}

		&__element-text {
			font-size: 20px;
			margin-right: 10px;
		}

		&__button {
			margin-right: 10px;

			&:last-child {
				margin-right: 0;
			}
		}
	}
</style>