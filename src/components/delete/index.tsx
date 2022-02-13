import React, { useState } from 'react';
import { Container } from '../../layout';
import { Content } from './styles';
import { apiService } from '../../service/apiService';

export const Delete: React.FC = () => {
  const [id, setId] = useState<string>('');

  const exclude = async (id: string) => {
    apiService
      .delete('/person/' + id)
      .then((response) => {
        console.log('Success: ', response);
        alert('Successfully deleted!');
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert('Ops! An error has occurred!');
      });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    exclude(id);
  };

  return (
    <Container>
      <Content>
        <h2>Delete</h2>
        <form onSubmit={onSubmit} method="DELETE">
          <input id="id" name="id" type="text" value={id} onChange={(e) => setId(e.target.value)} required placeholder="Id" />
          <button type="submit">Delete</button>
        </form>
      </Content>
    </Container>
  );
};
