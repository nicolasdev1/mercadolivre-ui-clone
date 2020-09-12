import React from 'react';

import { Container } from './styles';

const Info: React.FC = () => {
  return (
    <Container>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque leo libero, convallis quis finibus at, 
        fringilla eget urna. Fusce sit amet dolor non justo 
        vehicula convallis. Suspendisse vestibulum risus sed 
        purus gravida congue. Morbi dignissim, enim a porta 
        scelerisque, magna neque bibendum odio, bibendum 
        scelerisque nulla erat eu mauris. Phasellus vehicula 
        id lacus non semper.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Integer interdum eleifend porttitor. Maecenas varius 
        efficitur metus vitae dictum. Donec placerat, nisi id 
        interdum pharetra, libero mi tincidunt nunc, eu 
        fermentum risus libero id nunc. Sed sagittis faucibus 
        leo, sit amet tempor turpis vulputate sit amet. 
        Aliquam cursus lacus in hendrerit hendrerit. 
        Praesent imperdiet risus mauris.
      </p>
    </Container>
  );
};

export default Info;
