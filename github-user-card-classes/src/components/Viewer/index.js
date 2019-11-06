/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import User from "../User";
import UserList from "../UserList";
import query from "./query";
import styles from "./styles";

class Viewer extends Component {
  state = { viewer: {} };

  componentDidMount() {
    const { client } = this.props;

    client
      .query({
        query,
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
      <div css={styles}>
        <h1>
          Github info for {`${viewer.name}`}{" "}
          <span>{`(@${viewer.login})`}</span>
        </h1>
        <User user={viewer} />
        <hr />
        <h2>{viewer.name}'s followers:</h2>
        <UserList users={viewer.followers.nodes} />
      </div>
    ) : (
      <div>Fetching viewer...</div>
    );
  }
}

export default Viewer;
