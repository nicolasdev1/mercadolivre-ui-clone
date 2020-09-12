import React from 'react';

import { Container } from './styles';

const WarrantySection: React.FC = () => {
  return (
    <Container>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
        </span>

        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Container>
  );
};

export default WarrantySection;
