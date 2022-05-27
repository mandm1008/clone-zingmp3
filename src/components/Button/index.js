import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, size = 40, icon, image, className, primary, hoverPrimary, ...props }) {
  const Btn = to ? Link : href ? 'a' : 'button'
  const Icon = icon && icon.Icon
  const sizeIcon = icon && icon.size
  props = {
    to,
    href,
    style: {
      width: size + 'px',
      height: size + 'px'
    },
    ...props
  }

  return (
    <Btn
      className={cx('wrapper', {
        [className]: className
      })}
      {...props}
    >
      {Icon && <Icon className={cx({ primary, hoverPrimary })} size={sizeIcon} />}
      {image && <img {...image} alt={image.alt} />}
    </Btn>
  )
}

export default Button
