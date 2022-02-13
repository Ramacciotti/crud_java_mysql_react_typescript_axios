import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--white);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border-style: none;
    ::placeholder {
      color: var(--primary);
    }
  }

  button {
    background-color: var(--secondary);
    color: var(--primary);
    width: 350px;
    align-self: center;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;
