import React from 'react';
import { Query } from 'react-apollo';

import Error from './Error';
import ClipPreview from './ClipPreview';
import Clips from './Clips';

import { loadMoreRows } from '../lib/util';
import { LIST_CLIPS } from '../graphql/ListClips';

export default class QueryClips extends React.PureComponent {
  render() {
    return (
      <Query
        query={LIST_CLIPS}
        variables={{ first: 20, after: '' }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <Error message={error.message} />;
          }

          if (loading && !data.listClips) {
            return <div>Loading</div>;
            //return <ClipPreview />;
          } else if (!loading && !data.listClips) {
            return <div>No clips found</div>;
          }

          return (
            <Clips
              clips={data.listClips.items}
              loadMoreRows={({ startIndex, stopIndex }) => {
                return loadMoreRows({
                  startIndex: startIndex,
                  stopIndex: stopIndex,
                  nextToken: data.listClips.nextToken,
                  fetchMore: fetchMore
                });
              }}
            />
          );
        }}
      </Query>
    );
  }
}
