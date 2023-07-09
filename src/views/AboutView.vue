<template>
  <div class="about">
    <h1 class="about__title">About this project</h1>
	<p>This is a challenge that I made for <a href="https://proper.ai/">Propper</a> to show my Frontend Skills. In this project I used Vue.js (version 3) as well as Vuetify for the components. Also, I created <a href="https://www.figma.com/file/a4KSEn3Z65ljOOyz7YPg8V/proper-github-explorer?type=design&node-id=1%3A2&mode=design&t=60S3Yecex4TSZj1A-1">this quick design</a> in figma to have an idea of how the site was going to look.<br> The challenge was to create an explorer using the GitHubAPI, so that the user finds repositories showing the name, author, description, stars and forks.</p>
	<div class="about__contact-info">
		<p>If you want to check the source code, feel free to take a look at the <a href="https://github.com/pepelancheros/proper-github-explorer">GitHub repo</a></p>
		<p>If you want to reach me here is some of my contact info:</p>
		<ul>
			<li>linkedin: <a href="https://www.linkedin.com/in/sebastian-lancheros/">sebastian-lancheros</a></li>
			<li>Instagram: <a href="https://www.instagram.com/pepeligroso_/">@pepeligroso_</a></li>
			<li>Github: <a href="https://github.com/pepelancheros">pepelancheros</a></li>
			<li>email: pepe.lancheros@gmail.com</li>
			<li>alternatative photography instagram account: <a href="https://www.instagram.com/avecesnomada">@avecesnomada</a></li>
		</ul>
	</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/index.scss';
	.about {
		max-width: 1000px;
		margin: 40px auto;
		padding: 0 40px;
		color: $text-color-secondary;

		&__title {
			text-align: center;
			margin-bottom: 24px;
		}

		&__contact-info {
			margin-top: 40px;
		}

		a {
			color: $btn-background-color-primary;
		}
	}
</style>
