<template>
  <div class="settings">
    <ul>
      <li>个性装扮<span>默认装扮</span></li>
      <li>消息中心</li>
      <li>免流量服务</li>
    </ul>

    <ul>
      <li>定时关闭
        <i class="toggle" @click="time = !time">
          <svg class="icon" aria-hidden="true" v-show="time">
            <use xlink:href="#icon-toggleon"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-show="!time">
            <use xlink:href="#icon-toggle-off"></use>
          </svg>
        </i>
      </li>
      <li>仅Wi-Fi联网
        <i class="toggle" @click="wifi = !wifi">
          <svg class="icon" aria-hidden="true" v-show="wifi">
              <use xlink:href="#icon-toggleon"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-show="!wifi">
            <use xlink:href="#icon-toggle-off"></use>
          </svg>
        </i>
      </li>
      <li>流量提醒
        <i class="toggle" @click="flow = !flow">
          <svg class="icon" aria-hidden="true" v-show="flow">
            <use xlink:href="#icon-toggleon"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-show="!flow">
            <use xlink:href="#icon-toggle-off"></use>
          </svg>
        </i>
      </li>
      <li>听歌偏好</li>
    </ul>

    <ul>
      <li>微云音乐网盘</li>
      <li>导入QQ账号音乐</li>
      <li>导入外部歌单</li>
      <li>清理占用空间</li>
      <li>帮助与反馈</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return { time: false, wifi: false, flow: false }
    }
  }
</script>


<style>
.settings {
  position: fixed;
  width: 80%;
  top: 0;
  left: -40%;
  z-index: 0
}

ul {
  padding: 0;
  margin-bottom: 4rem;
  margin-left: .5rem;
  list-style: none;
}

.settings li {
  margin: 1rem;
  font-weight: 300;
  font-size: .8rem;
  line-height: 2rem;
}

li .icon {
  fill: #31c27c;
  font-size: 2rem
}

.toggle {
  float: right;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.settings span {
  float: right;
  color: red
}
</style>
