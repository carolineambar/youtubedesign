import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/home.svg';

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray30};
  height: 968px;
  width: 240px;
  padding: 16px 0px 16px;
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: left;
`;

export const HomeIcon = styled(Icon)`
  height: 18px;
  width: 16px;
`;
