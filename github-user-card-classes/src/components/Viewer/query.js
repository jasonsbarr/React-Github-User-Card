import gql from "graphql-tag";

const query = gql`
  query {
    viewer {
      id
      login
      bio
      company
      createdAt
      email
      name
      avatarUrl
      resourcePath
      followers(last: 10) {
        nodes {
          id
          login
          bio
          company
          createdAt
          email
          name
          avatarUrl
          resourcePath
        }
      }
    }
  }
`;

export default query;
