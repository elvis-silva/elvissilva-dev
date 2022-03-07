import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`

  from{
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }

`

export const Center = styled.button`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>:first-child {
    animation: ${rotate} infinite 3s linear;
  }

`