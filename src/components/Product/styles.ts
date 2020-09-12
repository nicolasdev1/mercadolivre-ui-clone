import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 16px;

  > a {
    font-size: 14px;
    color: var(--color-blue);
    text-decoration: none;

    padding: 2.5px 0;

    & + a {
      border-left: 1px solid var(--color-border);

      margin-left: 10px;
      padding-left: 10px;
    }
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;

  background-color: var(--color-white);
  box-shadow: var(--panel-shadow);
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 530px;

  > img {
    height: 73%;
  }
`;
