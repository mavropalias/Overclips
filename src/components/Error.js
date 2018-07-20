import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 128px;
  text-align: center;
  overflow: hidden;

  .svg-inline--fa {
    font-size: 128px;
    margin-bottom: 32px;
    color: #ff9c00;
  }

  p {
    color: #767676;
    max-width: 700px;
    font-size: 18px;
  }
`;

export default function Error({ message }) {
  return (
    <ErrorContainer>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <h1>Just Squishing A Bug</h1>
      <p>{message}</p>
    </ErrorContainer>
  );
}
