import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { Dashboard as DashboardPage } from '../src/pages/dashboard';
import { GetUser } from '../src/services/users/users';

const Dashboard = ({ users }: any) => {
  return <DashboardPage data={users} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const users = await GetUser();
  const token = nookies.get(ctx, 'token');

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { users },
  };
};

export default Dashboard;
