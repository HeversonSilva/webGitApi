import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 100%;
  background: linear-gradient(-90deg, #3d84a7, #46cdcf);
  text-align: center;
  padding-top: 80px;

  strong {
    font-size: 48px;
    color: #eee;
  }

  p {
    margin-top: 80px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
  }

  span {
    margin-top: 10px;
    font-size: 15px;
    color: #333;
  }

  hr {
    border: 1px solid rgba(50, 50, 50, 0.2);
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;

export const GoBack = styled(Link)`
  text-decoration: none;
  color: #eee;
  font-size: 20px;
`;
