import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray30};
  height: 60.5rem;
  width: 15rem;
  padding: 1rem 0rem 1rem;
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-start;
  align-items: left;
`;
