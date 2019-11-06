/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ApolloConsumer } from "react-apollo";
import Viewer from "../Viewer";
import styles from "./styles";

const App = () => (
  <div css={styles}>
    <ApolloConsumer>
      {client => <Viewer client={client} />}
    </ApolloConsumer>
  </div>
);

export default App;
