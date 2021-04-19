const user = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    INCREMENT(state: any) {
      state.count += 1
    }
  },
  actions: {
    increment(context: any) {
      context.commit('INCREMENT')
    }
  }
}
export default user
