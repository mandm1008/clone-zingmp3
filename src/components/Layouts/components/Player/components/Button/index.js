import classNames from 'classnames/bind'
import { TooltipTippy } from '~/components/CustomTippy'
import styles from './Button.module.scss'
import ButtonItem from '~/components/Button'

const cx = classNames.bind(styles)

function Button({ icon, content, placement, size, primary, hoverPrimary, className, nomg }) {
  return content ? (
    <TooltipTippy content={content} placement={placement} nomg>
      <ButtonItem
        hoverPrimary={hoverPrimary}
        primary={primary}
        size={size}
        className={cx('icon', className, { hoverPrimary: hoverPrimary })}
        icon={icon}
      />
    </TooltipTippy>
  ) : (
    <ButtonItem
      hoverPrimary={hoverPrimary}
      primary={primary}
      size={size}
      className={cx('icon', className, { hoverPrimary: hoverPrimary })}
      icon={icon}
    />
  )
}

export default Button
