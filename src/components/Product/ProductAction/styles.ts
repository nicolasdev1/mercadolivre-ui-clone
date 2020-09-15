import styled from 'styled-components';
import {
  Heart,
  Star,
  Check,
  Truck,
} from 'styled-icons/feather';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;
`;

export const QuantitySold = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: gray;

  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;

    margin-top: 6px;

    font-size: 24px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(Heart)`
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  margin-left: 16px;

  color: var(--color-blue);
  cursor: pointer;
`;

export const RowReputation = styled.div`
  display: flex;
  align-items: center;

  margin-top: 4px;

  > span {
    font-size: 13px;

    margin-left: 8px;
  }
`;

export const StarIcon = styled(Star)`
  width: 21px;
  height: 21px;

  color: #ddd;
  fill: #ddd;

  &.active {
    color: var(--color-blue);
    fill: var(--color-blue);
  }
`;

export const DispatchTag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-size: 13px;
  font-weight: 600;
  color: var(--color-blue);

  margin: 12px 0 18px;
  padding: 6px 10px;

  background-color: rgba(65,137,230,.1);
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    font-size: 13px;
    font-weight: 500;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 40px;
  font-weight: 300;

  .symbol {
    margin-left: -3px;
  }

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;

    padding-top: 7px;
    margin-left: 2px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;

  margin-bottom: 8px;
`;

export const StockStatus = styled.div`
  margin-top: 16px;

  font-size: 16px;
`;

export const MethodCard = styled.div`
  display: flex;

  margin-top: 18px;

  > div {
    display: flex;
    flex-direction: column;

    margin-left: 8px;

    .title {
      font-size: 16px;
      color: var(--color-green);
    }

    .details {
      font-size: 15px;
      color: var(--color-gray);
    }

    .more {
      font-size: 13px;
      font-weight: 500;
      color: var(--color-blue);
      text-decoration: none;

      margin-top: 5px;
    }
  }
`;

export const CheckIcon = styled(Check)`
  width: 21px;
  height: 21px;

  color: var(--color-green);
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 40fr 60fr;

  > button + button {
    margin-left: 10px;
  }
`;

type ButtonProps = {
  outlined?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  color: ${props => props.outlined ? 'var(--color-blue)' : 'var(--color-white)'};
  
  background-color: ${props => props.outlined ? 'transparent' : 'var(--color-blue)'};

  border: ${props => props.outlined ? '1px solid var(--color-blue)' : 'none'};
  border-radius: 4px;

  padding: 12px 10px;
  margin-top: 26px;

  outline: 0;
  cursor: pointer;
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  margin-top: 16px;

  > li {
    display: flex;

    > p {
      font-size: 14px;
      color: var(--color-gray);

      margin-left: 10px;
    }

    .guaranteed-purchase {
      text-decoration: none;
      color: var(--color-blue);
    }
  }
`;

export const ShieldIcon = styled(Truck)`
  width: 20px;
  height: 20px;

  flex-shrink: 0;

  color: var(--color-gray);
`;
