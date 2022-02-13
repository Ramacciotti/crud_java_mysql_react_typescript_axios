import React from 'react';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Container, Content } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Menu />
      </Content>
    </Container>
  );
};
