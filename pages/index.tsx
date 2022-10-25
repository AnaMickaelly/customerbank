import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Login } from '../src/pages/Login';

export default function Home() {
  return <Login />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = parseCookies(ctx);

  if (token['token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
