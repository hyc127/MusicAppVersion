<template>
<div class="person">
  <div class="personal_info">
    <div class="user">
      <img src="../assets/head.jpeg" alt="">
      <span>昶.fighting!!!</span>
    </div>
    <div class="things">
      <div class="center">
        <p>活动中心</p>
        <p class="small">今日听歌20分钟</p>
      </div>
      <div class="seperate"></div>
      <div class="vip">
        <p>会员中心</p>
        <p class="small">周末低价抢豪华绿钻</p>
      </div>
    </div>
  </div>
  <div class="functions">
    <div class="f">
      <div class="item">
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-music1"></use>
          </svg>
        </i>
        <p>全部音乐</p>
        <span class="small">51</span>
      </div>
      <div class="item">
         <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Download"></use>
          </svg>
        </i>
        <p>下载音乐</p>
        <span class="small">50</span>
      </div>
      <div class="item">
         <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-time"></use>
          </svg>
        </i>
        <p>最近播放</p>
        <span class="small">200</span>
      </div>
    </div>
    <div class="f">
      <div class="item">
         <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-love"></use>
          </svg>
        </i>
        <p>我喜欢</p>
        <span class="small">1</span>
      </div>
      <div class="item">
         <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji"></use>
          </svg>
        </i>
        <p>已购音乐</p>
        <span class="small">51</span>
      </div>
      <div class="item">
         <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-runlog"></use>
          </svg>
        </i>
        <p>跑步电台</p>
        <span class="small">QQ音乐 x Nike</span>
      </div>
    </div>
  </div>
  <div class="songlist">
    <div class="song_menu">
      <a href="#">自建歌单</a>
      <a href="#">收藏歌单</a>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
svg {
  fill: #31c27c;
  font-size: 1.5rem;
  margin-bottom: .5rem
}

.person {
  position: absolute;
  width: 100%;
  top: 150px;
  left: 0;
  z-index: 3;
  background: #fff
}

.personal_info {
  margin-bottom: 2rem
}

.user {
  margin: auto;
  text-align: center;
  margin: 1rem
}

.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle
}

.things {
  display: flex;
  flex-direction: row;
  justify-content: space-around
}

.center {
  text-align: center;
}

p {
  margin: 0;
  text-align: center
}

.seperate {
  height: 1.2rem;
  width: 1px;
  margin-top: .6rem;
  background: gray
}

.small {
  color: gray;
  font-size: .5rem
}

.functions {
  margin-bottom: 3rem
}

.f {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem
}

.item {
  width: 6rem;
  text-align: center;
  font-size: .8rem;
}

.song_menu {
  text-align: center;
}

.song_menu a {
  color: black;
  font-size: 1rem;
  font-weight: 300
}

</style>

