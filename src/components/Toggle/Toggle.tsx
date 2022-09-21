import React from 'react';
import { ToggleIcon } from './Toggle.styles';
import LateralMenu from '../LateralMenu';

const Toggle = () => {
  const [lateralMenu, setLateralMenu] = React.useState(false);

  const showLateralMenu = () => {
    setLateralMenu(!lateralMenu);
  };
  return (
    <>
      <div className={lateralMenu ? 'menu menuOpen' : 'menuClose'}>
        <ToggleIcon onClick={showLateralMenu} />
      </div>
      <LateralMenu />
    </>
  );
};

export default Toggle;
