import images from '~/assets/images'
import { PlayIcon } from '~/components/Icons'

export const LibraryItems = [
  {
    visible: true,
    props: {
      image: images.music,
      title: 'Bài hát',
      to: '/my-music/song',
      play: PlayIcon
    }
  },
  {
    visible: true,
    props: {
      image: images.playlist,
      title: 'Playlist',
      to: '/my-music/playlist'
    }
  },
  {
    visible: false,
    props: {
      image: images.album,
      title: 'Album'
    }
  },
  {
    visible: false,
    props: {
      image: images.uploadMusic,
      title: 'Nhạc tải lên'
    }
  },
  {
    visible: true,
    props: {
      image: images.history,
      title: 'Gần đây',
      to: '/my-music/history'
    }
  },
  {
    visible: false,
    props: {
      image: images.playlist,
      title: 'Playlist cá nhân'
    }
  }
]

export const OptionsPlaylist = [
  {
    title: 'Công khai',
    subTitle: 'Mọi người có thể nhìn thấy playlist này',
    checked: true
  },
  {
    title: 'Phát ngẫu nhiên',
    subTitle: 'Luôn phát ngẫu nhiên tất cả bài hát',
    checked: true
  }
]
