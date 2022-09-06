import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/youtube.svg';
import { ReactComponent as Avatar } from '../../assets/user.svg';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.gray30};
  height: 3.5rem;
  width: 100%;
  padding: 0 1.5rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkHome = styled.div`
  width: 6rem;
  height: 1.25rem;
  cursor: pointer;
`;

export const Icon = styled(Logo)`
  height: 1.25rem;
  width: 6rem;
`;

export const User = styled(Avatar)`
  height: 2rem;
  width: 2rem;
`;
