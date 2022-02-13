import React from 'react';
import { Container, Content } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <h6>
          Project develop by{' '}
          <a href="https://www.linkedin.com/in/marianaramacciotti/" target="_blank" rel="noreferrer">
            Mariana Ramacciotti
          </a>
          , 2022
        </h6>
      </Content>
    </Container>
  );
};
