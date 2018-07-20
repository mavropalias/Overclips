import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 70px;
  transform: skew(-8deg);
  margin: 0 6px;
  background-color: white;
  border-radius: 7px;
  overflow: hidden;
  cursor: default;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #ff9c00;
    border-color: #ff9c00;
  }
`;

const HeroPortrait = styled.div`
  display: block;
  position: relative;
  width: 70px;
  height: 84px;
  border: 3px solid transparent;
  background-color: #333;
  background-clip: padding-box;
  overflow: hidden;

  div {
    width: calc(100% + 10px);
    height: 100%;
    background-size: cover;
    background-position: center;
    transform: skew(8deg) translateX(-5px);
  }
`;
const HeroName = styled.div`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export default function Hero({ hero }) {
  return (
    <HeroContainer>
      <HeroPortrait className="hero-portrait">
        <div
          style={{
            backgroundImage:
              'url(https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png)'
          }}
        />
      </HeroPortrait>
      <HeroName className="hero-name">{hero}</HeroName>
    </HeroContainer>
  );
}
