import { useState } from 'react'
import classNames from 'classnames/bind'

import { TooltipTippy } from '~/components/CustomTippy'
import Item from '../Item'
import SettingModal from '../SettingModal'
import styles from './Library.module.scss'
import { LibraryItems } from '../Constant'
import { AddIcon, EditIcon } from '~/components/Icons'
import PlaylistModal from '../PlaylistModal'

const cx = classNames.bind(styles)

function Library() {
  const dataSettingLibraryItems = JSON.parse(localStorage.getItem('sidebar-library-items'))
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false)
  const [isOpenLibraryModal, setIsOpenLibraryModal] = useState(false)
  const [libraryUserItems, setLibraryUserItems] = useState(
    dataSettingLibraryItems
      ? LibraryItems.map((item, i) => {
          item.visible = dataSettingLibraryItems[i]
          return item
        })
      : LibraryItems
  )

  return (
    <>
      <div className={cx('lib-title')}>
        Thư viện
        <TooltipTippy content="Chỉnh sửa" placement="top" nodiv>
          <div className={cx('lib-icon')} onClick={() => setIsOpenSettingModal(true)}>
            <EditIcon size="16" />
          </div>
        </TooltipTippy>
      </div>
      {libraryUserItems.map((item, i) => item.visible && <Item key={i} {...item.props} />)}

      <SettingModal
        data={libraryUserItems}
        isOpen={isOpenSettingModal}
        controls={{ close: () => setIsOpenSettingModal(false), update: (data) => setLibraryUserItems(data) }}
      />

      <div onClick={() => setIsOpenLibraryModal(true)} className={cx('add-playlist')}>
        <Item icon={{ Icon: AddIcon }} size="18" title="Tạo playlist mới" />
      </div>

      <PlaylistModal isOpen={isOpenLibraryModal} controls={{ close: () => setIsOpenLibraryModal(false) }} />
    </>
  )
}

export default Library
