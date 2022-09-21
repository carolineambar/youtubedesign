import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../Toggle';
import { HeaderContainer, LinkHome, Icon, User } from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <LinkHome>
      <Link to='/home'>
        <Icon />
      </Link>
    </LinkHome>
    <User />
  </HeaderContainer>
);

export default Header;
