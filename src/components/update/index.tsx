import React, { useState } from 'react';
import { Container } from '../../layout';
import { Content } from './styles';
import { apiService } from '../../service/apiService';

export const Update: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  const update = async (id: string, name: string, cpf: string) => {
    apiService
      .put('/person/' + id, {
        id: id,
        name: name,
        cpf: cpf,
      })
      .then((response) => {
        console.log('Success: ', response);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    update(id, name, cpf);
  };

  return (
    <Container>
      <Content>
        <h2>Update</h2>
        <form onSubmit={onSubmit} method="PUT">
          <input id="id" name="id" type="text" value={id} onChange={(e) => setId(e.target.value)} required placeholder="Id" />
          <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Complete Name" />
          <input id="cpf" name="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required placeholder="CPF" />
          <button type="submit">Update</button>
        </form>
      </Content>
    </Container>
  );
};
