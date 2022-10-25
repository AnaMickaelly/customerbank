import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;

  input {
    border-color: #000;
    color: #000;
    font-size: 16px;
    width: 100%;
    max-width: 210px;
    padding: 16px 8px;
    border-radius: 30px;

    ::placeholder {
      color: #000;
    }
  }

  button {
    margin-top: 18px;
  }
`;
