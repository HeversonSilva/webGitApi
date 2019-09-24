import React from 'react';

import { Container, GoBack } from './styles';

export default function Howto() {
  return (
    <Container>
      <strong>How to use</strong>
      <p>To use is simple, just search a github profile name and enjoy</p>
      <span>Or just send me a e-mail: heversonjr@outlook.com</span>
      <hr />
      <GoBack to="/">Start using now!</GoBack>
    </Container>
  );
}
