import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './SearchResultsTippy.module.scss'
import { HistoryIcon, TrendIcon } from '~/components/Icons'
import Spacer from '~/components/Layouts/components/Spacer'
import ResultsItem from '~/components/Layouts/components/Header/components/ResultsItem'

const cx = classNames.bind(styles)

function SearchResultsTippy({ data, visible, hiddenResults, children, hide }) {
  return (
    <Tippy
      interactive
      visible={visible}
      onClickOutside={hide}
      placement="bottom-start"
      offset={[0, -40]}
      zIndex="9"
      render={(attrs) => (
        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
          {data.msg === 'Success' && !hiddenResults ? (
            <>
              <h4 className={cx('title')}>Từ khoá liên quan</h4>
              <div className={cx('item')}>
                <HistoryIcon className={cx('icon')} />
                abc
              </div>

              <Spacer fullWidth />

              <h4 className={cx('title')}>Gợi ý kết quả</h4>
              <ResultsItem data={[...data.artists, ...data.playlists, ...data.songs]} />
            </>
          ) : (
            <>
              <h4 className={cx('title')}>Đề xuất cho bạn</h4>
              <div className={cx('item')}>
                <TrendIcon className={cx('icon')} />
                có không giữ
              </div>
            </>
          )}
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default SearchResultsTippy
