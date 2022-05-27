import classNames from 'classnames/bind'
import Button from '~/components/Button'
import { BackIcon, ForwardIcon, SettingIcon, UploadIcon, VipIcon } from '~/components/Icons'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { MenuTippy, TooltipTippy } from '~/components/CustomTippy'
import { DataMenu, DataSettings } from './components/Constant'
import Search from './components/Search'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-ctn')}>
        <BackIcon size="24" />
        <ForwardIcon className={cx('icon')} size="24" />
        <Search />
      </div>
      <div className={cx('action')}>
        <TooltipTippy content="Chủ đề">
          <Button
            image={{
              src: images.theme,
              alt: 'Theme'
            }}
          />
        </TooltipTippy>
        <TooltipTippy content="Nâng cấp VIP">
          <Button to="/vip" icon={{ Icon: VipIcon, size: 20 }} />
        </TooltipTippy>
        <TooltipTippy content="Tải lên">
          <Button icon={{ Icon: UploadIcon, size: 20 }} />
        </TooltipTippy>
        <MenuTippy data={DataSettings}>
          <TooltipTippy content="Cài đặt">
            <Button icon={{ Icon: SettingIcon, size: 20 }} />
          </TooltipTippy>
        </MenuTippy>
        <MenuTippy data={DataMenu}>
          <Button
            image={{
              src: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
              alt: 'Avarta',
              width: 40,
              height: 40
            }}
          />
        </MenuTippy>
      </div>
    </div>
  )
}

export default Header
