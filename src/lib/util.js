import { LIST_CLIPS } from '../graphql/ListClips';

export const loadMoreRows = ({
  startIndex,
  stopIndex,
  nextToken,
  fetchMore
}) => {
  fetchMore({
    query: LIST_CLIPS,
    variables: {
      first: stopIndex - startIndex,
      after: nextToken
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return prev;
      }

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
