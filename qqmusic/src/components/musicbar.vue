<template>
  <div class="musicbar">
    <div class="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,index) in album" :key="index"><img :src="img" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="m-nav">
      <router-link to="singer" class="nav-item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-person"></use>
          </svg>
        </i>
        <p class="small">歌手</p>
      </router-link>
      <router-link to="ranklist" class="nav-item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paixingbang"></use>
          </svg>
        </i>
        <p class="small">排行</p>
      </router-link>
      <router-link to="" class="nav-item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu2"></use>
          </svg>
        </i>
        <p class="small">分类歌单</p>
      </router-link>
      <router-link to="" class="nav-item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-radio-tower"></use>
          </svg>
        </i>
        <p class="small">电台</p>
      </router-link>
      <router-link to="" class="nav-item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vedio"></use>
          </svg>
        </i>
        <p class="small">视频</p>
      </router-link>
    </div>
    <div class="radio">
      <div class="person-radio">
        <img :src="new_song[luckyNumber].singer_img" class="play-pic">
        <i class="cover">
          <span>
            <svg class="icon play-icon" aria-hidden="true">
              <use xlink:href="#icon-play"></use>
            </svg>
          </span>
        </i>
      </div>
      <div class="hot">
        <div class="hot-item">
          <div class="info">
            <p>新歌推荐</p>
            <p class="small">{{ new_song[parseInt(luckyNumber) + 1].singer }}激情演绎{{ new_song[parseInt(luckyNumber) + 1 ].song_title }} </p>
          </div>
          <img :src="new_song[parseInt(luckyNumber) + 1].singer_img" class="hot-pic">
        </div>
         <div class="hot-item">
          <div class="info">
            <p>数字专辑</p>
            <p class="small">{{ new_song[parseInt(luckyNumber) + 2].singer }}霸榜新专热卖中</p>
          </div>
          <img :src="new_song[parseInt(luckyNumber) + 2].singer_img" class="hot-pic">
        </div>
      </div>
    </div>
    <div class="recommend">
      <h5 class="rec-t">为你推荐歌单</h5>

      <div class="rec-item" v-for="(item, index) in recommends" :key="index" @click="$store.commit('play', commonDate[index])">
        <div class="rec-pic">
          <img :src="item.cover" class="play-pic">
        </div>
        <div class="sub-title">
          <p class="small" v-text="item.title"></p>
        </div>
      </div>

    </div>

    <div class="recommend">
      <h5 class="rec-t">最新专辑</h5>

      <div class="rec-item" v-for="(item, index) in new_al" :key="index" @click="$store.commit('play', item.songid)">
        <div class="rec-pic">
          <img :src="item.img" class="play-pic">
        </div>
        <div class="sub-title">
          <p class="small" v-text="item.name">忠于自我</p>
          <p class="small" v-text="item.singer">韩红</p>
        </div>
      </div>
    </div>

    <div class="recommend">
      <h5 class="rec-t">独家内容</h5>
      <div id="mod_player" class="vedio" v-if="isPlayMV"></div>
      <div class="twin" v-for="(item, index) in _uni" :key="index" @click="playMv(item.id)">
        <img v-lazy="item.cover" alt="" class="twin-pic">
        <p class="m-title" v-text="item.title">Carly Rae Jepsen新专即将呈现，独家神还原"蹲妹"原型</p>
      </div>

    </div>

    <div class="recommend">
      <h5 class="rec-t">精选电台</h5>
      <div class="circle" v-for="(item, index) in _playlist" :key="index" @click="$store.commit('play', item.song_ids)">
        <div class="dt-i">
          <div class="dt-item">
            <img :src="item.img" alt="" class="dt-pic">
            <i class="d-cover">
              <span>
                <svg class="icon play-icon" aria-hidden="true">
                  <use xlink:href="#icon-play"></use>
                </svg>
              </span>
            </i>
          </div>
          <p class="m-title w-30" v-text="item.name">流行</p>
        </div>
      </div>

    </div>

    <div class="recommend">
      <h5 class="rec-t">MV推荐</h5>
      <div class="twin" v-for="(item, index) in _Mv" :key="index" @click="playMv(item.id)">
        <img v-lazy="item.cover" alt="" class="twin-pic">
        <p class="m-title" v-text="item.title">忘(影视版)楚乔传电视剧</p>
        <p class="small" v-text="item.singer">张碧晨</p>
      </div>

    </div>

    <div class="recommend">
      <h5 class="rec-t">专栏</h5>
      <div class="twin" v-for="(item, index) in $store.getters.focus" :key="index">
        <img v-lazy="item.pic_info.url" alt="" class="twin-pic">
        <p class="m-title">专访丁世光：动听的用不过时的流行</p>
      </div>

    </div>

    <!-- <div class="recommend">
      <h5 class="rec-t">乐人</h5>
      <div class="square">
        <div class="rec-item">
          <div class="rec-pic">
            <img src="../assets/imgs/5.jpeg" class="play-pic">
            <i class="d-cover">
              <span>
                <svg class="icon play-icon" aria-hidden="true">
                  <use xlink:href="#icon-play"></use>
                </svg>
              </span>
            </i>
          </div>
          <div class="sub-title">
            <p class="small">万里长城</p>
            <p class="small">GAI</p>
          </div>
        </div>
        <div class="rec-item">
          <div class="rec-pic">
            <img src="../assets/imgs/3.jpeg" class="play-pic">
            <i class="d-cover">
              <span>
                <svg class="icon play-icon" aria-hidden="true">
                  <use xlink:href="#icon-play"></use>
                </svg>
              </span>
            </i>
          </div>
          <div class="sub-title">
            <p class="small">民谣：献给在现实中蹉跎的我们</p>
          </div>
        </div>
        <div class="rec-item">
          <div class="rec-pic">
            <img src="../assets/imgs/4.jpeg" class="play-pic">
            <i class="d-cover">
              <span>
                <svg class="icon play-icon" aria-hidden="true">
                  <use xlink:href="#icon-play"></use>
                </svg>
              </span>
            </i>
          </div>
          <div class="sub-title">
            <p class="small">此时此刻 演唱会进行时</p>
            <p class="small">许巍</p>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import commonDate from '../assets/moker/radio'

