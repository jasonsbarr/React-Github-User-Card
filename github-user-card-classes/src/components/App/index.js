import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import Viewer from "../Viewer";

class App extends Component {
  render() {
    return (
      <ApolloConsumer>
        {client => <Viewer client={client} />}
      </ApolloConsumer>
    );
  }
}

export default App;
