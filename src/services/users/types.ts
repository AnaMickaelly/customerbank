export type UsersProps = {
  data: Array<{
    bank: {
      bankName: string;
      code: string;
      agency: string;
      account: string;
    };
    document: string;
    id: number;
    name: string;
  }>;
};
