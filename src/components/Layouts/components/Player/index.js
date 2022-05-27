import classNames from 'classnames/bind'
import {
  StarFullIcon,
  LikeFullIcon,
  MoreIcon,
  KaraokeIcon,
  RestoreIcon,
  MvIcon,
  VolumeIcon,
  ListMusicIcon,
  ShuffleIcon,
  PrevIcon,
  PlayIcon,
  NextIcon
} from '~/components/Icons'
import Range from '~/components/Range'
import Button from './components/Button'
import styles from './Player.module.scss'

const cx = classNames.bind(styles)

function Player() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('info')}>
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/d/b/db9d6443979fbe1bcaa20047348d23f3_1418715120.jpg"
          alt="Anh Không Sao Đâu"
        />
        <div className={cx('info-content')}>
          <h4>Anh Không Sao Đâu</h4>
          <p className={cx('info-singer')}>
            Chi Dân
            <StarFullIcon className={cx('info-icon-star')} size="10" />
          </p>
        </div>
        <div className={cx('info-menu')}>
          <Button
            primary
            content="Xoá khỏi thư viện"
            placement="top"
            size="32"
            icon={{ Icon: LikeFullIcon, size: 16 }}
          />
          <Button content="Xem thêm" placement="top" size="32" icon={{ Icon: MoreIcon, size: 16 }} />
        </div>
      </div>

      <div className={cx('controls-wrapper')}>
        <div className={cx('controls')}>
          <Button content="Trộn" placement="top" size="32" icon={{ Icon: ShuffleIcon, size: 16 }} />
          <Button size="32" icon={{ Icon: PrevIcon, size: 16 }} />
          <Button hoverPrimary size="50" icon={{ Icon: PlayIcon, size: 40 }} />
          <Button size="32" icon={{ Icon: NextIcon, size: 16 }} />
          <Button content="Bật phát lại tất cả" placement="top" size="32" icon={{ Icon: ShuffleIcon, size: 16 }} />
        </div>
        <div className={cx('time-box')}>
          <Range />
        </div>
      </div>

      <div className={cx('actions')}>
        <Button nomg content="MV" placement="top" size="30" icon={{ Icon: MvIcon, size: 20 }} />
        <Button nomg content="Xem lời bài hát" placement="top" size="30" icon={{ Icon: KaraokeIcon, size: 16 }} />
        <Button nomg content="Chế độ cửa sổ" placement="top" size="30" icon={{ Icon: RestoreIcon, size: 16 }} />
        <Button nomg size="30" icon={{ Icon: VolumeIcon, size: 16 }} />
        <input className={cx('volume-input')} type="range" value="50" min="0" max="100" />
        <div className={cx('spacer')}></div>
        <Button
          className={cx('list-music')}
          content="Danh sách phát"
          placement="top"
          size="30"
          icon={{ Icon: ListMusicIcon, size: 16 }}
          nomg
        />
      </div>
    </div>
  )
}

export default Player
