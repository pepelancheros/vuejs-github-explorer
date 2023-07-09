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
		display: block;
		justify-content: space-between;
		margin-bottom: 20px;

		&__description-text {
			display: none;
			font-size: 20px;
		}

		&__element {
			display: flex;
			justify-content: end;
			margin-bottom: 16px;
		}

		&__element-text {
			font-size: 20px;
			margin-right: 10px;
		}

		&__button {
			margin-right: 10px;
			width: 40px;
			height: 40px;

			&:last-child {
				margin-right: 0;
			}
		}
	}

	// styles for big mobil size (576px) and higher
	@media all and (min-width: 36em) {
		.sort {
			&__elements-container {
				display: flex;
				justify-content: center;
			}

			&__element {
				justify-content: unset;
				margin-right: 30px;
				margin-bottom: 0;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}

	// styles for tablet size (768px) and higher
	@media all and (min-width: 48em) {
		.sort {
			display: flex;

			&__elements-container {
				justify-content: unset;
			}

			&__description-text {
				display: block;
			}
		}
	}
</style>