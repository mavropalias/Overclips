import React from 'react';
import {
  AutoSizer,
  InfiniteLoader,
  List,
  WindowScroller
} from 'react-virtualized';
import 'react-virtualized/styles.css';

import ClipPreview from './ClipPreview';

const REMOTE_ROW_COUNT = 500,
  OVERSCAN_ROW_COUNT = 2,
  MINIMUM_BATCH_SIZE = 20,
  THRESHOLD = 10;

export default class Clips extends React.PureComponent {
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

  getRowHeight = () => {
    return Math.round(window.innerHeight * 0.85);
    //TODO: remove the hardcoded value
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
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    height={height}
                    autoHeight
                    width={width}
                    overscanRowCount={OVERSCAN_ROW_COUNT}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
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
