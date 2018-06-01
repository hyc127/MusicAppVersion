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
  },

  play: (state, id) => {
    player.play(id)
    player.on('play', () => {
      state.ispausing = false,
      state.isplaying = true
      const url = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'
      state.currentPlay = {
        img: url + player.data.song.album.mid + '.jpg',
        name: player.data.song.name
      }
    })

    player.on('ended', () => {
      state.ispausing = true
      state.isplaying = false
    })
  },
  toggle: (state) => {
    player.toggle()
    state.ispausing = true
  },
  prev: () => player.playPrev(),
  next: () => player.playNext(),
  exit: (state) => {
    player.pause()
    state.isplaying = false
    state.ispausing = true
  }
}
