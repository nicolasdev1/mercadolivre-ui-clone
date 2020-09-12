import styled, { css } from 'styled-components';
import {
  AiOutlinePushpin,
  AiOutlineMessage,
  AiOutlineClockCircle,
} from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 32px;

  border-top: 1px solid var(--color-border);

  > a {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: var(--color-blue);

    margin-top: 24px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 20px;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;

  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }

    > strong {
      font-size: 14px;
      font-weight: 400;
      color: var(--color-gray);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;
  
export const LocationIcon = styled(AiOutlinePushpin)`
  ${iconCSS}
`;
  
export const ReputationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 33px;
`;
  
export const ReputationThermometer = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;

  width: 100%;

  padding: 0 4px;

  list-style: none;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background-color: var(--reputation-1);
    }

    &:nth-child(2) {
      background-color: var(--reputation-2);
    }

    &:nth-child(3) {
      background-color: var(--reputation-3);
    }

    &:nth-child(4) {
      background-color: var(--reputation-4);
    }

    &:nth-child(5) {
      background-color: var(--reputation-5);
    }

    &.active {
      height: 12px;

      margin-top: -2px;
    }
  }
`;
  
export const ReputationRow = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    width: 33%;

    text-align: center;

    padding: 0 10px;

    > strong {
      height: 30px;

      font-size: 24px;
      font-weight: 500;
    }

    > span {
      font-size: 12px;
    }

    & + div {
      &::before {
        content: '';

        height: 36px;

        position: absolute;
        left: 0;
        top: 50%;

        transform: translateY(-50%);

        border-left: 1px solid var(--color-border);
      }
    }
  }
`;
  
export const SupportIcon = styled(AiOutlineMessage)`
  ${iconCSS}
`;
  
export const ClockIcon = styled(AiOutlineClockCircle)`
  ${iconCSS}
`;
