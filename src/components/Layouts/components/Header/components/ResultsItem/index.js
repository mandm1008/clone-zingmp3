import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { PlayNoIcon } from '~/components/Icons'
import styles from './ResultsItem.module.scss'

const cx = classNames.bind(styles)

function ResultsItem({ data }) {
  return (
    <>
      {data &&
        data.map((item, i) => {
          const title = item.name || item.title
          const src = item.thumbnailM
          const description =
            item.sortDescription ||
            (item.artists
              ? item.artists.map((item) => item.name).join(', ')
              : 'Nghệ sĩ | ' + item.totalFollow < 1000
              ? item.totalFollow
              : Math.floor(item.totalFollow / 1000) + 'K quan tâm')

          return (
            <Link to={item.link} key={i} className={cx('results')}>
              <div className={cx('play')}>
                <img
                  className={cx({
                    artist: title === item.name
                  })}
                  src={src}
                  alt={title}
                />
                {title === item.title && <PlayNoIcon className={cx('play-icon')} size="16" />}
              </div>
              <div className={cx('results-content')}>
                <h4 className={cx('results-title')}>{title}</h4>
                <p className={cx('results-sub-title')}>{description}</p>
              </div>
            </Link>
          )
        })}
    </>
  )
}

export default ResultsItem
