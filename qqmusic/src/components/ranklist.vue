<template>

<div id="toplist">
  <div class="toplist-nav">
    <h3>QQ音乐巅峰榜</h3>
    <hr>
    <ul class="toplist-nav-item">
      <li :class="{ active: current === index }" class="toplist-item" v-for="(item, index) in tp_cn" :key="index" @click="current=index, getDetails(item)">
        <span v-text="item.name">巅峰榜·热歌</span>
      </li>
    </ul>
    <h3>全球榜</h3>
    <hr>
    <ul class="toplist-nav-item">
      <li class="toplist-item" :class="{ active: current === index + 13 }" v-for="(item, index) in tp_usa" :key="index" @click="current=index + 13, getDetails(item, true)">
        <span v-text="item.name">美国公告牌榜</span>
      </li>
    </ul>
  </div>

  <div class="list-view" v-if="show">
    <h2 class="display-2"> &lt; 巅峰榜·热歌 &gt;</h2>
    <div class="btn-list">
      <button class="btn-item">播放全部</button>
      <button class="btn-item">添加到</button>
    </div>
    <ul class="list-container">
      <li class="list-item">
        <span class="flex-3">歌曲</span>
        <span class="flex-1">歌手</span>
      </li>
      <li class="list-item" v-for="(item, index) in _detail" :key="index">
        <div class="list-thumbnail w-70 flex-flow">
          <span class="list-badge w-10"> {{ index + 1 }} </span>
          <img :src="prefex + item.data.albummid + '.jpg'" alt="" class="s-img w-40" @click="$store.commit('play', item.data.songid)">
          <span v-text="item.data.songname" class="w-40 name">肆无忌惮</span>
        </div>
        <span class="w-30 name" v-text="item.data.singer[0].name">薛之谦</span>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return { current: -1, currentIndex: 0, arr: {}, show: false, prefex: 'https://y.gtimg.cn/music/photo_new/T002R150x150M000' }
  },
  methods: {
    getDetails: function(item) {
      let len = arguments.length
      this.show = false
      let _this = this
      if (typeof _this.arr[item.id] == 'undefined'){
        const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=' + item.key +'&topid=' + item.id + '&type=top&song_begin=0&song_num=15&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0'
        const url2 = '/usa/?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=' + item.id + '&_=1527777166719'
          if (len != 2) {
            $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonpCallback: 'MusicJsonCallbacktoplist',
            success: (data) => {
              _this.arr[item.id] = data
              _this.currentIndex = item.id
              _this.show = true
            }
          })
        } else {
          $.getJSON(url2, (data) => {
            _this.arr[item.id] = data
            _this.show = true
            _this.currentIndex = item.id
          })
        }
      } else {
        _this.currentIndex = item.id
        _this.show = true
      }
    },
    play: id => player.play(id)
  },
  computed: {
    tp_cn() {
      let arr = []
      let data = this.$store.getters.toplist_cn
      data.forEach((item) => {
        let id = item.id
        let key = item.update_key
        let name = item.name
        arr.push({
          id: id,
          key: key,
          name: name,
        })
      })
      return arr
    },
    tp_usa() {
      let arr = []
      let data = this.$store.getters.toplist_usa
      data.forEach((item) => {
        let id = item.id
        let key = item.update_key
        let name = item.name
        arr.push({
          id: id,
          key: key,
          name: name
        })
      })
      return arr
    },
    _detail() {
      return this.arr[this.currentIndex].songlist
    }
  },
}
</script>

<style>

#toplist {
  height: 100vh;
  overflow: hidden;
  font-size: .5rem;
  text-align: center;
  padding-top: 1rem;
}

.toplist-nav-item {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toplist-nav {
  float: left;
  width: 30%;
  height: 100%;
  overflow: scroll;
  border: 1px solid #eee;
  border-top: 0;
  padding: 1rem 0;
}

.toplist-item {
  margin-bottom: 1rem;
}

.active {
  background: #31c27c;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #fff;
  letter-spacing: .1rem;
}

.list-view {
  margin-left: 30%;
}

.btn-item {
  border: 0;
  outline: 0;
  background: #ededed;
  padding: .3rem;
  min-width: 100px;
  border: 1px solid #c9c9c9;
}

.display-2 {
  font-weight: 300;
  font-size: 1rem;
  margin: .5rem .25rem;
  letter-spacing: .1rem;
  text-shadow: 0 0 1px black
}

.list-item {
  display: flex;
  flex-direction: row;
  text-align: right;
  padding: 0 .3rem .5rem .1rem

}

.flex-3 {
  flex-grow: 3
}

.flex-1 {
  flex-grow: 1
}

.w-30 {
  width: 30%
}

.w-70 {
  width: 70%
}

.w-20 {
  width: 20%
}

.w-10 {
  width: 10%
}

.w-40 {
  width: 40%
}

.flex-flow {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

.list-container {
  padding: 0;
  margin: 0
}

.s-img {
  width: 2rem;
  height: 2rem;
}

.name {
  overflow: hidden;
  white-space: nowrap;
}
</style>
