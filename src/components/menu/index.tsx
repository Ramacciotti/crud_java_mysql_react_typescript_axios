import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <nav>
        <ol>
          <li>
            <Link to="/instructions">Instructions</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
        </ol>
      </nav>
    </Container>
  );
};
