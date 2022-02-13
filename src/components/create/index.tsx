import React, { useState } from 'react';
import { Container } from '../../layout';
import { Content } from './styles';
import { apiService } from '../../service/apiService';

export const Create: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  const create = async (name: string, cpf: string) => {
    apiService
      .post('/person', {
        name: name,
        cpf: cpf,
      })
      .then((response) => {
        console.log('Success: ', response);
        alert("Successfully created!");
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert("Ops! An error has occurred!");
      });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    create(name, cpf);
  };

  return (
    <Container>
      <Content>
        <h2>Create</h2>
        <form onSubmit={onSubmit} method="POST">
          <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Complete Name" />
          <input id="cpf" name="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required placeholder="CPF" />
          <button type="submit">Create</button>
        </form>
      </Content>
    </Container>
  );
};
