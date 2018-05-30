import Vue from 'vue'

export default {
  init: (state, data) => {
    state.lists = data
  },
  getMv: (state, data) => {
    state.Mvlist = data
  },
  add: (state, data) => {
    state.singers = data.singerList.data.singerlist
  },
  info: (state, data) => {
    state.singerinfo = data.data
  }
}
