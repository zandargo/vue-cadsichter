const state = {
	activeTab: 'Flow',
}

const mutations = {
	tabSetFlow(state) {
		state.activeTab = 'Flow'
	},
	tabSetChart(state) {
		state.activeTab = 'Chart'
	},
	tabSetDef(state) {
		state.activeTab = 'Def'
	},
}

const actions = {
	//_ someAsyncTask({ commit }) {
	//_ 	commit('INCREMENT_MAIN_COUNTER')
	//_ },
}

export default {
	state,
	mutations,
	actions,
}
