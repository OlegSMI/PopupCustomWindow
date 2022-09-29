import {createStore} from 'vuex'

export default createStore({
  state: {
    emails: [],
    status_submit:'',
    show_flash: false
  },
  getters: {
    getEmails(state) {
      return state.emails
    },
    getStatus(state) {
      return state.status_submit
    },
    getFlash(state) {
      return state.show_flash
    }
  },
  mutations: {
    setEmails(state, value) {
      state.emails.push(value)
    },
    setStatus(state, value) {
      state.status_submit = value
    },
    setFlash(state, value) {
      state.show_flash = value
    }
  },
  actions: {
    setStatus(context, value) {
      context.commit('setStatus', value);
    },
    setEmails(context, value) {
      context.commit('setEmails', value);
    },
    setFlash(context, value) {
      context.commit('setFlash', value);
    },
  }
})