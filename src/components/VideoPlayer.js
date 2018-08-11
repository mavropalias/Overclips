import React from 'react';
import styled from 'styled-components';

import ErrorBoundary from './ErrorBoundary';
import { IClip } from '../data/clip.interface';

const StyledVideo = styled.video`
  flex: 1;
  display: flex;
  width: 100%;
  max-width: 1600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  @media (min-width: 1600px) {
    width: 90%;
  }
`;

const HtmlEmbedContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  max-width: 1600px;
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  & > iframe {
    flex: 1;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 90%;
  }
`;

function getBaseUrl(url: string): string {
  return 'https://giant.gfycat.com/' + getVideoId(url);
}

function canHandleVideoSource(url: string) {
  //TODO: develop this capability further
  if (
    url.includes('gfycat.com') &&
    getBaseUrl(url) !== getBaseUrl(url).toLowerCase()
  )
    return true;
}

function getVideoId(url: string): string {
  return url.substring(url.lastIndexOf('/') + 1);
}

function getThumbUrl(url: string): string {
  return 'https://thumbs.gfycat.com/' + getVideoId(url) + '-mobile.jpg';
}

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() {
    if (this.props.playing === true) {
      this.playVideo();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.playing !== prevProps.playing) {
      if (this.props.playing === true) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    }
  }

  componentWillUnmount() {
    // Change src attribute so that the browser stops downloading the video
    if (Object.isExtensible(this.video)) {
      this.video.src = '';
      this.playVideo();
    }
  }

  playVideo() {
    if (this.video && typeof this.video.play === 'function') {
      var playPromise = this.video.play();

      if (playPromise !== undefined) {
        playPromise.then((_) => {}).catch((error) => {});
      }
    }
  }

  pauseVideo() {
    if (this.video && typeof this.video.pause === 'function') {
      var playPromise = this.video.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            this.video.pause();
          })
          .catch((error) => {});
      }
    }
  }

  render() {
    const { clip, visible }: { clip: IClip, visible: boolean } = this.props;

    if (!clip) {
      return <span>No clip</span>;
    }

    return (
      <React.Fragment>
        {canHandleVideoSource(clip.url) ? (
          <ErrorBoundary>
            <StyledVideo
              innerRef={(x) => {
                this.video = x;
              }}
              poster={getThumbUrl(clip.url)}
              preload="auto"
              loop
              playsinline
              muted
            >
              <source src={getBaseUrl(clip.url) + '.mp4'} type="video/mp4" />
              <source src={getBaseUrl(clip.url) + '.webp'} type="video/webp" />
              <source src={getBaseUrl(clip.url) + '.webm'} type="video/webm" />
            </StyledVideo>
          </ErrorBoundary>
        ) : (
          <HtmlEmbedContainer
            dangerouslySetInnerHTML={{
              __html: visible ? clip.embed.content : ''
            }}
          />
        )}
      </React.Fragment>
    );
  }
}
