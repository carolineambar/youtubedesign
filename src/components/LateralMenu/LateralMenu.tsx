import React from 'react';
import { Navbar } from './LateralMenu.styles';
import NavSection from '../NavSection';
import HomeIcon from '../../assets/home.svg';
import ExploreIcon from '../../assets/explore.svg';
import SubscriptionsIcon from '../../assets/subscriptions.svg';
import LibraryIcon from '../../assets/library.svg';
import HistoryIcon from '../../assets/history.svg';
import YourVideosIcon from '../../assets/yourvideos.svg';
import WatchLaterIcon from '../../assets/watchlater.svg';
import LikedVideosIcon from '../../assets/likedvideos.svg';
import User from '../../assets/user.svg';

const sections = [
  {
    id: 'home',
  },
  {
    id: 'explore',
  },
  {
    id: 'subscriptions',
    label: 'SUBSCRIPTIONS',
  },
];

const links = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    section: 'home',
    icon: HomeIcon,
  },
  {
    id: 'explore',
    label: 'Explore',
    url: '/explore',
    section: 'home',
    icon: ExploreIcon,
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    url: '/subscriptions',
    section: 'home',
    icon: SubscriptionsIcon,
  },
  {
    id: 'library',
    label: 'Library',
    url: '/library',
    section: 'explore',
    icon: LibraryIcon,
  },
  {
    id: 'history',
    label: 'History',
    url: '/history',
    section: 'explore',
    icon: HistoryIcon,
  },
  {
    id: 'yourvideos',
    label: 'Your Videos',
    url: '/yourvideos',
    section: 'explore',
    icon: YourVideosIcon,
  },
  {
    id: 'watchlater',
    label: 'Watch Later',
    url: '/watchlater',
    section: 'explore',
    icon: WatchLaterIcon,
  },
  {
    id: 'likedvideos',
    label: 'Liked Videos',
    url: '/likedvideos',
    section: 'explore',
    icon: LikedVideosIcon,
  },
  {
    id: 'usuario1',
    label: 'James Gouse',
    url: '/jamesgouse',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'usuario2',
    label: 'Alan Cooper',
    url: '/alancooper',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'usuario3',
    label: 'Marcus Levin',
    url: '/marcuslevin',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'usuario4',
    label: 'Alexis Sears',
    url: '/alexissears',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'usuario5',
    label: 'Jessica Lambert',
    url: '/jessicalambert',
    section: 'subscriptions',
    icon: User,
  },
];

const LateralMenu = () => (
  <Navbar>
    {sections.map((section) => {
      const filteredLinks = links.filter((link) => link.section === section.id);
      return <NavSection section={section} links={filteredLinks} />;
    })}
  </Navbar>
);

export default LateralMenu;
