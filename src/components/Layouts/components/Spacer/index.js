import classNames from 'classnames/bind'
import styles from './Spacer.module.scss'

const cx = classNames.bind(styles)

function Spacer({fullWidth}) {
  return <span className={cx('spacer', {
    fullwidth: fullWidth
  })}></span>
}

export default Spacer
