import classNames from 'classnames/bind'
import { useState } from 'react'
import { TooltipTippy } from '~/components/CustomTippy'
import { ClearIcon } from '~/components/Icons'
import Modal from '~/components/Modal'
import { OptionsPlaylist } from '../Constant'
import styles from './PlaylistModal.module.scss'

const cx = classNames.bind(styles)

function PlaylistModal({ isOpen, controls }) {
  const [namePlaylist, setNamePlaylist] = useState('')
  const [options, setOptions] = useState(OptionsPlaylist)

  function handleCheckbox(e, i) {
    setOptions((prev) => {
      const newOptions = [...prev]
      newOptions[i].checked = e.target.checked
      return newOptions
    })
  }

  return (
    <Modal isOpen={isOpen} onClickOutside={controls.close}>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Tạo playlist mới</h2>
        <input
          type="text"
          className={cx('input')}
          placeholder="Nhập tên playlist"
          value={namePlaylist}
          onChange={(e) => setNamePlaylist(e.target.value)}
        />
        <div className={cx('content')}>
          {options.map((item, i) => (
            <div key={i} className={cx('item')}>
              <div className={cx('option')}>
                <h4 className={cx('text')}>{item.title}</h4>
                <p className={cx('sub-text')}>{item.subTitle}</p>
              </div>
              <label htmlFor={'sidebar-playlist-checkbox' + i}>
                <input
                  id={'sidebar-playlist-checkbox' + i}
                  className={cx('checkbox')}
                  type="checkbox"
                  hidden
                  checked={item.checked}
                  onChange={(e) => handleCheckbox(e, i)}
                />
                <i className={cx('check-icon')}></i>
              </label>
            </div>
          ))}
        </div>

        <button
          className={cx('btn', {
            disabled: !namePlaylist
          })}
        >
          Tạo mới
        </button>

        <TooltipTippy content="Đóng" placement="top" nodiv>
          <button onClick={controls.close} className={cx('clear')}>
            <ClearIcon size="16" />
          </button>
        </TooltipTippy>
      </div>
    </Modal>
  )
}

export default PlaylistModal
