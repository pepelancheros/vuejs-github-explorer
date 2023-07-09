<template>
	<div class="debugging">
	  	<h1 class="debugging__title">Networking / Debugging</h1>
		<p>For this challenge I worked with the Chrome developer tools. This is what I found</p>
		<div class="debugging__section">
	  		<h2>Some external domains being called at propper.ai:</h2>
			<ul>	
				<li><a href="https://www.googletagmanager.com">https://www.googletagmanager.com</a></li>
				<li><a href="https://cdn.lr-ingest.io">https://cdn.lr-ingest.io</a></li>
				<li><a href="https://fonts.googleapis.com">https://fonts.googleapis.com</a></li>
				<li><a href="https://www.clarity.ms">https://www.clarity.ms</a></li>
				<li><a href="https://assets.calendly.com">https://assets.calendly.com</a></li>
			</ul>
		</div>
		<div class="debugging__section">
			<h2>The different "Content-Type" headers in the POST requests:</h2>
			<ul>
			  <li>application/json; charset=utf-8</li>
			  <li>text/plain</li>
			  <li>text/plain;charset=UTF-8</li>
			</ul>
		</div>
		<div class="debugging__section">
			<h2>The major JS framework used in proper:</h2>
			<p>Nuxt with Vue.js</p>
		</div>
	</div>
</template>
  
<style lang="scss" scoped>
@import '../assets/index.scss';
	.debugging {
		max-width: 1000px;
		margin: 40px auto;
		padding: 0 40px;
		color: $text-color-secondary;

		&__title {
			text-align: center;
			margin-bottom: 24px;
		}

		&__section {
			margin: 40px 0;
		}

		a {
			color: $btn-background-color-primary;
		}
	}
</style>