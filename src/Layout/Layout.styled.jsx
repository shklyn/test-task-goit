import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 104px;
  padding: 12px 86px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  height: 80px;
  font-weight: 600;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: #b7d8e9;
  &.active {
    color: #ffc318;
  }

  &:hover {
    color: #ffc318;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;