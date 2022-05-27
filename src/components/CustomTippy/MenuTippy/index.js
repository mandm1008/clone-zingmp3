import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import Item from '~/components/Layouts/components/SideBar/components/Item'
import Spacer from '~/components/Layouts/components/Spacer'
import styles from './MenuTippy.module.scss'

const cx = classNames.bind(styles)

function MenuTippy({ data, children, placement = 'bottom-end' }) {
  return (
    <Tippy
      interactive
      trigger="click"
      placement={placement}
      render={(attrs) => (
        <div className={cx('menu-tippy')} tabIndex="-1" {...attrs}>
          {data.map((item, i) =>
            item.spacer ? (
              <Spacer key={i} fullWidth />
            ) : (
              <Item
                key={i}
                {...item.props}
                className={cx('menu-item', {
                  submenu: item.sub
                })}
                icon={item.icon}
                title={item.title}
                play={item.play}
                active
                sizePlay="16"
              />
            )
          )}
        </div>
      )}
    >
      <div className={cx('tippy')}>{children}</div>
    </Tippy>
  )
}

export default MenuTippy
