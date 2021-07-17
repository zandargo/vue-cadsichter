<script>
//* -------------------------------------------------------------------------- */
//*                                   SCRIPT                                   */
//* -------------------------------------------------------------------------- */
export default {
	name: '',
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
	<div id="side-bar-flow">
		<!-- ----------------------------------------------------------------------- -->
		<!--                            RESUMO DO ESQUEMA                            -->
		<!-- ----------------------------------------------------------------------- -->

		<div class="container">
			<div id="nGav-container">
				<h4>Número de Gavetas</h4>
				<input
					type="range"
					id="nGav-slider"
					class="slider"
					min="1"
					max="32"
					step="1"
					value="28"
				/>
				<h4 id="nGavs">28</h4>
			</div>
			<div class="div-hTotal">
				<h4>H<sub>TOTAL</sub>&nbsp;=</h4>
				<h4 id="hTotal"></h4>
			</div>
		</div>

		<!-- ----------------------------------------------------------------------- -->
		<!--                                  FUNDO                                  -->
		<!-- ----------------------------------------------------------------------- -->

		<div id="divFundo">
			<svg id="svgFND"></svg>
		</div>

		<!-- ----------------------------------------------------------------------- -->
		<!--                         INFORMAÇÕES DO ESQUEMA                          -->
		<!-- ----------------------------------------------------------------------- -->

		<div id="divInfoSQMA">
			<div id="infoSQMAno"></div>
		</div>

		<!-- ----------------------------------------------------------------------- -->
		<!--                                 LEGENDA                                 -->
		<!-- ----------------------------------------------------------------------- -->

		<div class="flow-leg-container">
			<div id="leg-title">
				<h4>LEGENDA</h4>
			</div>

			<div class="space"></div>
			<div class="flow-color-title">Produto A</div>
			<div class="flow-color-box PrA" id="flow-color-box01"></div>
			<div class="flow-color-title">Peneirado A</div>
			<div class="flow-color-box PnA" id="flow-color-box02"></div>

			<div class="space"></div>
			<div class="flow-color-title">Produto B</div>
			<div class="flow-color-box PrB" id="flow-color-box03"></div>
			<div class="flow-color-title">Peneirado B</div>
			<div class="flow-color-box PnB" id="flow-color-box04"></div>

			<div class="space"></div>
			<div class="flow-color-title">Produto ?</div>
			<div class="flow-color-box Pr0" id="flow-color-box05"></div>
			<div class="flow-color-title">Peneirado ?</div>
			<div class="flow-color-box Pn0" id="flow-color-box06"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';

#nGav-container {
	padding: 0px;
	margin: 0px;
}
</style>
