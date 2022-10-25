export type UsersProps = {
  data: Array<{
    bank: {
      bankName: string;
      code: string;
      agency: string;
      account: string;
    };
    date: string;
    document: string;
    id: number;
    name: string;
  }>;
};

export type UserProps = {
  bank: {
    bankName: string;
    agency: string;
    account: string;
  };
  date: string;
  document: string;
  name: string;
  id: number;
};
