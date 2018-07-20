import React from 'react';
import { IClip } from '../data/clip.interface';
import styled from 'styled-components';

const StyledVideo = styled.video`
  flex: 1;
  display: flex;
  width: 90%;
  max-width: 1600px;
  background-color: #000;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function getMp4VideoSourceFromUrl(url: string): string {
  url = url.replace('gfycat', 'giant.gfycat');
  url += '.mp4';
  return url;
}

function getWebmVideoSourceFromUrl(url: string): string {
  url = url.replace('gfycat', 'giant.gfycat');
  url += '.webm';
  return url;
}

export default function VideoPlayer({ clip }: { clip: IClip }) {
  return (
    <StyledVideo autoPlay poster={clip && clip.thumbnail} controls loop muted>
      {clip ? (
        <React.Fragment>
          <source src={getMp4VideoSourceFromUrl(clip.url)} type="video/mp4" />
          <source src={getWebmVideoSourceFromUrl(clip.url)} type="video/webm" />
        </React.Fragment>
      ) : (
        ''
      )}
    </StyledVideo>
  );
}
