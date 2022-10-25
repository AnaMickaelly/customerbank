import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  text-align: center;

  thead {
    background: #0054ff;
    color: #fff;

    tr {
      th {
        padding: 14px 0;
      }
    }
  }

  tbody {
    color: #000;

    tr {
      td {
        text-align: center;
        font-weight: 600;
        font-size: 16px;

        color: #464e5f;
        padding: 24px 0;
      }
    }
  }

  .actions {
    display: flex;
    gap: 12px;

    img {
      cursor: pointer;
    }
  }
`;
