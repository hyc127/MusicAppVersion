<template>
  <div class="container">
      <Set :class="{ slow_move: isIn }"></Set>
    <div id="main" :class="{ fast_move: isIn }">
        <div class="header" :class="{ go: isSearch }">

        <div class="nav">
          <div class="menu" @click="isIn = true">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </div>
          <div class="navs">
            <router-link to="personal">我的</router-link>
            <router-link to="musicbar">音乐馆</router-link>
            <router-link to="singer">歌手</router-link>
          </div>
          <div class="more">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </div>
        </div>

        <div class="search">
          <input type="text" placeholder="搜索" class="search-box" @focus="search($event)" @blur="reset($event)">
          <i class="icon-search" v-show="!isSearch">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-search2"></use>
            </svg>
          </i>
        </div>
      </div>
      <div id="view">
        <div class="cover" v-show="isIn||gray"></div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Set from './setting'
export default {
    name: 'container',
    data() {
        return {
            isSearch: false,
            gray: false,
            isIn: false
        }
    },
    methods: {
        search(e) {
            e.target.setAttribute('placeholder', '搜索音乐、MV、歌单、用户')
            this.isSearch = !this.isSearch
        },
        reset(e) {
            e.target.setAttribute('placeholder', '搜索')
            this.isSearch = !this.isSearch
        },
    },
    components: {
        Set
    },
    mounted() {
        let main = document.getElementById('main')
        let set = document.getElementsByClassName('settings')[0]
        let view = document.getElementById('view')
        let m_width = main.offsetWidth;
        let v_top = 0

        let half = m_width / 2
        let flag = true
        let startX, dx, x, startY, dy, y

        //触摸开始，记录下初始触摸点
        view.addEventListener('touchstart', (e) => {
            // e.preventDefault()
            let finger = e.touches[0];
            startX = finger.pageX
            startY = finger.pageY
            x = main.style.left
            x = parseInt(x.split('px')[0])
            y = main.style.top
            y = parseInt(y.split('px')[0])
        }, true)

        //触摸移动
        view.addEventListener('touchmove', (e) => {
            e.preventDefault()
            let finger = e.touches[0]
            dx = finger.pageX - startX
            dy = finger.pageY - startY
            main.classList.remove('fast_move')
            set.classList.remove('slow_move')
            this.isIn = false
            if (flag) {
                if (Math.abs(dx) < Math.abs(dy)) {
                    flag = false
                }
            }
            if (flag) {
                if (x == m_width * .8) {
                    if (dx < 0) {
                        main.style.left = x + dx + 'px'
                        set.style.left = dx / 2 + 'px'
                    }
                } else {
                    if (dx <= m_width) {
                        main.style.left = dx + 'px'
                        set.style.left = -(m_width) * .4 + dx / 2 + 'px'
                    }
                }
            } else {
                view.style.top = v_top + dy + 'px'
            }

        }, true)

        //触摸结束
        view.addEventListener('touchend', (e) => {
            // e.preventDefault()
            if (flag) {
                if (dx >= half) {
                    main.style.left = m_width * .8 + 'px'
                    set.style.left = 0
                } else {
                    main.style.left = 0
                    set.style.left = -m_width * .8 + 'px'
                }
                if (main.style.left == m_width * .8 + 'px') {
                    this.gray = true
                } else {
                    this.gray = false
                }
            } else {
                v_top = parseInt(view.style.top.split('px')[0])
                if (v_top > 0) {
                    v_top = 0
                    view.style.top = 0
                }
            }
            flag = true
        }, true)
    }
}

</script>

<style scoped>
#main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 3;
}

#view {
  position: absolute;
  width: 100%;
}

a {
  color: rgb(232, 233, 224)
}

.header {
  background-color: #31c27c;
  width: 100%;
  height: 150px;
  position: fixed;
  z-index: 5;
  top: 0;
}

.nav {
  font-size: 1.2rem;
  height: 40px;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.router-link-active {
  color: #fff
}

.menu {
  margin-left: 1rem;
  display: inline-block;
  cursor: pointer;
}

.navs {
  display: inline-block;
}

.more {
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;
}

svg {
  fill: #fff;
}

.search {
  text-align: center;
  overflow: hidden;
  position: relative
}

.search-box {
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  outline: 0;
  border: 0;
  padding-left: .5rem;
  background: #66CDAA;
}

input::-webkit-input-placeholder{
            text-align: center;
            color:#fff;
            font-weight: 100;
        }

input:focus::-webkit-input-placeholder {
  text-align: left
}
.icon-search {
  position: absolute;
  left: calc(50% - 3rem);
  top: calc(50% - 1rem);
  font-size: 1.5rem;
}

@keyframes move {
  from { top: 0px; }
  to { top: -56px }
}

@keyframes slow {
  from { left: -40% }
  to { left: 0 }
}

@keyframes fast {
  from { left: 0 }
  to { left: 80% }
}

.slow_move {
  animation: slow .5s forwards
}

.fast_move {
  animation: fast .5s forwards
}

.go {
  animation: move .5s forwards
}

.setting {
  position: absolute;
  width: 100%;
  top: 0;
}
</style>
