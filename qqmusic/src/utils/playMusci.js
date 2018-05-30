const playRadio = function(id) {
  const radioUrl = 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=getradiosonglist938672363188894&g_tk=5381&jsonpCallback=getradiosonglist938672363188894&&data=%7B%22songlist%22%3A%7B%22module%22%3A%22pf.radiosvr%22%2C%22method%22%3A%22GetRadiosonglist%22%2C%22param%22%3A%7B%22id%22%3A'+ id +'%2C%22firstplay%22%3A1%2C%22num%22%3A10%7D%7D%2C%22radiolist%22%3A%7B%22module%22%3A%22pf.radiosvr%22%2C%22method%22%3A%22GetRadiolist%22%2C%22param%22%3A%7B%22ct%22%3A%2224%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A%2224%22%7D%7D'
  $.ajax({
    url: radioUrl,
    type: 'get',
    dataType: 'jsonp',
    success: (data) => {
      let radiolist = data.songlist.data.track_list;
      var playlist = []
      radiolist.forEach((val) => {
        playlist.push(val.mid)
      })
      player.play(playlist)
    }
  })
}

const playPrev = function() {
  player.playPrev()
}

const playNext = function() {
  player.playNext()
}

export default {
  playRadio,
  playPrev,
  playNext,
}
