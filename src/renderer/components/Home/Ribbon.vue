<script>
//* -------------------------------------------------------------------------- *//
//*                                   SCRIPT                                   *//
//* -------------------------------------------------------------------------- *//
import RibbonFlow from './Ribbon/RibbonFlow.vue'
import RibbonChart from './Ribbon/RibbonChart.vue'
import RibbonDef from './Ribbon/RibbonDef.vue'

export default {
	name: 'ribbon',
	//* ------------------------------ COMPONENTS ------------------------------ *//
	components: {
		RibbonFlow,
		RibbonChart,
		RibbonDef,
	},
	//* ---------------------------------- DATA ---------------------------------- */
	data: function() {
		return {}
	},
	//* --------------------------------- METHODS -------------------------------- */
	methods: {},
	//* -------------------------------- COMPUTED -------------------------------- */
	computed: {},
}
/*




*/
</script>

//* ------------------------------------------------------------------------ *//
//* ------------------------------- TEMPLATE ------------------------------- *//
//* ------------------------------------------------------------------------ *//
<template>
	<div id="ribbon">
		<RibbonFlow />
		<RibbonChart />
		<RibbonDef />
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';

#ribbon {
	position: relative;
	z-index: 90;
	display: block;
	box-sizing: border-box;
	height: $h_ribbon;
	width: 100%;
	padding: 4px;
	color: $color_d3;
	background-color: $bg_ribbon;
	border-bottom: 1px solid $color_l2;
	box-shadow: $shadow1;
	border-right: 1px solid $color_l2;
	border-left: 1px solid $color_l2;
	grid-area: 'ribbon';
	place-self: stretch;
}
</style>
