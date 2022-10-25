import { useContext } from 'react';
import { ModalContext } from '../../contexts/Modal';

const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModal };
