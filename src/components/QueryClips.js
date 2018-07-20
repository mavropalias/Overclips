import React from 'react';
import { Query } from 'react-apollo';

import Error from './Error';
import ClipPreview from './ClipPreview';
import Clips from './Clips';

import { LIST_CLIPS } from '../graphql/ListClips';

const loadMoreRows = ({ startIndex, stopIndex, nextToken, fetchMore }) => {
  fetchMore({
    query: LIST_CLIPS,
    variables: {
      first: stopIndex - startIndex,
      after: nextToken
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;

      const combinedListClips = Object.assign({}, prev.listClips, {
        items: [...prev.listClips.items, ...fetchMoreResult.listClips.items],
        nextToken: fetchMoreResult.listClips.nextToken
      });

      const returnClips = Object.assign({}, prev, {
        listClips: combinedListClips
      });

      return returnClips;
    }
  });
};

export default class QueryClips extends React.PureComponent {
  render() {
    return (
      <Query
        query={LIST_CLIPS}
        variables={{ first: 20, after: '' }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading && !data.listClips) return <ClipPreview />;
          if (error) return <Error message={error.message} />;
          return (
            <Clips
              clips={data.listClips.items}
              loadMoreRows={(params) => {
                return loadMoreRows({
                  ...params,
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
