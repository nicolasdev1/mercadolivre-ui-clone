import React from 'react';

import {
  Container,
  QuantitySold,
  Row,
  HeartIcon,
  RowReputation,
  StarIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <QuantitySold>2869 vendidos</QuantitySold>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>

        <HeartIcon />
      </Row>

      <RowReputation>
        <StarIcon className="active" />
        <StarIcon className="active" />
        <StarIcon className="active" />
        <StarIcon className="active" />
        <StarIcon />

        <span>139 opiniões</span>
      </RowReputation>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>

        <a href="#">Ver os meios de pagamentos</a>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>

          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button>Comprar agora</Button>
        <Button outlined>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />

          <p>
            <a href="#" className="guaranteed-purchase">Compra garantida</a>, receba o produto que está esperando 
            ou devolvemos o seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
