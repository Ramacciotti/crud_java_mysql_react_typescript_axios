import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  display: flex;
  height: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  h6 {
    color: var(--white);
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;

    a {
      text-decoration: none;
      color: var(--secondary);
    }
  }
`;
