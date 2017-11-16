const state = {
	miniNavbar: false
}

const mutations = {
	changeNavbar(state) {
		state.miniNavbar = !state.miniNavbar
	}
}

export default {
	state,
	mutations
}