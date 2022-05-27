import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Player from '../components/Player'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <SideBar />
      </div>

      <div className={cx('content')}>
        <Header />
        <div className={cx('inner')}>{children}</div>
      </div>

      <div className={cx('player')}>
        <Player />
      </div>
    </div>
  )
}

export default DefaultLayout
