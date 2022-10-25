import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100vh;

  h2 {
    font-size: 42px;
    font-weight: 600;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
  }

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const ImageContent = styled.div`
  .img-login {
    width: 490px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: #0054ff;
  width: 40%;
  height: 100vh;

  img {
    display: none;
  }

  @media screen and (max-width: 920px) {
    width: 100%;

    img {
      display: initial;
      width: 270px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 38px;

  h2 {
    font-weight: 900;
    font-size: 45px;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 18px;

    color: #ffffff;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  button {
    width: 100%;
    max-width: 160px;
    font-size: 20px;
    border: 3px solid #ffffff;
    transition: 0.3s;

    &:hover {
      background-color: #ffffff;
      color: #000;
    }
  }
`;
