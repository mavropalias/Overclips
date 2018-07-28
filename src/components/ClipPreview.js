import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';

import { IClip } from '../data/clip.interface';
import VideoPlayer from './VideoPlayer';
// import DataGatherer from './DataGatherer';

const ClipContainer = styled.article`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 96px;
  text-align: left;
  overflow: hidden;
`;

const Header = styled.header`
  width: 90%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ClipTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  color: #767676;
  font-size: 16px;
  margin-right: 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    margin-right: 32px;
  }
`;

const ClipMeta = styled.aside`
  color: #767676;
  flex-shrink: 0;
  font-size: 12px;
`;

const ClipSubtitle = styled.span``;
const ClipPermalink = styled.span`
  a {
    color: #767676;
    text-decoration: underline;
  }
`;

const HtmlEmbedContainer = styled.section`
  flex: 1;
  display: flex;
  width: 90%;
  max-width: 1600px;
  background-color: #000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;

  & > iframe {
    flex: 1;
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function canHandleVideoSource(url: string) {
  //TODO: develop this capability further
  return false;
  // if (url.includes('gfycat')) return true;
}

export default function Clip({ clip, style, isVisible, isScrolling, isLink }) {
  return (
    <ClipContainer style={style}>
      <Header>
        <ClipTitle>
          {clip ? (
            isLink ? (
              <Link
                to={`/${clip.created_utc}`}
                title={`View Overwatch clip details`}
              >
                {clip.title}
              </Link>
            ) : (
              clip.title
            )
          ) : null}&nbsp;
        </ClipTitle>
        {clip ? (
          <ClipMeta>
            Posted{' '}
            <Moment interval={0} parse="X" fromNow>
              {clip.created_utc}
            </Moment>
            <ClipSubtitle> by {clip.author} </ClipSubtitle>
            <ClipPermalink>
              on{' '}
              <a
                href={`https://reddit.com${clip.permalink}`}
                target="_blank"
                rel="noopener"
              >
                Reddit
              </a>.
            </ClipPermalink>
          </ClipMeta>
        ) : (
          ''
        )}
      </Header>
      {!clip || canHandleVideoSource(clip.url) ? (
        <VideoPlayer clip={clip} />
      ) : (
        <HtmlEmbedContainer
          dangerouslySetInnerHTML={{
            __html: isVisible ? clip.embed.content : ''
          }}
          style={{ backgroundImage: `url(${clip.thumbnail})` }}
        />
      )}
      {/* <DataGatherer clip={clip} /> */}
    </ClipContainer>
  );
}
