import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { CreatePage } from '../pages/createPage';
import { DeletePage } from '../pages/deletePage';
import { InstructionsPage } from '../pages/instructionsPage';
import { ReadPage } from '../pages/readPage';
import { UpdatePage } from '../pages/updatePage';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <InstructionsPage />
        </Route>
        <Route exact path="/instructions">
          <InstructionsPage />
        </Route>
        <Route exact path="/read">
          <ReadPage />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/update">
          <UpdatePage />
        </Route>
        <Route exact path="/delete">
          <DeletePage />
        </Route>
        <Route>404</Route>
      </Switch>
      <Footer />
    </Router>
  );
};
