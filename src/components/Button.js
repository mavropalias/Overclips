import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #ff9c00;
  color: white;
  padding: 0 16px;
  font-weight: 900;
  font-size: 13px;
  line-height: 32px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 4px;
  transform: skew(-8deg);

  &.secondary {
    background-color: white;
    border-color: #ff9c00;
    color: #ff9c00;
  }

  &.icon {
    padding: 0 4px;
    font-size: 18px;
  }
`;

function getButtonClassNames(icon: boolean, secondary: boolean): string {
  let classNames: string = '';

  if (icon) {
    classNames += ' icon ';
  }

  if (secondary) {
    classNames += ' secondary ';
  }

  return classNames;
}

export default function Button({ secondary, children, icon, onClick }) {
  return (
    <ButtonContainer
      className={getButtonClassNames(icon, secondary)}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}
