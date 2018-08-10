import gql from 'graphql-tag';

export const LIST_CLIPS = gql`
  query listClips($first: Int, $after: String) {
    listClips(first: $first, after: $after) {
      items {
        id
        created_utc
        title
        author
        permalink
        thumbnail
        url
        embed {
          content
          width
          height
        }
      }
      nextToken
    }
  }
`;
