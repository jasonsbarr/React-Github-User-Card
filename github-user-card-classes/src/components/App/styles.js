import { css } from "@emotion/core";

const styles = css`
  align-items: center;
  border: 3px solid #dddddd;
  border-radius: 5px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", Arial, sans-serif;
  margin: 1.5rem auto;
  max-width: 820px;
  padding: 1.5rem 3rem;
  width: 90%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway", sans-serif;
    font-weight: 600;

    span {
      color: #999999;
    }
  }

  h1 {
    span {
      font-size: 1.5rem;
    }
  }
`;

export default styles;
