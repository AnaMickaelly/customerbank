import Avatar from 'boring-avatars';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useModal } from '../../hooks/useModal';
import { UserProps, UsersProps } from '../../services/users/types';
import { DeleteUser } from '../../services/users/users';
import { ModalCreateUser } from '../ModalCreateUser';
import { ModalDeleteUser } from './components/ModalDeleteUser';
import { TableContainer } from './styles';

type TableProps = {
  data: UserProps;
};

const Table = ({ data }: UsersProps) => {
  const { handleOpenModal, closeModal } = useModal();

  const handleDeleteUser = async (id: string) => {
    try {
      await DeleteUser(id);
      window.location.reload();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModalDeleteUser = (id: string) => {
    handleOpenModal({
      title: 'Confirmação de exclusão:',
      element: (
        <ModalDeleteUser
          cancel={closeModal}
          close={() => handleDeleteUser(id)}
        />
      ),
    });
  };

  const handleOpenModalEditUser = ({ data }: TableProps) => {
    handleOpenModal({
      title: 'Editar Usuário:',
      element: <ModalCreateUser edit data={data} />,
    });
  };

  useEffect(() => {
    if (!data) {
      toast('Erro ao trazer os dados. Verifique a documentação no Github.', {
        position: 'bottom-center',
        style: { backgroundColor: '#E53E3E', color: '#fff' },
      });
    }
  }, [data]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Data</th>
          <th>Documento</th>
          <th>Banco</th>
          <th>Agência</th>
          <th>Conta</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data?.map((user) => (
            <tr key={user?.id}>
              <td>
                <Avatar
                  size={40}
                  key={user?.id}
                  name={user.name}
                  variant="beam"
                />
              </td>
              <td>{user?.name}</td>
              <td>{user?.date}</td>
              <td>{user?.document}</td>
              <td>{user?.bank?.bankName}</td>
              <td>{user?.bank?.agency}</td>
              <td>{user?.bank?.account}</td>
              <td className="actions">
                <img
                  onClick={() => handleOpenModalEditUser({ data: user })}
                  src="images/icons/icon-edit.png"
                  alt="Editar"
                />
                <img
                  onClick={() => handleOpenModalDeleteUser(String(user?.id))}
                  src="images/icons/icon-remove.png"
                  alt="Excluir"
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
            <td>Não há informações.</td>
          </tr>
        )}
      </tbody>
    </TableContainer>
  );
};
export { Table };
