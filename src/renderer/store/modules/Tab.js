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
	setTab(state, tabName) {
		state.activeTab = tabName
	},
}

const actions = {
	//_ someAsyncTask({ commit }) {
	//_ 	commit('INCREMENT_MAIN_COUNTER')
	//_ },
	tabSetFlow(context) {
		context.commit('tabSetFlow')
	},
	tabSetChart(context) {
		context.commit('tabSetChart')
	},
	tabSetDef(context) {
		context.commit('tabSetDef')
	},
	setTab(context) {
		context.commit('setTab', tabName)
	},
}

export default {
	state,
	mutations,
	actions,
}
