import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/youtube.svg';
import { ReactComponent as Avatar } from '../../assets/user.svg';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.gray30};
  height: 56px;
  width: 100%;
  padding: 0 27px;
  position: sticky;
  display: flex;
  justify-content: space-between;
`;

export const LinkHome = styled.div`
  width: 90px;
  height: 20px;
  position: relative;
  top: calc(50% - 10px);
  cursor: pointer;
`;

export const Icon = styled(Logo)`
  height: 20px;
  width: 90px;
`;

export const User = styled(Avatar)`
  height: 32px;
  width: 32px;
  top: calc(50% - 16px);
  position: relative;
`;
