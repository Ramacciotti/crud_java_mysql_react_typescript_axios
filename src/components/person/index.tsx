/* eslint-disable react/jsx-key */
import React from 'react';
import { Content } from './styles';
import { IPerson } from '../../interfaces/IPerson';
import { Container } from '../../layout';

export const Person: React.FC<IPerson> = (props: IPerson) => {
  const { name, cpf } = props;

  return (
    <Container>
      <Content>
        <h3>Nome: {name}</h3>
        <p>Cpf: {cpf}</p>
      </Content>
    </Container>
  );
};
