import gql from 'graphql-tag';

export const GET_CLIP = gql`
  query getClip($pk: String!, $sk: String!) {
    getClip(pk: $pk, sk: $sk) {
      id
      created_utc
      title
      author
      permalink
      thumbnail
      url
      embed {
        content
      }
    }
  }
`;
