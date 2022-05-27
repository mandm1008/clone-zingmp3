import classNames from 'classnames/bind'
import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

function Modal({ isOpen, children, onClickOutside = () => {} }) {
  return isOpen ? (
    <div className={cx('overlay')} onClick={onClickOutside}>
      <div className={cx('wrapper')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
}

export default Modal
