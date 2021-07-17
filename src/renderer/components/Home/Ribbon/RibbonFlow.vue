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
	<div class="ribbon">
		<!-- -------------------------------- NOVO --------------------------------- -->
		<div class="btn-container" onclick="ResetSQMA()">
			<img src="static/img/ribbon/new-file-96.png" alt="New" />
			<h5>Novo</h5>
		</div>

		<!-- -------------------------------- ABRIR -------------------------------- -->
		<div class="btn-container" id="btn_LoadSQMA" onclick="">
			<img src="static/img/ribbon/opened-folder.png" alt="Open" />
			<h5>Abrir</h5>
		</div>
		<!-- ------------------------------- SALVAR -------------------------------- -->
		<div class="btn-container" id="btn_SaveSQMA" onclick="">
			<img src="static/img/ribbon/save-96.png" alt="Save" />
			<h5>Salvar</h5>
		</div>

		<!-- --------------------------------- LOG --------------------------------- -->
		<div class="btn-container" id="btn_LogSQMA" onclick="">
			<img src="static/img/ribbon/debugging.png" alt="Log" />
			<h5>Log</h5>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';
</style>
