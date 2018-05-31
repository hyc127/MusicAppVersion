import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/container'
import personal from '../components/personal'
import musicbar from '../components/musicbar'
import setting from '../components/setting'
import singers from '../components/singer'
import playMv from '../components/playMv'
import singerpage from '../components/singerpage'
import ranklist from '../components/ranklist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'personal',
          component: personal
        },
        {
          path: 'musicbar',
          component: musicbar
        },
        {
          path: 'playMv',
          component: playMv
        },
      ]
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/singer',
      component: singers,
      children: [
        {
          path: 'singerpage',
          component: singerpage
        },
      ]
    },
    {
      path: '/ranklist',
      component: ranklist,
    }
  ]
})
