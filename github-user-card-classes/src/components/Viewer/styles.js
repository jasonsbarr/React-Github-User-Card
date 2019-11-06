import { css } from "@emotion/core";

const styles = css`
  h1,
  h2 {
    text-align: center;
  }

  hr {
    border-top: 2px solid #aaaaaa;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1rem;
    width: 90%;

    @media (max-width: 834px) {
      margin-top: -1.5rem;
    }
  }
`;

export default styles;
