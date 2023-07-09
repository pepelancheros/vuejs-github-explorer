<template>
	<div class="typing">
	  	<h1 class="typing__title">Typing Challenge</h1>
		<p>For this challenge I worked in a codepen that can be found in <a href="https://codepen.io/pepeligroso/pen/abQLgZp">here</a></p>
	</div>
</template>
  
<style lang="scss" scoped>
@import '../assets/index.scss';
	.typing {
		max-width: 1000px;
		margin: 40px auto;
		padding: 0 40px;
		color: $text-color-secondary;

		&__title {
			text-align: center;
			margin-bottom: 24px;
		}

		a {
			color: $btn-background-color-primary;
		}
	}
</style>