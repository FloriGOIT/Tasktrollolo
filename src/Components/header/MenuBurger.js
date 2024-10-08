import React from 'react';
import styled from 'styled-components';

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px; 
  height: 24px; 
  background: transparent; 
  border: none; 
  cursor: pointer; 
  padding: 0; 

  &:focus {
    outline: none; 
  }

  div {
    width: 100%;
    height: 3px; 
    background: ${(props) => props.theme.colors.textColor}; 
    transition: all 0.3s ease;
  }
`;

export default function MenuBurger({ handleAsideHide }) {
  return (
    <BurgerButton onClick={handleAsideHide}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerButton>
  );
}
