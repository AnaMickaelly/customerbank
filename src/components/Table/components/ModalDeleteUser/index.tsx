import { Button } from '../../../Button';
import { Container } from './styles';
import { ModalDeleteUserProps } from './types';

const ModalDeleteUser = ({ cancel, close }: ModalDeleteUserProps) => {
  return (
    <Container>
      <Button onClick={cancel}>Cancelar</Button>
      <Button background="#E53E3E" onClick={close}>
        Excluir
      </Button>
    </Container>
  );
};

export { ModalDeleteUser };
