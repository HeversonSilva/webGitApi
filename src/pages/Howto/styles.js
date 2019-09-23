import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 100%;
  background: linear-gradient(-90deg, #3d84a7, #46cdcf);
`;

export const GoBack = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
