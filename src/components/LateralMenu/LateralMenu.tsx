import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, HomeIcon } from './LateralMenu.styles';

const LateralMenu = () => {
  const items = {
    home: {
      to: '/home',
      text: 'Home',
    },
    explore: {
      to: '/explore',
      text: 'Explore',
    },
    subscriptions: {
      to: '/subscriptionst',
      text: 'Subscriptions',
    },
    library: {
      to: '/library',
      text: 'Library',
    },
    history: {
      to: '/history',
      text: 'History',
    },
    yourvideos: {
      to: '/yourvideos',
      text: 'Your Videos',
    },
    watchlater: {
      to: '/watchlater',
      text: 'Watch Later',
    },
  };

  return (
    <Navbar>
      <ul>
        <li>
          <Link to={items.home.to}>
            <HomeIcon />
            {items.home.text}
          </Link>
        </li>
        <li>
          <Link to={items.explore.to}>{items.explore.text}</Link>
        </li>
        <li>
          <Link to={items.subscriptions.to}>{items.subscriptions.text}</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={items.library.to}>{items.library.text}</Link>
        </li>
        <li>
          <Link to={items.history.to}>{items.history.text}</Link>
        </li>
        <li>
          <Link to={items.yourvideos.to}>{items.yourvideos.text}</Link>
        </li>
        <li>
          <Link to={items.watchlater.to}>{items.watchlater.text}</Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default LateralMenu;
