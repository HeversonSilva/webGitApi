import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

const typing = keyframes`
  from {
      width: 0;
    }
`;

const blinkCaret = keyframes`
    50% {
      border-color: transparent;
    }
`;

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 100%;
  background: linear-gradient(-90deg, #3d84a7, #46cdcf);
  padding-top: 20%;

  p {
    margin-left: auto;
    margin-right: auto;
    /* padding-top: 20%; */
    text-align: center;
    font: 300% 'Roboto', sans-serif;
    color: #fff;
    font-weight: bold;
    border-right: 5px solid #fff;
    width: 16.5em;
    width: 21ch;
    /* margin: 2em 1em; */
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: ${typing} 2s steps(21, end),
      ${blinkCaret} 0.5s step-end infinite alternate;
  }
`;

export const LinkAssist = styled(Link)`
  margin-left: 58%;
  text-decoration: none;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 50px;
  margin-left: 350px;
  display: flex;
  flex-direction: row;

  li {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      margin: 2px;
    }

    span {
      font-weight: bold;
      font-size: 16px;
      color: #333;
      margin-top: 2px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 15px;
    }
  }
`;

export const SearchBar = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #2f3640;
  border-radius: 60px;
`;

export const Form = styled.form`
  &:hover > input {
    width: 340px;
    padding: 0 6px;
  }

  &:hover > button {
    background: white;
    color: #2f3640;
  }

  button {
    color: white;
    float: right;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  input {
    text-align: center;
    margin-top: 10px;
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 20px;
    transition: 0.4s;
    line-height: 40px;
    width: 0;
  }
`;
