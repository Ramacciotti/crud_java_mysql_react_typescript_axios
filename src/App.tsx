import React from 'react';
import { Routes } from './routes/';
import GlobalStyle from './styles';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
