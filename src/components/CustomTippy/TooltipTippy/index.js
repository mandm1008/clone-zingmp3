import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'
import styles from './TooltipTippy.module.scss'
import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles)

function TooltipTippy({ content, children, placement = 'bottom', nodiv, nomg }) {
  return nodiv ? (
    <Tippy
      placement={placement}
      content={
        <div
          className={cx('tippy', {
            nomg: nomg
          })}
        >
          {content}
        </div>
      }
    >
      {children}
    </Tippy>
  ) : (
    <Tippy placement={placement} content={content}>
      <div
        className={cx('tippy', {
          nomg: nomg
        })}
      >
        {children}
      </div>
    </Tippy>
  )
}

export default TooltipTippy
