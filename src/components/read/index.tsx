import React from 'react';
import { useEffect, useState } from 'react';
import { apiService } from '../../service/apiService';
import { Person } from '../person';
import { Container } from './styles';
import { IPerson } from '../../interfaces/IPerson';

export const Read: React.FC = () => {
  const [people, setPeople] = useState<IPerson[]>();

  useEffect(() => {
    apiService
      .get<IPerson[]>('/people')
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert('Ops! An error has occurred!');
      });
  }, []);

  return (
    <Container>
      <span>
        {people &&
          people?.map((person) => {
            return (
              <section key={person.id}>
                <Person id={person?.id} name={person?.name} cpf={person?.cpf} />
              </section>
            );
          })}
      </span>
    </Container>
  );
};
