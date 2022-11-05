export default {
  load({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('api/todos')
        .then((response) => {
          commit('setList', response)

          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
