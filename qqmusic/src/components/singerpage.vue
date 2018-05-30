<template>

<div class="singer-page">
  <div class="singer-page-header">
    <i @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
    </i>
    <div class="singer-thubnail">
      <img :src="pic" alt="" class="person-radio">
      <div class="singer-info">
        <span class="text-muted" v-text="name">薛之谦</span>
        <br>
        <span class="fensi">粉丝：{{ fans }}万人</span>
        <br>
        <span class="singer-detail" v-text="details">薛之谦，1983年7月17日出生于上海</span>
      </div>
    </div>
    <button class="play-btn">播放全部</button>
  </div>
  <div class="songs">
    <p>歌曲 供161首</p>
    <ul class="songs-item">
      <li class="song" v-for="(item, index) in musics" :key="index" @click="play(item.songid)">
        <h3 class="small" v-text="item.songname">哑巴</h3>
      </li>
    </ul>
  </div>
</div>

</template>


<script>

export default {
  methods: {
    play(id) {
      player.play(id)
    }
  },
  computed: {
    name() {
      return this.$store.state.singerinfo.singer_name
    },
    details() {
      return this.$store.state.singerinfo.SingerDesc
    },
    fans() {
      return this.$store.state.singerinfo.fans
    },
    pic() {
      let p = this.$store.state.singerinfo.singer_mid
      return 'https://y.gtimg.cn/music/photo_new/T001R300x300M000' + p + '.jpg'
    },
    musics() {
      let musiclist = this.$store.state.singerinfo.list
      let arr = []
      musiclist.forEach((item) => {
        let songid = item.musicData.songid
        let songname = item.musicData.songname
        arr.push({
          songid: songid,
          songname: songname
        })
      })
      return arr
    }
  }
}

</script>


<style>

.singer-page-header {
  background: rgba(0, 0, 0, .5);
  padding: 1rem;
}

.singer-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  overflow: scroll
}

.singer-info {
  display: inline-block;
  vertical-align: 1rem;
  font-size: .8rem;
  line-height: 2rem;
  color: #fff;
  font-weight: 300
}

.play-btn {
  display: block;
  width: 8rem;
  height: 2rem;
  margin: auto;
  background: #31c27c;
  border-radius: 20px;
  border: 0;
  outline: 0;
}

</style>
