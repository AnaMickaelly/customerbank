import { useRouter } from 'next/router';
import nookies from 'nookies';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import '../../../public/images/logo-customerbank.png';
import { Button } from '../../components/Button';
import { GenerationToken } from '../../services/security';
import {
  Container,
  Content,
  FormLogin,
  ImageContent,
  LoginContainer,
  Wrapper,
} from './styles';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    try {
      if (data.email !== 'user@gmail.com' || data.password !== '123456') {
        toast(
          'Email ou senha incorretas. Verifique a documentação no Github.',
          {
            position: 'bottom-center',
            style: { backgroundColor: '#E53E3E', color: '#fff' },
          }
        );

        return;
      }

      const dataToken = GenerationToken();
      nookies.set(null, 'token', dataToken.token, {
        maxAge: 30 * 24 * 60 * 60,
      });
      toast('Login realizado com sucesso!', {
        position: 'bottom-center',
        style: { backgroundColor: '#38A169', color: '#fff' },
      });
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImageContent>
          <img
            className="img-login"
            src="/images/logo-customerbank.png"
            alt="logo"
          />
          <h2>
            O banco que <br /> facilita a sua vida!
          </h2>
        </ImageContent>
        <p>
          Customer Bank - 2022 <br />
          Todos os direitos reservados
        </p>
      </Wrapper>
      <LoginContainer>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <img
              className="img-login"
              src="/images/logo-customerbankbackground.png"
              alt="logo"
            />
            <h2>Login</h2>
            <p>Acesse sua conta agora mesmo!</p>
          </Content>
          <input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Digite seu email:"
          />
          <input
            {...register('password')}
            name="password"
            type="password"
            placeholder="Digite sua senha:"
          />
          <Button background="transparent" type="submit">
            Entrar
          </Button>
        </FormLogin>
      </LoginContainer>
    </Container>
  );
};

export { Login };
