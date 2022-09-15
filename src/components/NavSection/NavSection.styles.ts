import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray20};
  margin-right: 1rem;
`;

export const SectionLink = styled(NavLink)`
  display: flex;
  gap: 1.75rem;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray20};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.gray20};
    outline: 0;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray10};
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;
`;
