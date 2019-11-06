import React, { Component } from "react";
import gql from "graphql-tag";
import User from "../User";
import UserList from "../UserList";

class Viewer extends Component {
  state = { viewer: {} };

  componentDidMount() {
    const { client } = this.props;

    client
      .query({
        query: gql`
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
        `,
      })
      .then(response =>
        this.setState({
          ...this.state,
          viewer: response.data.viewer,
        }),
      );
  }

  render() {
    const { viewer } = this.state;

    return viewer.login ? (
      <>
        <User user={viewer} />
        <UserList users={viewer.followers.nodes} />
      </>
    ) : (
      <div>Fetching viewer...</div>
    );
  }
}

export default Viewer;
