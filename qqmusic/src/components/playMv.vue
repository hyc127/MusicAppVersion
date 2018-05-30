<template>
<div class="player">
    <i class="backBtn" @click="back">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </i>
  <div id="mod_player" @click="playMv"></div>
</div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    playMv() {
      let vid = this.$route.query.mvId
      let video = new tvp.VideoInfo()
      video.setVid(vid);
      let MVplayer = new tvp.Player()
      MVplayer.create({
      video: video,
      modId: "mod_player",
      vodFlashSkin: "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",  //精简皮肤
      autoplay: true,   //是否自动播放
      });
    }
  },
}
</script>

<style>

.player {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #eee;
  z-index: 5;
}

#mod_player {
  height: 100%;
}

.backBtn {
  position: absolute;
  color: red;
  font-size: 2rem;
  font-weight: bolder;
  z-index: 10;
}

</style>
