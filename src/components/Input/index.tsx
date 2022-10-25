import { InputStyles } from './styles';
import { InputProps } from './types';

const Input = ({ name, type, placeholder }: InputProps) => {
  return <InputStyles placeholder={placeholder} name={name} type={type} />;
};

export { Input };
