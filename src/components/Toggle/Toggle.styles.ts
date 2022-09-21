import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/toggle.svg';

export const ToggleIcon = styled(Icon)`
  width: 18px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  object-fit: contain;
  left: 25px;
`;
