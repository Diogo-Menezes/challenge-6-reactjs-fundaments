import React from 'react';

import { Link } from 'react-router-dom';

import { Container, LinkText } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  route: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  route = 'list',
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            <LinkText isSelected={route === 'list'}>Listagem</LinkText>
          </Link>
          <Link to="/import">
            <LinkText isSelected={route === 'import'}>Importar</LinkText>
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
