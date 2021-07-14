<script>
//* -------------------------------------------------------------------------- */
//*                                   SCRIPT                                   */
//* -------------------------------------------------------------------------- */
export default {
	name: 'Tabs',
	//* ---------------------------------- DATA ---------------------------------- */
	data: function() {
		return {}
	},
	//* --------------------------------- METHODS -------------------------------- */
	methods: {},
	//* -------------------------------- COMPUTED -------------------------------- */
	computed: {},
}
</script>
//* ------------------------------------------------------------------------ *//
//* ------------------------------- TEMPLATE ------------------------------- *//
//* ------------------------------------------------------------------------ *//
<template>
	<div id="menu-tabs">
		<button
			id="bt-flow"
			class="tablink active"
			onclick="openTab(event, 'flow')"
		>
			Esquema
		</button>

		<button id="bt-chart" class="tablink" onclick="openTab(event, 'chart')">
			Esquemino
		</button>

		<button id="bt-defs1" class="tablink" onclick="openTab(event, 'defs1')">
			Ficha Técnica
		</button>
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';

#titlebar {
	height: $h_title;
	width: 100vw;
	margin: auto;
	margin-right: 0px;
	color: $color_l5;
	background-color: $bg_wintitle;
	grid-area: 1 / 1 / last-line / last-row;
}
</style>
