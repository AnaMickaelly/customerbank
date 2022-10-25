import { UsersProps } from '../../services/users/types';
import { TableContainer } from './styles';

const Table = ({ data }: UsersProps) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Nome</th>
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
            <td>{user?.document}</td>
            <td>{user?.bank?.bankName}</td>
            <td>{user?.bank?.agency}</td>
            <td>{user?.bank?.account}</td>
            <div className="actions">
              <img src="images/icons/icon-edit.png" alt="Editar" />
              <img src="images/icons/icon-remove.png" alt="Excluir" />
            </div>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
export { Table };
