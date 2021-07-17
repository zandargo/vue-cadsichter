<script>
//* -------------------------------------------------------------------------- */
//*                                   SCRIPT                                   */
//* -------------------------------------------------------------------------- */
import SideBarFlow from './SideBar/SideBarFlow.vue'
import SideBarChart from './SideBar/SideBarChart.vue'
import SideBarDef from './SideBar/SideBarDef.vue'

export default {
	name: 'sidebar',
	//* ------------------------------ COMPONENTS ------------------------------ *//
	components: {
		SideBarFlow,
		SideBarChart,
		SideBarDef,
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
	<div id="sidebar">
		<SideBarFlow />
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';

#sidebar {
	// display: inline-block;
	box-sizing: border-box;
	// width: $w_sidebar;
	width: 320px;
	background-color: $bg_sidebar;
	padding: 10px;
	// height: 100%;
	height: $h_main;
	border-right: 1px solid $color_l2;
	border-left: 1px solid $color_l2;
	box-shadow: $shadow1;
	grid-area: 'sidebar';
}
</style>
