import styled from 'styled-components';

type ButtonProps = {
  background?: string;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  background-color: ${({ background }) => background};
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'poppins';
  font-weight: 600;

  &.color-blue {
    background-color: #0054ff;
  }
`;
