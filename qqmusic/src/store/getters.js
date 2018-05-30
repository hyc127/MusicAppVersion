export default {
  recomPlaylist(state) {
    return state.lists.recomPlaylist.data.v_hot
  },
  toplist_cn(state) {
    return state.lists.toplist.data.group_list[0].list
  },
  toplist_usa(state) {
    return state.lists.toplist.data.group_list[1].list
  },
  playlist(state) {
    return state.lists.playlist.data.v_playlist
  },
  new_song(state) {
    return state.lists.new_song.data.song_list
  },
  new_album(state) {
    return state.lists.new_album.data.list
  },
  focus(state) {
    return state.lists.focus.data.content
  },
  category(state) {
    return state.lists.category.data.category[0].items
  },
  singerlist(state) {
    let arr = []
    arr[0] = state.singers.slice(0, 6)
    arr[1] = state.singers.slice(6)
    return arr
  }
}
