import React from 'react';
import {
  AutoSizer,
  InfiniteLoader,
  List,
  WindowScroller
} from 'react-virtualized';
import 'react-virtualized/styles.css';

import ClipPreview from './ClipPreview';
import { IClip } from '../data/clip.interface';

const REMOTE_ROW_COUNT = 500,
  OVERSCAN_ROW_COUNT = 1,
  MINIMUM_BATCH_SIZE = 20,
  THRESHOLD = 10;

export default class Clips extends React.PureComponent {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  isRowLoaded = ({ index }) => {
    return !!this.props.clips[index];
  };

  rowRenderer = ({ key, index, style, isScrolling, isVisible }) => {
    return (
      <ClipPreview
        key={key}
        style={style}
        clip={this.props.clips[index]}
        isVisible={isVisible}
        isScrolling={isScrolling}
        isLink={true}
      />
    );
  };

  getRowHeight = ({ index }: { index: number }) => {
    // TODO: extract the hardcoded values
    // 38 = Header margin-bottom + ClipTitle line-height
    // 96 = ClipContainer padding-top

    const clip: IClip = this.props.clips[index];
    const windowWidth: number = window.innerWidth;
    const maxHeight: number = window.innerHeight * 0.7;

    let clipWidth: number =
      windowWidth > 1024 ? windowWidth * 0.9 : windowWidth;
    if (clipWidth > 1600) clipWidth = 1600;

    let videoHeight = (clipWidth * clip.embed.height) / clip.embed.width;
    if (videoHeight > maxHeight) videoHeight = maxHeight;

    let headerHeight = 38;
    let paddingTop = 96;
    if (windowWidth < 768) {
      headerHeight = 40;
      paddingTop = 32;
    } else if (windowWidth <= 1024) headerHeight = 56;

    const clipHeight: number = headerHeight + videoHeight + paddingTop;

    return Math.round(clipHeight);
  };

  onResize = ({ height, width }: { height: number, width: number }) => {
    if (this.listRef) {
      this.listRef.recomputeRowHeights();
    }
  };

  render() {
    if (!(this.props.clips && this.props.clips.length > 0))
      return <span>No clips to display</span>;

    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.props.loadMoreRows}
        minimumBatchSize={MINIMUM_BATCH_SIZE}
        rowCount={REMOTE_ROW_COUNT}
        threshold={THRESHOLD}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, isScrolling, scrollTop, onChildScroll }) => (
              <AutoSizer disableHeight onResize={this.onResize}>
                {({ width }) => (
                  <List
                    ref={(list) => {
                      this.listRef = list;
                      registerChild(list);
                    }}
                    height={height}
                    autoHeight
                    width={width}
                    overscanRowCount={OVERSCAN_ROW_COUNT}
                    onRowsRendered={onRowsRendered}
                    rowCount={this.props.clips.length}
                    estimatedRowSize={Math.round(window.innerHeight * 0.85)}
                    rowHeight={this.getRowHeight}
                    rowRenderer={this.rowRenderer}
                    scrollTop={scrollTop}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollToAlignment="center"
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    );
  }
}
