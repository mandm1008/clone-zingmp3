import classNames from 'classnames/bind'
import styles from './Icons.module.scss'

const cx = classNames.bind(styles)

function Icon({ icon, size, className }) {
  return (
    <i
      style={{
        width: size + 'px',
        height: size + 'px',
        fontSize: size + 'px'
      }}
      className={cx('icon', icon, className)}
    ></i>
  )
}

export default Icon
