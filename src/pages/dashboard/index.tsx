import { useRouter } from 'next/router';
import nookies from 'nookies';
import '../../../public/images/logo-customerbank.png';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { UsersProps } from '../../services/users/types';
import { Container, ContainerTable, Footer, Header } from './styles';

const Dashboard = ({ data }: UsersProps) => {
  const router = useRouter();

  const logout = () => {
    nookies.destroy(null, 'token');
    router.push('/');
  };

  return (
    <Container>
      <Header>
        <img src="/images/logo-customerbank.png" alt="logo" />
        <div>
          <Button type="submit">Criar</Button>
          <Button onClick={logout} background="#CA4747" type="submit">
            Sair
          </Button>
        </div>
      </Header>
      <ContainerTable>
        <Table data={data} />
      </ContainerTable>
      <Footer>
        <h2>
          Customer Bank - 2022
          <br />
          Todos os direitos reservados
        </h2>
      </Footer>
    </Container>
  );
};

export { Dashboard };
