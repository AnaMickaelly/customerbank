import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99999;
`;

export const WrapperModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 320px;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
`;

export const IconModal = styled.div``;

export const ContentModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleModal = styled.div`
  h2 {
    width: 100%;
    height: 70px;
    color: #101828;
    font-weight: 700;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const DescriptionModal = styled.div`
  p {
    margin: 0;
    color: #667085;
    width: 100%;
    height: 60px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 16px;

  img {
    width: 20px;
    cursor: pointer;
  }
`;
