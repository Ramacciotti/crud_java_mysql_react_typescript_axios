import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 2;

  nav {
    display: flex;
    width: 100%;
  }

  nav ol {
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    margin-left: 30px;

    a {
      font-size: 14px;
      font-family: sans-serif;
      text-decoration: none;
      color: var(--white);
    }
  }
`;
