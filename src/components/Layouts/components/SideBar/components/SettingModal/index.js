import { useState } from 'react'
import classNames from 'classnames/bind'
import Modal from '~/components/Modal'
import Item from '../Item'
import styles from './SettingModal.module.scss'

const cx = classNames.bind(styles)

function SettingModal({ data, isOpen, controls }) {
  const [inputValues, setInputValues] = useState(data.map((item) => item.visible))

  function handleCheckbox(i) {
    setInputValues((prev) => {
      const prevValue = [...prev]
      prevValue[i] = !prevValue[i]
      return prevValue
    })
  }

  function handleUpdateData() {
    controls.close()
    controls.update(
      data.map((item, i) => {
        item.visible = inputValues[i]
        return item
      })
    )
    localStorage.setItem('sidebar-library-items', JSON.stringify(inputValues))
  }

  return (
    <Modal isOpen={isOpen} onClickOutside={controls.close}>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>Thư Viện Cá Nhân</h2>
        <p className={cx('sub-title')}>Bạn có thể tuỳ chỉnh danh sách thư viện cá nhân.</p>
        <div className={cx('list')}>
          {data.map((item, i) => (
            <label key={i} className={cx('item')} onClick={() => handleCheckbox(i)}>
              <input type="checkbox" checked={inputValues[i]} onChange={() => {}} />
              <Item className={cx('inner')} image={item.props.image} title={item.props.title} />
            </label>
          ))}
        </div>
        <div className={cx('controls')}>
          <button className={cx('btn', 'btn-close')} onClick={controls.close}>
            Đóng
          </button>
          <button className={cx('btn', 'btn-save')} onClick={() => handleUpdateData()}>
            Lưu
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SettingModal
