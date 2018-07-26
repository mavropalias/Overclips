import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRedditAlien,
  faTwitter,
  faGithub,
  faGit
} from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: white;
  min-height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid #dddddd;

  & > * {
    flex: 1;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-left: 8px;
  }
`;

const MenuContainer = styled.div`
  color: #ccc;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: default;
`;

function openSubreddit(): void {
  window.open('https://reddit.com/r/Overclips', '_blank');
}

function openTwitter(): void {
  window.open('https://twitter.com/overclips_', '_blank');
}

function openGithub(): void {
  window.open('https://github.com/mavropalias/overclips', '_blank');
}

export function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>Hero filters coming soon…</MenuContainer>
      <Link to="/" title="Overclips — Best Overwatch potg, highlights & clips">
        <Logo />
      </Link>
      <ButtonsContainer>
        <Button secondary icon onClick={openTwitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Button secondary icon onClick={openGithub}>
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button secondary icon onClick={openSubreddit}>
          <FontAwesomeIcon icon={faRedditAlien} />
        </Button>
        {/* <Button disabled>Submit</Button> */}
      </ButtonsContainer>
    </HeaderContainer>
  );
}
