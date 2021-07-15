<script>
//_ import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'
import store from '../renderer/store/index'

export default {
	name: 'vue-cadsichter',
	components: {
		//_ LandingPage,
		Home,
	},

	//* -------------------------------- MOUNTED ------------------------------- *//
	mounted() {},
}
</script>

<template>
	<div id="app">
		<!-- <landing-page></landing-page> -->
		<Home />
	</div>
</template>

<style lang="scss">
@charset "utf-8";
@font-face {
	font-family: 'MainFont';
	//_ src: url('./assets/fonts/RobotoCondensed-Regular.ttf') format('truetype');
	src: url('./../../static/fonts/RobotoCondensed-Regular.ttf')
		format('truetype');
}
@import '@/index';
#app {
	padding: 0;
	margin: auto;
	overflow-x: hidden;
	overflow-y: hidden;
	font-variant-caps: petite-caps;
}
</style>
