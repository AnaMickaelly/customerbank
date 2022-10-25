import { Button as ButtonStyles } from './styles';
import { ButtonProps } from './types';

const Button = ({
  children,
  type = 'button',
  background,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyles
      onClick={onClick}
      background={background}
      className={background ? '' : 'color-blue'}
      type={type}
    >
      {children}
    </ButtonStyles>
  );
};

export { Button };
