import React from 'react';

import { Container, GoBack } from './styles';

export default function Howto() {
  return (
    <Container>
      <strong>How to use</strong>
      <p>Is simple</p>
      <GoBack to="/">Start using now!</GoBack>
    </Container>
  );
}
