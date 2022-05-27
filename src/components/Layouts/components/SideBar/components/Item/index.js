import { useLocation, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Item.module.scss'

const cx = classNames.bind(styles)

function Item({ icon, image, title, to, href, play: Play, active, sizePlay, live, className, ...any }) {
  const Item = to ? Link : href ? 'a' : 'button'
  const crrPath = useLocation()

  const Icon = icon && icon.Icon
  const size = (icon && icon.size) || 24

  const props = {
    to,
    href,
    ...any
  }

  return (
    <Item
      className={cx('wrapper', {
        active: to === crrPath.pathname,
        [className]: className
      })}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {image && <img src={image} alt={title} />}
      <p className={cx('title')}>{title}</p>
      {live && <img src={live} alt="Live" />}
      {Play && <Play size={sizePlay || '20'} className={cx('play-icon', { active })} />}
    </Item>
  )
}

export default Item
