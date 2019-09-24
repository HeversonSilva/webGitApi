import styled, { keyframes, animation } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  justify-items: center;
  text-align: center;
  background: linear-gradient(-90deg, #3d84a7, #46cdcf);
`;

const jumb = keyframes`

transform:translateY(0px)
		}
		50% {
			transform:translateY(-30px);
			box-shadow:0 15px 0 rgb(242, 198, 64);
		}
		100% {
			transform:translateY(0px)
		}
`;

export const Owner = styled.ul`
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  li {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: rgba(50, 50, 50, 0.2);

    h1 {
      color: #333;
    }

    span {
      color: #eee;
      padding: 5px;
      background: rgba(50, 50, 50, 0.2);
      border-radius: 10px;
    }

    p {
      max-width: 200px;
      margin-top: 5px;
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: #eee;
    }
  }
`;

export const LoadingContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1em auto;
  font-family: 'Roboto';
  background: linear-gradient(-90deg, #3d84a7, #46cdcf);

  span {
    font-size: 3em;
    color: #f2c640;
    background: #262b37;
    display: table-cell;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3), 0 5px 0 #ccc;
    padding: 0 15px;
    line-height: 100px;
    animation: ${jumb} 2s infinite;
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  color: #eee;
  font-size: 48px;
`;
