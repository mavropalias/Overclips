import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const LogoContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
  border-radius: 8px;
`;
const Tagline = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  text-transform: uppercase;
  text-align: center;
  padding-top: 8px;
  font-weight: 300;
  white-space: nowrap;
`;

function getTagline(): string {
  return Taglines[Math.floor(Math.random() * Taglines.length)];
}

export default class Logo extends Component {
  state = { tagline: 'Billions & billions of Overwatch clips' };

  onLogoClick(): void {
    //TODO: only scrollTo if we're on the homepage
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    this.setState({ tagline: getTagline() });
  }

  render() {
    return (
      <LogoContainer onClick={this.onLogoClick.bind(this)}>
        <img style={{ height: '14px' }} src={logo} alt="Overclips logo" />
        <Tagline>{this.state.tagline}</Tagline>
      </LogoContainer>
    );
  }
}

const Taglines = [
  'Justice delivered',
  'Doo-Woo',
  'Love, D.Va',
  'Try me',
  'A steady blade',
  'Expect nothing less',
  'Tick-Tock-Tick-Tock',
  'Give yourself to the rhythm',
  'Hahaha, Watch and learn',
  'Hang in there',
  'I have my eye on you',
  "I'm simply following my programming",
  'Put your security in my hands',
  'What are you looking at',
  'I salute you',
  'Welcome to the apocalypse',
  "I've still got it",
  "Where's the fun in playing fair?",
  'Such a lack of imagination',
  'Hard work pays off',
  'You got it',
  'Curious',
  'Strong as the mountain',
  'We are in harmony'
];
