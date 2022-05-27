import Chart from '~/pages/Chart'
import Follow from '~/pages/Follow'
import Home from '~/pages/Home'
import Library from '~/pages/Library'
import NewMusic from '~/pages/NewMusic'
import Radio from '~/pages/Radio'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/radio', component: Radio },
  { path: '/chart', component: Chart },
  { path: '/follow', component: Follow },
  { path: '/library', component: Library },
  { path: '/new-music', component: NewMusic }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
