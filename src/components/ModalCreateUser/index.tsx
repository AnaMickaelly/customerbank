import { FieldValues, useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { CreateUser } from '../../services/users/users';
import { Button } from '../Button';
import { Container, Form } from './styles';

const ModalCreateUser = () => {
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      await CreateUser(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          name="name"
          type="text"
          placeholder="Digite o seu nome:"
        />
        <input
          {...register('date')}
          name="date"
          type="date"
          placeholder="Digite o seu nome:"
        />

        <input
          {...register('document')}
          name="document"
          type="text"
          placeholder="Digite seu CPF:"
        />
        <input
          {...register('bank.bankName')}
          name="bank.bankName"
          type="text"
          placeholder="Digite o nome do seu banco:"
        />

        <input
          {...register('bank.agency')}
          name="bank.agency"
          type="text"
          placeholder="Digite sua agência:"
        />
        <input
          {...register('bank.account')}
          name="bank.account"
          type="text"
          placeholder="Digite sua conta:"
        />

        <Button background="#E53E3E" onClick={closeModal}>
          Cancelar
        </Button>
        <Button type="submit" background="#38A169">
          Criar
        </Button>
      </Form>
    </Container>
  );
};

export { ModalCreateUser };
