<template>
	<div id="app">
		<!-- <landing-page></landing-page> -->
		<Home />
	</div>
</template>

<script>
//_ import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'

export default {
	name: 'vue-cadsichter',
	components: {
		//_ LandingPage,
		Home,
	},
}
</script>

<style lang="scss">
@charset "utf-8";
@import '@/styles/variables';
.vue-logo {
	max-width: 10rem;
}
</style>
