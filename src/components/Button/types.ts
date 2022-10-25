export type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  background?: string;
  onClick?: () => void;
};
