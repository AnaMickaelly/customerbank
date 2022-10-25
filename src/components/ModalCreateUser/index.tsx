import { useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { CreateUser, EditUser } from '../../services/users/users';
import { Button } from '../Button';
import { Container, Form } from './styles';
import { ModalCreateUserProps } from './types';

const ModalCreateUser = ({ edit, data }: ModalCreateUserProps) => {
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: edit ? data?.name : '',
      date: edit ? data?.date : '',
      document: edit ? data?.document : '',
      bank: {
        bankName: edit ? data?.bank?.bankName : '',
        agency: edit ? data?.bank?.agency : '',
        account: edit ? data?.bank?.account : '',
      },
    },
  });

  const onSubmit = async (info: any) => {
    try {
      (await edit) ? EditUser(info, data?.id) : CreateUser(info);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          name="name"
          type="text"
          placeholder="Digite o seu nome:"
          required
        />
        <input
          {...register('date')}
          name="date"
          type="date"
          placeholder="Digite o seu nome:"
          required
        />

        <input
          {...register('document')}
          name="document"
          type="text"
          placeholder="Digite seu CPF:"
          required
        />
        <input
          {...register('bank.bankName')}
          name="bank.bankName"
          type="text"
          placeholder="Digite o nome do seu banco:"
          required
        />

        <input
          {...register('bank.agency')}
          name="bank.agency"
          type="text"
          placeholder="Digite sua agência:"
          required
        />
        <input
          {...register('bank.account')}
          name="bank.account"
          type="text"
          placeholder="Digite sua conta:"
          required
        />

        <Button background="#E53E3E" onClick={closeModal}>
          Cancelar
        </Button>
        <Button type="submit" background="#38A169">
          {edit ? 'Editar' : 'Criar'}
        </Button>
      </Form>
    </Container>
  );
};

export { ModalCreateUser };
