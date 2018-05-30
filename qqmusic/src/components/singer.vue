<template>
  <div class="singers">
    <h1 class="display-4">
      <i @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </i>
      Stars
      </h1>
    <button @click="show=!show; out=!show">menu</button>
    <div class="stars">
      <div class="star" v-for="(item, index) in this.$store.getters.singerlist[0]" :key="index">
        <img v-lazy="item.singer_pic.replace(/webp/g, 'jpg')" class="star-pic">
        <p class="small" v-text="item.singer_name"></p>
      </div>
    </div>
    <div class="allstar" :class="{ movein: show, moveout: out }">
      <ul class="menu">
        <li class="sub_title" v-for="(item, index) in sorted" :key="index">
          <p class="abc" v-text="index"></p>
          <ul>
            <li class="singer" v-for="singer in item" :key="singer.id" v-text="singer.name" @click="singerPage(singer.id)"></li>
          </ul>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
const pinyin = require('pinyin')
export default {
  data() {
    return { show: false, out: false }
  },
  methods: {
    singerPage(id) {
      var _this = this
      const url = '/api/?singerid='+ id +'&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5page&needNewCode=1&order=listen&from=h5&num=15&begin=0&_=1527659719008'
      $.getJSON(url, function(data) {
        _this.$store.commit('info', data)
        _this.$router.push({
        path: 'singer/singerpage',
        query: {
          id: id
        }
      })
      })
    }
  },
  computed: {
    sorted() {
      let arr = this.$store.getters.singerlist[1]
      let new_arr = {}
      let str = 'abcdefghijklmnopqrstuvwxyz'
      for (let i of str) {
        new_arr[i] = []
      }
      arr.forEach((item) => {
        let key = pinyin(item.singer_name, {
          style: pinyin.STYLE_NORMAL
        })[0][0][0].toLowerCase()
        if(typeof new_arr[key] == 'undefined') {
          new_arr[key] = []
        }
        new_arr[key].push({
          name: item.singer_name,
          id: item.singer_id
        })
      })
      return new_arr
    }
  },
  created() {
    let arr = this.$store.getters.singerlist[1]
      let new_arr = {}
      let str = 'abcdefghijklmnopqrstuvwxyz'
      for (let i of str) {
        new_arr[i] = []
      }
      arr.forEach((item) => {
        let key = pinyin(item.singer_name, {
          style: pinyin.STYLE_NORMAL
        })[0][0][0].toLowerCase()
        if(typeof new_arr[key] == 'undefined') {
          new_arr[key] = []
        }
        new_arr[key].push(item.singer_name)
      })
  }
}
</script>

<style>

.singers {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.stars {
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem .5rem
}

.star {
  width: 32%;
  margin-right: 3px;
  color: gray;
  font-size: .8rem;
  font-weight: 400;
}

.star-pic {
  max-width: 100%;
  border-radius: 50%;
  height: auto;
}

.display-4 {
  font-size: 2rem;
  font-weight: 300;
  margin: .5rem .25rem;
  letter-spacing: .2rem;
  text-shadow: 0 0 2px black
}

.abc {
  font-size: 1.5rem;
  text-shadow: 0 0 2px dimgray
}

.singer {
  font-weight: 800;
  font-size: .8rem;
  color: dimgray
}

.allstar {
  position: absolute;
  width: 70%;
  right: -100%;
  height: 100%;
  overflow: scroll;
  top: 0;
  background: #fff
}

@keyframes movein {
  from { right: -100% }
  to { right: 0 }
}

@keyframes moveout {
  from { right: 0; }
  to { right: -100%; }
}

.movein {
  animation: movein 1s forwards;
}

.moveout {
  animation: moveout 1s forwards
}

ul {
  list-style: none
}

</style>