export default {
    data() {
        return {
            album: [] ,new_song: [], luckyNumber: 0, recommend: [], new_album: [], playlist: [], mvlist: [], isPlayMV: false, commonDate: commonDate.radio
        }
    },
    methods: {
      playMv(vid) {
        this.$router.push({
          path: 'playMv',
          query: { mvId: vid }
        })
      },
    },
    computed: {
      new_al() {
        let arr = this.new_album.slice(0, 6)
        return arr
      },
      _playlist() {
        let arr = this.playlist.slice(0, 6)
        return arr
      },
      _Mv() {
        return this.mvlist.slice(0, 4)
      },
      _uni() {
        return this.mvlist.slice(5, 9)
      },
      recommends() {
        return this.recommend.slice(0, 6)
      }
    },
    created() {
        let _this = this
        this.luckyNumber = (Math.random()*20).toFixed(0)
        $.ajax({
            url: 'https://c.y.qq.com/v8/fcg-bin/musicmall.fcg?jsonpCallback=?&format=jsonp&cmd=pc_index_new',
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            success: function (data) {
                var banner = data.data.banner;
                banner.forEach(function (val) {
                    this.album.push(val.picurl)
                }, this)
            }.bind(this)
        })

        let items = this.$store.getters.new_song
        let img_url = 'https://y.gtimg.cn/music/photo_new/T002R150x150M000'
        let singer_url = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000'
        let album_url = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'
        items.forEach((item) => {
          let img = img_url + item.album.mid + '.png'
          let songid = item.id
          let singer = item.singer[0].name
          let singer_img = singer_url + item.singer[0].mid + '.png'
          let song_title = item.album.title
          _this.new_song.push({
            singer: singer,
            singer_img: singer_img,
            songid: songid,
            img: img,
            song_title: song_title
          })
        })

        let recommens = this.$store.getters.recomPlaylist
        recommens.forEach((item) => {
          let cover = item.cover
          let title = item.title
          let id = item.id
          _this.recommend.push({
            cover: cover,
            title: title,
            id: id
          })
        })

        let newsongs = this.$store.getters.new_song
        newsongs.forEach((item) => {
            let singer = item.singer[0].name
            let name = item.name
            let songid = item.id
            let img = album_url + item.album.mid + '.jpg'
            _this.new_album.push({
              singer: singer,
              name: name,
              img: img,
              songid: songid
            })
        })

        let playlist = this.$store.getters.playlist
        playlist.forEach((item) => {
          let img = item.cover_url_small
          let name = item.title
          let song_ids = item.song_ids
          _this.playlist.push({
            name: name,
            img: img,
            song_ids: song_ids
          })
        })

        let mvlist = this.$store.state.Mvlist.data.mvlist
        mvlist.forEach((item) => {
          let cover = item.picurl
          let id = item.vid
          let title = item.mvtitle
          let singer = item.singername
          this.mvlist.push({
            cover: cover,
            id: id,
            title: title,
            singer: singer
          })
        })
    }
}
</script>

<style>
.icon {
  fill: #31c27c;
  font-size: 1.5rem;
}

.musicbar {
  position: absolute;
  width: 100%;
  top: 150px;
  background: #fff
}

.carousel {
  margin-bottom: 1rem;
}

.mint-swipe {
  height: 160px;
}

img {
  width: 100%;
  height: 100%;
}


.m-nav {
  padding: .5rem 0 .5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around
}

.nav-item {
  text-align: center
}

.small {
  color: gray;
  font-size: .5rem;
}

.m-nav a {
  font-size: .9rem
}

.play-pic {
  width: 100%;
  height: 100%;
  border-radius: .5rem;
}

.cover svg {
  fill: #fff
}

.person-radio {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  text-align: center;
  line-height: 120px;
  z-index: 4
}

.play-icon {
  font-size: 2rem;
}

.hot-pic {
  width: 50px;
  height: 50px;
}

.hot-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 rem
}

.hot-item p {
  margin: .5rem
}

.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  align-items: center
}

.info {
  width: 180px;
}

.recommend {
  text-align: center
}

.rec-t {
  font-size: 1.2rem;
  letter-spacing: .5rem;
  font-weight: 300;
}

.rec-item {
  display: inline-block;
  cursor: pointer;
  width: 110px;
  margin: 1px;
  vertical-align: top
}

.rec-pic {
  position: relative;
  height: 100px;
}

.sub-title {
  height: 50px;
  color: black;
}

.m-title {
  font-size: .5rem;
  font-weight: 300;
  margin: 0;
  text-align: center
}

.twin {
  width: 48%;
  margin: 1px;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  text-align: center
}

.dt-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%
}

.d-cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 110px;
}

.d-cover svg {
  fill: #fff
}

.dt-item {
  position: relative;
  width: 100px;
  border-radius: 50%
}

.dt-i {
  display: inline-block
}

.circle {
  display: inline-block;
  width: 30%;
  overflow: hidden;
  vertical-align: top;
  margin-bottom: 1rem;
  margin-right: 10px;
}

.vedio {
    position: fixed; /*绝对定位*/
    top:0; /*距顶部50%*/
    left:0;
    width:100%;
    height:100%;
    z-index:2;
}
</style>
