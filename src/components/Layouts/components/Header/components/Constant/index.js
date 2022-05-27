import {
  AdsIcon,
  BlockIcon,
  InfoIcon,
  LogoutIcon,
  PhoneIcon,
  PlayIcon,
  QuailityIcon,
  ReportIcon,
  SheldIcon,
  TextIcon,
  VipIcon,
  VipRadiusIcon,
  GoRightIcon
} from '~/components/Icons'

export const DataSettings = [
  {
    icon: { Icon: BlockIcon, size: 20 },
    title: 'Danh sách chặn',
    props: {
      to: '/mymusic/blocked'
    }
  },
  {
    icon: { Icon: QuailityIcon, size: 20 },
    title: 'Chất lượng nhạc',
    play: GoRightIcon,
    props: {}
  },
  {
    icon: { Icon: PlayIcon, size: 20 },
    title: 'Giao diện',
    play: GoRightIcon,
    props: {}
  },
  {
    spacer: true
  },
  {
    icon: { Icon: InfoIcon, size: 20 },
    title: 'Giới thiệu',
    props: {},
    sub: true
  },
  {
    icon: { Icon: ReportIcon, size: 20 },
    title: 'Góp ý',
    props: {
      href: 'https://github.com/'
    },
    sub: true
  },
  {
    icon: { Icon: PhoneIcon, size: 20 },
    title: 'Liên hệ',
    props: {
      to: '/contact'
    },
    sub: true
  },
  {
    icon: { Icon: AdsIcon, size: 20 },
    title: 'Quảng cáo',
    props: {
      href: 'https://www.google.com'
    },
    sub: true
  },
  {
    icon: { Icon: TextIcon, size: 20 },
    title: 'Thoả thuận sử dụng',
    props: {
      to: '/tnc'
    },
    sub: true
  },
  {
    icon: { Icon: SheldIcon, size: 20 },
    title: 'Chính sách bảo mật',
    props: {
      to: '/privacy'
    },
    sub: true
  }
]

export const DataMenu = [
  {
    icon: { Icon: VipIcon, size: 20 },
    title: 'Nâng cấp VIP',
    props: {
      to: '/vip'
    }
  },
  {
    icon: { Icon: VipRadiusIcon, size: 20 },
    title: 'Mua Code VIP',
    props: {
      to: '/vip/byCode'
    }
  },
  {
    spacer: true
  },
  {
    icon: { Icon: LogoutIcon, size: 20 },
    title: 'Đăng xuất',
    props: {
      to: '/logout'
    }
  }
]
