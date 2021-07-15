<script>
//* -------------------------------------------------------------------------- */
//*                                   SCRIPT                                   */
//* -------------------------------------------------------------------------- */
export default {
	name: 'tabs',
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

#menu-tabs {
	grid-area: 'tabs';
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: $h_tabs;
	width: 100vw;
	padding: 0 50px;
	background-color: $bg_tabs;

	button {
		background-color: $bg_tabs;
		color: $color_l3;
		font-family: inherit;
		font-size: inherit;
		height: 80%;
		text-align: center;
		text-decoration: none;
		font-variant-caps: petite-caps;

		border-radius: 8px 8px 0 0;
		margin: 0 20px;
		padding: 2px 32px;
		cursor: default;
		transition: 0.2s;
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
		outline: none;
		//- pointer-events: none;
		&:hover {
			background-color: lighten($bg_tabs, 10%);
			color: $color_l5;
			//- outline: none;
		}

		&.active {
			color: $color_d4;
			font-weight: 500;
			background-color: $bg_ribbon;
			box-shadow: $shadow2;
			font-size: 1.05em;
			//-text-transform: uppercase;
			&:focus {
				outline: none;
			}
		}
	}
}
</style>
