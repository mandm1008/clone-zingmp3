import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import images from '~/assets/images'
import Item from './components/Item'
import Spacer from '../Spacer'
import {
  FollowIcon,
  LibraryMusicIcon,
  RadioMusicIcon,
  ZingChartIcon,
  ZingIcon,
  MusicIcon,
  MenuIcon,
  StarIcon,
  MvIcon,
  PlayIcon
} from '~/components/Icons'
import Library from './components/Library'

const cx = classNames.bind(styles)

function SideBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to="/">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <Item icon={{ Icon: LibraryMusicIcon }} title="Cá Nhân" to="/library" play={PlayIcon} />
      <Item icon={{ Icon: ZingIcon }} title="Khám Phá" to="/" />
      <Item icon={{ Icon: ZingChartIcon }} title="#zing-chart" to="/chart" play={PlayIcon} />
      <Item icon={{ Icon: RadioMusicIcon }} title="Radio" to="/radio" play={PlayIcon} live={images.live} />
      <Item icon={{ Icon: FollowIcon }} title="Theo Dõi" to="/follow" play={PlayIcon} />

      <Spacer />

      <div className={cx('sub-side')}>
        <Item icon={{ Icon: MusicIcon }} title="Nhạc Mới" to="/new-music" play={PlayIcon} />
        <Item icon={{ Icon: MenuIcon }} title="Thể loại" to="/hub" />
        <Item icon={{ Icon: StarIcon }} title="Top 100" to="/top100" />
        <Item icon={{ Icon: MvIcon }} title="MV" to="/mv" />
        <Library />
      </div>
    </div>
  )
}

export default SideBar
