import React from 'react';
import { Container } from '../../layout';
import { Content } from './styles';

export const Instructions: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Instructions</h2>
        <p>The below instructions are necessary for our fullstack project to work. So if you want to perform the CRUD operations, you´ll need to:</p>
        <div>
          <p>1. Set the database username and password on application.properties of your JAVA project;</p>
          <p>
            2. Make sure you are running your JAVA project on: http://localhost:8080. The reason is that, by default, the embedded server for spring boot starts
            on port 8080;
          </p>
          <p>3. Run your JAVA project at the same time as the React project;</p>
          <p>Obs: The read page will be empty and will show you an error alert until you create some item.</p>
          <p>I hope you have fun :)</p>
        </div>
      </Content>
    </Container>
  );
};
