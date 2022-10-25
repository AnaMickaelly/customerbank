import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 23px;
  margin: 0 12px;

  img {
    width: 180px;
  }

  div {
    display: flex;
    gap: 20px;

    button {
      width: 100px;
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  align-items: center;
  margin: 0 22px;
`;
