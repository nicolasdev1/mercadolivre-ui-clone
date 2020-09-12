import React from 'react';

import Info from './Info';
import ProductAction from './ProductAction';
import SellerInfo from './SellerInfo';
import WarrantySection from './WarrantySection';

import tshirtImage from '../../assets/tshirt.png';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

export default Product;
