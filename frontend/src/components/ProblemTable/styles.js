import styled from 'styled-components';

export const Container = styled.header`
  strong {
    display: block;
    font-size: 24px;
    color: #444;
    margin-bottom: 30px;
  }
`;

export const ContainerTable = styled.div`
  overflow-x: auto;
  margin-top: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  text-align: left;

  th {
    padding-bottom: 10px;
  }

  td {
    padding: 5px;
    text-align: left;
    font-size: 16px;
    color: #666;
    background: #fff;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    background: #f4effc;
    height: 30px;
    width: 30px;
    color: #a28fd0;
    border-radius: 50%;
    text-align: center;
    line-height: 33px;
    margin-right: 5px;
  }
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const TableRow = styled.tr`
  .desc {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
