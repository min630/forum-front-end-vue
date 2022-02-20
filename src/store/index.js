import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser() {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        this.commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
