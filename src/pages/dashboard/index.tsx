import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import toast from 'react-hot-toast';
import '../../../public/images/logo-customerbank.png';
import { Button } from '../../components/Button';
import { ModalCreateUser } from '../../components/ModalCreateUser';
import { Table } from '../../components/Table';
import { useModal } from '../../hooks/useModal';
import { UsersProps } from '../../services/users/types';
import { Container, ContainerTable, Header } from './styles';

const Dashboard = ({ data }: UsersProps) => {
  const router = useRouter();
  const { handleOpenModal, closeModal } = useModal();

  const handleOpenModalCreateUser = () => {
    handleOpenModal({
      title: 'Criar usuário:',
      element: <ModalCreateUser />,
    });
  };

  const logout = () => {
    destroyCookie(null, 'token');
    toast('Muito obrigado por utilizar o Customer Bank!  {^_^}/', {
      position: 'bottom-center',
      style: { backgroundColor: '#38A169', color: '#fff' },
    });
    router.push('/');
  };

  return (
    <Container>
      <Header>
        <img src="/images/logo-customerbank.png" alt="logo" />
        <div>
          <Button onClick={handleOpenModalCreateUser} type="submit">
            Criar
          </Button>
          <Button onClick={logout} background="#CA4747" type="submit">
            Sair
          </Button>
        </div>
      </Header>
      <ContainerTable>
        <Table data={data} />
      </ContainerTable>
    </Container>
  );
};

export { Dashboard };
