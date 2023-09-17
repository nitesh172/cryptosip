const NavMenuList = [
  {
    id: 0,
    name: 'Airdrops',
    navigate: '/airdrops',
    submenu: false,
  },
  {
    id: 1,
    name: 'Resources',
    navigate: '/resources',
    submenu: true,
  },
  {
    id: 2,
    name: 'Blogs',
    navigate: '/blogs',
    submenu: true,
  },
  {
    id: 3,
    name: 'Pricing',
    navigate: '/pricing',
    submenu: false,
  },
]

const ResourcesSubMenu = [
  {
    id: 0,
    name: 'About us',
    navigate: '/about-us',
    description: 'Learn about our story and our mission statement.',
  },
  {
    id: 1,
    name: 'Press',
    navigate: '/press',
    description: 'News and writings, press releases, and resources.',
  },
  {
    id: 2,
    name: 'Carrers',
    navigate: '/carrers',
    description: 'We’re always looking for talented people. Join us!',
  },
  {
    id: 3,
    name: 'Legal',
    navigate: '/legal',
    description: 'All the boring stuff that we Dan from legal made us add.',
  },
  {
    id: 4,
    name: 'Video tutorials',
    navigate: '/video-tutorials',
    description: 'Get up and running on new features and techniques.',
  },
  {
    id: 5,
    name: 'Help and support',
    navigate: '/help',
    description: 'Learn, fix a problem, and get answers to your questions.',
  },
]

const FooterMenu = [
  {
    heading: 'Company',
    menus: [
      {
        title: 'Careers',
        link: '/carrers',
      },
      {
        title: 'About us',
        link: '/about-us',
      },
      {
        title: 'Press',
        link: '/press',
      },
      {
        title: 'Contact',
        link: '/contact',
      },
    ],
  },
  {
    heading: 'Resources',
    menus: [
      {
        title: 'Blogs',
        link: '/blogs',
      },
      {
        title: 'FAQ',
        link: '/faq',
      },
      {
        title: 'Tutorials',
        link: '/tutorials',
      },
      {
        title: 'Support',
        link: '/support',
      },
    ],
  },
  {
    heading: 'Legal',
    menus: [
      {
        title: 'Terms',
        link: '/terms-and-consditions',
      },
      {
        title: 'Privacy',
        link: '/privacy',
      },
      {
        title: 'Cookies',
        link: '/cookie-policy',
      },
      {
        title: 'Licenses',
        link: '/licenses',
      },
    ],
  },
]

const cookieLinks = [
  {
    id: 0,
    name: 'Microsoft Internet Explorer',
    link: 'https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-11'
  },
  {
    id: 1,
    name: 'Microsoft Edge',
    link: 'https://support.microsoft.com/en-us/microsoft-edge/slet-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
  },
  {
    id: 2,
    name: 'Google Chrome',
    link: 'https://support.google.com/chrome/answer/95647?hl=en'
  },
  {
    id: 3,
    name: 'Safari',
    link: 'https://support.apple.com/en-in/guide/safari/sfri11471/mac'
  },
  {
    id: 4,
    name: 'Firefox',
    link: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox'
  },
]

export { NavMenuList, ResourcesSubMenu, FooterMenu, cookieLinks }
