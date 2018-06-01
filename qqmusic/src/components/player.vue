<template>

<div id="player" v-show="$store.state.isplaying">
  <div :class="{ pausing: $store.state.ispausing }" class="playing song-img">
    <img :src="$store.state.currentPlay.img" alt="">
  </div>
  <div class="btn-group">
    <button @click="$store.commit('toggle')">
      <svg class="icon" aria-hidden="true" v-show="!$store.state.ispausing">
        <use xlink:href="#icon-pause"></use>
      </svg>

      <svg class="icon" aria-hidden="true" v-show="$store.state.ispausing">
        <use xlink:href="#icon-play"></use>
      </svg>
    </button>
    <button @click="$store.commit('prev')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
    </button>
    <button @click="$store.commit('next')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayishou"></use>
      </svg>
    </button>
    <button @click="$store.commit('exit')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuichu"></use>
      </svg>
    </button>
  </div>
  <p v-text="$store.state.currentPlay.name" class="small foo"></p>
</div>

</template>

<script>


</script>


<style>

.foo {
  max-width: 30%;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 5px;
}

#player {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 10%;
  background: #31c27c;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
}

.song-img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%
}

.song-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%
}

@keyframes  spin{
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}

.playing {
  animation: spin 6s infinite linear forwards
}

.pausing {
  animation-play-state: paused
}

.btn-group {
  width: 50%;
  text-align: center
}

.btn-group button {
  padding: 0;
}

.btn-group .icon {
  fill: #fff;
  font-size: 2rem;
}

</style>
