import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";

import ClipPreview from "./ClipPreview";
import Error from "./Error";

import { GET_CLIP } from "../graphql/GetClip";

const ClipContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export default function Clip({ match }) {
  return (
    <Query
      query={GET_CLIP}
      fetchPolicy="cache-first"
      variables={{ pk: "feed", sk: match.params.id }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <span />; //<ClipPreview />;
        }

        if (error) {
          return <Error message={error.message} />;
        }

        if (!data.getClip) {
          return <Error message="Clip could not be loaded." />;
        }

        return (
          <ClipContainer>
            <ClipPreview
              clip={data.getClip}
              isVisible={true}
              isScrolling={false}
              isLink={false}
            />
          </ClipContainer>
        );
      }}
    </Query>
  );
}
