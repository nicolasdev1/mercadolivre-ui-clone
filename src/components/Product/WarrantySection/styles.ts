import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 32px;

  border-top: 1px solid var(--color-border);

  &:first-child {
    border: 0;
  }

  > h4 {
    font-size: 18px;

    margin-bottom: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }

    .title {
      font-size: 16px;
      color: var(--color-black);
    }

    .description {
      font-size: 14px;
      color: var(--color-gray);

      line-height: 19px;
      margin-top: 5px;
    }
  }

  > a {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: var(--color-blue);

    margin-top: 20px;
  }
`;
