<template>
  <div id="app">
    <p v-show="!finish">欢迎使用VueMusci，请等待加载完成-------todo换成图片</p>
    <router-view v-if="finish"></router-view>
  </div>
</template>

<script>
import Set from './components/setting'
export default {
  name: 'App',
  data() {
    return { finish: false }
  },
  components: {
    Set
  },
  created() {
    let _this = this
    $.ajax({
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom016898246255873106&g_tk=5381&jsonpCallback=recom016898246255873106&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"music.web_album_library","method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":40,"click_albumid":0}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}',
      dataType: 'jsonp',
      success: function(data) {
        _this.$store.commit('init', data)
        setTimeout(() => {
          _this.finish = true
        }, 2000);
      }
    }),
    $.ajax({
      url: 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag?format=jsonp&type=2&year=0&area=0&tag=0&pageno=0&pagecount=30',
      dataType: 'jsonp',
      jsonpCallback: 'MusicJsonCallback',
      success: function(data) {
        _this.$store.commit('getMv', data)
      }
    }),
    $.ajax({
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=getUCGI2928962125786889&g_tk=5381&jsonpCallback=getUCGI2928962125786889&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}',
      dataType: 'jsonp',
      success: function(data) {
        _this.$store.commit('add', data)
      }
    })
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0
  }

  #app {
    width: 100%;
    height: 100vh;
    overflow-x: hidden
  }
  a {
    text-decoration: none;
    margin-left: 1rem
  }

  a:active, a:hover {
    color: #fff
  }

.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: #fff;
       overflow: hidden;
    }

.set {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 0;
  left: -100%;
}
</style>
