import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';

import VideoPlayer from './VideoPlayer';
import { IClip } from '../data/clip.interface';
// import DataGatherer from './DataGatherer';

const ClipContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  text-align: left;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    padding-bottom: 96px;
  }
`;

const Header = styled.header`
  width: 90%;
  min-width: calc(100% - 16px);
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    min-width: auto;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const ClipTitle = styled.h2`
  width: 100%;
  margin: 0;
  font-weight: 500;
  color: #767676;
  font-size: 13px;
  line-height: 14px;
  margin-right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 22px;
    font-weight: 600;
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

export default function Clip({
  clip,
  style,
  isVisible,
  isScrolling,
  isLink
}: {
  clip: IClip,
  style?: {},
  isVisible: boolean,
  isScrolling: boolean,
  isLink: boolean
}) {
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
      <VideoPlayer
        clip={clip}
        playing={isVisible /* && !isScrolling */}
        visible={isVisible}
      />
      {/* <DataGatherer clip={clip} /> */}
    </ClipContainer>
  );
}
