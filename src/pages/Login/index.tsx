import { useRouter } from 'next/router';
import nookies from 'nookies';
import { FieldValues, useForm } from 'react-hook-form';
import '../../../public/images/logo-customerbank.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
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
      if (data.email !== 'user@gmail.com' && data.password !== '123456') {
        console.log('error');
      }

      const dataToken = GenerationToken();
      nookies.set(null, 'token', dataToken.token, {
        maxAge: 30 * 24 * 60 * 60,
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
            <h2>Login</h2>
            <p>Acesse sua conta agora mesmo!</p>
          </Content>
          <Input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Digite seu email:"
          />
          <Input
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
