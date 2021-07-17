const state = {
	activeTab: 'Flow',
}

const mutations = {
	//_ tabSetFlow(state) {
	//_ 	state.activeTab = 'Flow'
	//_ },
	//_ tabSetChart: (state) => {
	//_ 	state.activeTab = 'Chart'
	//_ },
	//_ tabSetDef(state) {
	//_ 	state.activeTab = 'Def'
	//_ },
	setTab(state, tabName) {
		state.activeTab = tabName
	},
}

const actions = {
	//_ tabSetFlow(context) {
	//_ 	context.commit('tabSetFlow')
	//_ },
	//_ tabSetChart: (context) => {
	//_ 	context.commit('tabSetChart')
	//_ },
	//_ tabSetDef(context) {
	//_ 	context.commit('tabSetDef')
	//_ },
	setTab(context, tabName) {
		context.commit('setTab', tabName)
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}
