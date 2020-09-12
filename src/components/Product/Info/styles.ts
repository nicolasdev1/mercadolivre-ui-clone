import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid var(--color-border);

  padding: 44px 32px;

  > h2 {
    font-size: 24px;

    margin-bottom: 32px;
  }

  > p {
    font-size: 20px;
    color: var(--color-gray);

    line-height: 27px;
  }
`;
