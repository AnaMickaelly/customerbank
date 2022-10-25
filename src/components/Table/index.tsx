import { useModal } from '../../hooks/useModal';
import { UsersProps } from '../../services/users/types';
import { DeleteUser } from '../../services/users/users';
import { ModalDeleteUser } from './components/ModalDeleteUser';
import { TableContainer } from './styles';

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

  return (
    <TableContainer>
      <thead>
        <tr>
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
        {data?.map((user) => (
          <tr key={user?.id}>
            <td>{user?.name}</td>
            <td>{user?.date}</td>
            <td>{user?.document}</td>
            <td>{user?.bank?.bankName}</td>
            <td>{user?.bank?.agency}</td>
            <td>{user?.bank?.account}</td>
            <div className="actions">
              <img src="images/icons/icon-edit.png" alt="Editar" />
              <img
                onClick={() => handleOpenModalDeleteUser(String(user?.id))}
                src="images/icons/icon-remove.png"
                alt="Excluir"
              />
            </div>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
export { Table };
