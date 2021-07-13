<script>
import TitleBar from './Home/TitleBar.vue'

export default {
	name: 'Home',
	components: {
		TitleBar,
	},
}
</script>

<template>
	<div>
		<TitleBar />
	</div>
</template>

<style lang="scss">
@import '@/index';

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

#Home {
	padding: 10;
	margin: 0;
	overflow-x: hidden;
	overflow-y: hidden;
	display: inline-block;
	display: grid;
	grid-template-columns: minmax(100px, 200px) minmax(25%, 50%) minmax(25%, 50%);
	grid-template-rows: $h_title $h_tabs $h_ribbon $h_main $h_footer;
}
</style>
