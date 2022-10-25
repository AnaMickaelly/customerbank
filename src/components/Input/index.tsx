import { InputStyles } from './styles';
import { InputProps } from './types';

const Input = ({ name, type = 'text', placeholder, ...rest }: InputProps) => {
  return (
    <InputStyles
      {...rest}
      id={name}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
};

export { Input };
