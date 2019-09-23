import styled, { keyframes } from 'styled-components';

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
  background: linear-gradient(-90deg, #dea3c8, #ffc8a8);
  padding-top: 20%;

  p {
    margin-left: 38%;
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

export const SearchBar = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #2f3640;
  border-radius: 40px;

  &:hover > input {
    width: 240px;
    padding: 0 6px;
  }

  &:hover > button {
    background: white;
    color: #2f3640;
  }

  button {
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0;
  }
`;
